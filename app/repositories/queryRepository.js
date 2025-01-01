'use strict'

import { errorResponse, successResponse } from '../utils/response.js';

/**
 * Get object by id
 */

export const find = async (model, id, res) => {
    model.findById(id)
         .then(record => {
            if(record){
               return successResponse(res, `${model.modelName} retrieved successfully`, record)
            } else {
               return errorResponse(res, "ID not Found", null, 404);
            }
            
         })
         .catch(err => {
            return errorResponse(res, "ID not Found")
         });
}

/**
 * Get all object by model
 */
export const findBy = (model, condition, res) => {
    model.find(condition)
         .then(record => {
            return successResponse(res, `${model.modelName} retrieved successfully`, record)
         })
         .catch(err => {
            return errorResponse(res, condition+' not Found', err)
        });
};

/**
 * Get all object by model
 */
export const all = (model, res) => {
    model.find({})
         .then(record => {
            return successResponse(res, `${model.modelName} retrieved successfully`, record)
         })
         .catch(err => {
            return errorResponse(res, "Failed to retrieve data", err)
        });
};

/**
 * create new object
 */
export const create = async(model, body, res) => {
    model.create(body)
         .then(record => {
            return successResponse(res, `${model.modelName} created successfully`, record)
         })
         .catch(err => {
            if (err) {
               if (err.name === 'ValidationError') {
                   return errorResponse(res, err.message, err.errors);
               }
               else {
                  return errorResponse(res, "Failed to store data", err)
               }
           }
         });
};

/**
 * update model by id
 */
export const update = (model, id, body, res) => {
    model.findOneAndUpdate(
               { _id: id },
               body,
               { new: true, runValidators: true }
         )
         .then(record => {
            return successResponse(res, `${model.modelName} updated successfully`, record)
         })
         .catch(err => {
            if (err) {
               if (err.name === 'ValidationError') {
                   return errorResponse(res, err.message, err.errors);
               }
               else {
                  return errorResponse(res, "Failed to update data", err)
               }
           }
         });
};

/**
 * delete model by id
 */
export const destroy = (model, id, res, message = null) => {
    model.deleteOne({_id: id})
         .then(record => {
            return successResponse(res, `${model.modelName} deleted successfully`)
         })
         .catch(err => {
            return errorResponse(res, "Failed to delete data", err)
         });
};
