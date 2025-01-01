import user from './userModel.js';
import { all, find, create, destroy } from '../../repositories/queryRepository.js';
import { errorResponse, successResponse } from '../../utils/response.js';

export const findUser = async (req, res) => {
    await find(user, req.params.userId, res);
};

export const getUsers = async (req, res) => {
    all(user, res);
};

export const storeUser = async (req, res) => {
    await create(user, req.body, res);
};

export const updateUser = (req, res) => {
	user.findById(req.params.userId, function(err, thisUser) {
	    if (err) res.send({ error: 'ID not Found'});
	    thisUser.username = req.body.username;
	    thisUser.email    = req.body.email;
	    if(req.body.password && req.body.password !== ''){
	    	thisUser.password = req.body.password;	
	    } 

	    thisUser.save({ validateBeforeSave: true }, function (err) {
            if (err) {
                if (err.name === 'ValidationError' && err.errors.email) {
                    return errorResponse(res, "Email already exists", { email: 'Email already exists' });
                }
				
                return errorResponse(res, "Failed to update data", err);
            }

            successResponse(res, `${user.modelName} updated successfully`, thisUser);
        });
	});
};

export const deleteUser = (req, res) => {
    destroy(user, req.params.userId, res);
};