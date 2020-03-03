import header from './headerModel.js';
import { all, find, findBy } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

// if in field contain file upload use fileRepository

exports.findHeader = (req, res) => {
    find(header, req.params.headerId, res);
};

exports.getHeaders = (req, res) => {
    all(header, res);
};

exports.findHeaderByPage = (req, res) => {
	findBy(header, req.params, res);
};

exports.storeHeader = (req, res) => {
	storeImage(header, req, res, 'image', 'header'); // (model, request, respond, fieldName, pathName)
};

exports.updateHeader = (req, res) => {
	updateImage(header, req.params.headerId, req, res, 'image', 'header'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteHeader = (req, res) => {
    deleteImage(header, req.params.headerId, req, res, 'image','header');
};

exports.existHeader = (req, res) => {
	Promise.all([
	  req.body.page && header.countDocuments({'page': req.body.page, '_id': { $ne: req.params.headerId } }),
	]).then( ([ foundPage ]) => {
		
	  if(foundPage > 0) {
	  	res.json({exist: true, msg: 'Header for '+ req.body.page +' page already exist'})
	  } else {
	  	return res.json({exist: false})	
	  }
	  
	}).catch(err => {
		console.log(err)
		res.json({exist: true, msg: 'Failed to check existed'})
	});
};