import testimony from './testimonyModel.js';
import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

// if in field contain file upload use fileRepository

exports.findTestimony = (req, res) => {
    find(testimony, req.params.testimonyId, res);
};

exports.getTestimonys = (req, res) => {
    all(testimony, res);
};

exports.storeTestimony = (req, res) => {
	storeImage(testimony, req, res, 'avatar', 'testimony'); // (model, request, respond, fieldName, pathName)
};

exports.updateTestimony = (req, res) => {
	updateImage(testimony, req.params.testimonyId, req, res, 'avatar', 'testimony'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteTestimony = (req, res) => {
    deleteImage(testimony, req.params.testimonyId, req, res, 'avatar','testimony');
};