import path from 'path';
import express from 'express';
import formidable from 'formidable';
import fs from 'fs';
import mv from 'mv';
import { create, update, destroy } from './queryRepository';

const app = express(),
      join = require('path').join,
      uploadPath = path.join(__dirname, '../../../', 'uploaded_files/');

/**
 * upload image
 */
exports.storeImage = (model, req, res, inputField, path) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true

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
            return res.send({
              error: 'Image should be less than 1mb in size'
            })
          }
        }

        fields[inputField] = files.image.name;

        create(model, fields, res)
        
    })
}

/**
 * image naming
 */
const imageNaming = (path, extension) => {
    return path + '_' + Date.now() + '.' + extension; 
}
