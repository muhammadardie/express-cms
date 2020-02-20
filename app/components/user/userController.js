import user from './userModel.js';
import { all, find, create, update, destroy, isExist } from '../repository/queryRepository';

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
};

exports.deleteUser = (req, res) => {
    destroy(user, req.params.userId, res, 'user');
};

exports.existUser = (req, res) => {
	Promise.all([
	  req.body.username && user.countDocuments({'username': req.body.username }),
	  req.body.email && user.countDocuments({'email': req.body.email })
	]).then( ([ foundUser, foundEmail ]) => {
		
	  if(foundUser > 0) {
	  	res.json({exist: true, msg: 'Username already exist'})
	  } else if(foundEmail > 0) {
	  	res.json({exist: true, msg: 'Email already exist'})	
	  } else {
	  	return res.json({exist: false})	
	  }
	  
	});
};