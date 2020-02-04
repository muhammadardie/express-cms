import user from './userModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findUser = (req, res) => {
    find(user, req.params.userId, res);
};

exports.getUsers = (req, res) => {
    all(user, res);
};

exports.storeUser = (req, res) => {
    create(user, req.body, res);
};

exports.updateUser = (req, res) => {
	user.findById(req.params.userId, function(err, thisUser) {
	    if (err) res.send({ error: 'ID not Found'});
	    thisUser.username = req.body.username;
	    thisUser.email    = req.body.email;
	    if(req.body.password && req.body.password !== ''){
	    	thisUser.password = req.body.password;	
	    } 

	    thisUser.save({ validateBeforeSave: false }, function (err) {
	        if(err) {
	            console.error(err);
	        }

	        return res.json(thisUser);
	    });
	});

    // update(user, req.params.userId, req.body, res);
};

exports.deleteUser = (req, res) => {
    destroy(user, req.params.userId, res, 'user');
};