import path from 'path';
import express from 'express';
import formidable from 'formidable';
import fs from 'fs';
import mv from 'mv';
import { create, find, update, destroy } from './queryRepository';

const app = express(),
      join = require('path').join,
      uploadPath = path.join(__dirname, '../../../', 'uploaded_files/');

/**
 * store image and record
 */
exports.storeImage = (model, req, res, inputField, path) => {
    let form            = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.multiples      = true;

    form.onPart = function (part) {
        if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
            this.handlePart(part);
        }
        else {
          return res.status(400).json({
            error: part.filename + ' is not allowed'
          })
        }
    }

    form.on('fileBegin', (name, file) => {
      let fileExt = file.name.split('.').pop();
      file.name = imageNaming(path, fileExt)
      file.path = uploadPath + path + '/' + file.name
    })

    form.parse(req, (err, fields, files) => {
      
        if (err) {
          return res.status(400).json({
            error: ' Image could not be uploaded'
          })
        }

        if (files[inputField]) {
          // 1kb = 1000
          // 10kb = 10000
          // 100kb = 100000
          // 1MB = 1000000
          if (files[inputField].size > 1000000) {
            return res.status(400).json({
              error: 'Image should be less than 1mb in size'
            })
          }

          fields[inputField] = files[inputField].name;
        } else {
          return res.status(400).json({
            error: 'No image found'
          })
        }

        create(model, fields, res)
        
    })
}

/**
 * update image and record
 */
exports.updateImage = (model, id, req, res, inputField, path) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true

    // validation format type
    form.onPart = function (part) {
        if(!part.filename || part.filename.match(/\.(jpg|jpeg|png)$/i)) {
            this.handlePart(part);
        } else {
          return res.status(400).json({
            error: part.filename + ' is not allowed'
          })
        }
    }

    // file naming
    form.on('fileBegin', (name, file) => {
      let fileExt = file.name.split('.').pop();
      file.name = imageNaming(path, fileExt)
      file.path = uploadPath + path + '/' + file.name
    })

    // parse form
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(400).json({
          error: ' Image could not be uploaded'
        })
      }

      // if file input exist
      if (files[inputField]) {
        // 1kb = 1000
        // 10kb = 10000
        // 100kb = 100000
        // 1MB = 1000000
        if (files[inputField].size > 1000000) {
          res.send({
            error: 'Image should be less than 1mb in size'
          })
        }
        // check if id exist
        model.findById(id)
             .then(newModel => {
                if(newModel){
                  // delete old image
                  deleteOldImage(model, id, path, inputField, res)
                  // set field input file from file name
                  fields[inputField] = files[inputField].name;
                  // update record
                  update(model, id, fields, res);
                } else {
                  res.send({ error: 'ID not Found'})
                }
                
             })
             .catch(err => {
               // remove file uploaded without update record
               if (fs.existsSync(uploadPath + path + '/' + files[inputField].name)) {
                 fs.unlinkSync(uploadPath + path + '/' + files[inputField].name)
               } 
               res.send({ error: 'ID not Found'})
             });
      } else {
        // update record without file upload but check if id exist first 
        model.findById(id)
             .then(newModel => {
                if(newModel){
                    update(model, id, fields, res);
                } else {
                  res.send({ error: 'ID not Found'})
                }
                  
             })
             .catch(err => {
              console.log(err)
                res.send({ error: 'ID not Found'})
             });
      }
    
    })

}


/**
 * delete image and record
 */
exports.deleteImage = (model, id, req, res, inputField, path) => {
  // check if id exist
  model.findById(id)
       .then(newModel => {
          if(newModel){
            // delete old image
            deleteOldImage(model, id, path, inputField, res)
            destroy(model, id, res, path)
          } else {
            res.send({ error: 'ID not Found'})
          }
        })
        .catch(err => {
            res.send({ error: 'ID not Found'})
        });
}


/**
 * remove old image by old name
 */
const deleteOldImage = (model, id, path, inputField, res) => {
  model.findById(id, (err, model) => {
      if (err) {
          res.send(err);
      }

      try {
        if (fs.existsSync(uploadPath + path + '/' + model[inputField])) {
          fs.unlinkSync(uploadPath + path + '/' + model[inputField])
        }
        //file removed
      } catch(err) {
        res.send({
          error: "Image can't be deleted"
        })
      }
  });

}

/**
 * image naming
 */
const imageNaming = (path, extension) => {
    return path + '_' + Date.now() + '.' + extension; 
}
