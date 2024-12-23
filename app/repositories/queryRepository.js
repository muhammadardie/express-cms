'use strict'

import { errorResponse, successResponse } from '../utils/response.js';

/**
 * Get object by id
 */

exports.find = async (model, id, res) => {
    model.findById(id)
         .then(record => {
            if(record){
               successResponse(res, `${model.modelName} retrieved successfully`, record)
            } else {
                res.send({ error: 'ID not Found'})
            }
            
         })
         .catch(err => {
            errorResponse(res, "ID not Found")
         });
}

/**
 * Get all object by model
 */
exports.findBy = (model, condition, res) => {
    model.find(condition)
         .then(record => {
            successResponse(res, `${model.modelName} retrieved successfully`, record)
         })
         .catch(err => {
            errorResponse(res, condition+' not Found', err)
        });
};

/**
 * Get all object by model
 */
exports.all = (model, res) => {
    model.find({})
         .then(record => {
            successResponse(res, `${model.modelName} retrieved successfully`, record)
         })
         .catch(err => {
            errorResponse(res, "Failed to retrieve data", err)
        });
};

/**
 * create new object
 */
exports.create = async(model, body, res) => {
    model.create(body)
         .then(record => {
            successResponse(res, `${model.modelName} created successfully`, record)
         })
         .catch(err => {
            if (err) {
               if (err.name === 'ValidationError') {
                   return errorResponse(res, err.message, err.errors);
               }
               else {
                  errorResponse(res, "Failed to store data", err)
               }
           }
         });
};

/**
 * update model by id
 */
exports.update = (model, id, body, res) => {
    model.findOneAndUpdate(
               { _id: id },
               body,
               { new: true, runValidators: true }
         )
         .then(record => {
            successResponse(res, `${model.modelName} updated successfully`, record)
         })
         .catch(err => {
            if (err) {
               if (err.name === 'ValidationError') {
                   return errorResponse(res, err.message, err.errors);
               }
               else {
                  errorResponse(res, "Failed to update data", err)
               }
           }
         });
};

/**
 * delete model by id
 */
exports.destroy = (model, id, res, message = null) => {
    model.deleteOne({_id: id})
         .then(record => {
            successResponse(res, `${model.modelName} deleted successfully`)
         })
         .catch(err => {
            errorResponse(res, "Failed to delete data", err)
         });
};
