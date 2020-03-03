import about from './aboutModel.js';
import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

// if in field contain file upload use fileRepository

exports.findAbout = (req, res) => {
    find(about, req.params.aboutId, res);
};

exports.getAbouts = (req, res) => {
    all(about, res);
};

exports.storeAbout = (req, res) => {
	storeImage(about, req, res, 'image', 'about'); // (model, request, respond, fieldName, pathName)
};

exports.updateAbout = (req, res) => {
	updateImage(about, req.params.aboutId, req, res, 'image', 'about'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteAbout = (req, res) => {
    deleteImage(about, req.params.aboutId, req, res, 'image','about');
};