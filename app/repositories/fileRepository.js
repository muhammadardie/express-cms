import path from "path";
import formidable from "formidable";
import fs from "fs";
import { destroy } from "./queryRepository";
import { errorResponse, successResponse } from "../utils/response.js";

const uploadPath = path.join(__dirname, "../../", "uploaded_files/");

/**
 * store image and record
 */
exports.storeImage = async (model, req, res, inputField, path) => {
  // Check if the request Content-Type is multipart/form-data
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].startsWith("multipart/form-data")
  ) {
    return errorResponse(
      res,
      "Request Content-Type isn't multipart/form-data",
      500
    );
  }

  let newFileName, uploadedFilePath;
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.multiples = true;

  form.onPart = function (part) {
    if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
      this.handlePart(part);
    } else {
      return errorResponse(res, `${part.filename} is not allowed`);
    }
  };

  form.on("fileBegin", (name, file) => {
    let fileExt = file.name.split(".").pop();
    newFileName = imageNaming(path, fileExt);
    uploadedFilePath = `${uploadPath}${path}/${newFileName}`;
    file.name = newFileName;
    file.path = uploadedFilePath;
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return errorResponse(res, "Error parsing form data");

    if (!files[inputField])
      return errorResponse(res, `${inputField} is required`, 400);

    // Validate image size (10 MB limit using binary system)
    if (files[inputField].size > 10485760)
      return errorResponse(res, "Image should be less than 10 MB in size");

    try {
      fields[inputField] = newFileName;
      const record = await model.create(fields);

      successResponse(res, `${model.modelName} created successfully`, record);
    } catch (error) {
      // Delete the uploaded file if the database operation fails
      if (fs.existsSync(uploadedFilePath)) {
        fs.unlinkSync(uploadedFilePath);
      }
      if (error.name === 'ValidationError') {
        return errorResponse(res, error.message, error.errors);
      }

      errorResponse(res, "Failed to store data", error);
    }
  });
};

/**
 * update image and record
 */
exports.updateImage = (model, id, req, res, inputField, path) => {
  let newFileName, uploadedFilePath;
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  // Validation for image format
  form.onPart = function (part) {
    if (!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
      this.handlePart(part);
    } else {
      return errorResponse(res, `${part.filename} is not allowed`);
    }
  };

  form.on("fileBegin", (name, file) => {
    let fileExt = file.name.split(".").pop();
    newFileName = imageNaming(path, fileExt);
    uploadedFilePath = `${uploadPath}${path}/${newFileName}`;
    file.name = newFileName;
    file.path = uploadedFilePath;
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return errorResponse(res, "Error parsing form data", err);
    // Check if the ID exists in the database first
    try {
      const updatedFields = Object.assign({}, fields);
      delete updatedFields[inputField];

      const record = await model
        .findOneAndUpdate({ _id: id }, updatedFields, {
          new: true,
          runValidators: true,
        })
        .catch((err) => {
          errorResponse(res, "Failed to update data", err);
        });
      
      // Now handle the image if it's uploaded
      if (files[inputField]) {
        // Validate image size (10 MB limit)
        if (files[inputField].size > 10485760)
          return errorResponse(res, "Image should be less than 10 MB in size");

        // exclude image field
        const oldPath = `${uploadPath}${path}/${record[inputField]}`;

        // Update the record with the new image filename
        record[inputField] = newFileName;
        await record.save();

        // delete ol image
        fs.unlinkSync(oldPath);

        // Respond with success
        successResponse(
          res,
          `${model.modelName} updated successfully with image`,
          record
        );
      } else {
        // No image uploaded, just respond with the updated record
        successResponse(res, `${model.modelName} updated successfully`, record);
      }
    } catch (error) {
      // Delete the uploaded file if the database operation fails
      if (fs.existsSync(uploadedFilePath)) {
        fs.unlinkSync(uploadedFilePath);
      }

      if (error.name === 'ValidationError') {
        return errorResponse(res, error.message, error.errors);
      }
      
      errorResponse(res, "Failed to update data", error);
    }
  });
};

/**
 * delete image and record
 */
exports.deleteImage = async (model, id, req, res, inputField, path) => {
  // check if id exist
  model
    .findById(id)
    .then(async (newModel) => {
      if (newModel) {
        // delete old image
        await deleteOldImage(model, id, path, inputField, res);
        await destroy(model, id, res, path);
      } else {
        errorResponse(res, "ID not Found", null, 404);
      }
    })
    .catch((err) => {
      errorResponse(res, "ID not Found", null, 404);
    });
};

/**
 * remove old image by old name
 */
const deleteOldImage = async (model, id, path, inputField, res) => {
  await model.findById(id, (err, thisModel) => {
    if (err) {
      errorResponse(res, "ID not Found", null, 404);
    }

    try {
      if (fs.existsSync(uploadPath + path + "/" + thisModel[inputField])) {
        fs.unlinkSync(uploadPath + path + "/" + thisModel[inputField]);
      }
    } catch (err) {
      errorResponse(res, "Image can't be deleted");
    }
  });
};

/**
 * image naming
 */
const imageNaming = (path, extension) => {
  return path + "_" + Date.now() + "." + extension;
};
