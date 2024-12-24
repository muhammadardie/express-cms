import about from './aboutModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findAbout = async (req, res) => {
    await find(about, req.params.aboutId, res);
};

exports.getAbouts = async (req, res) => {
    await all(about, res);
};

exports.storeAbout = async (req, res) => {
	await storeImage(about, req, res, 'image', 'about'); // (model, request, respond, fieldName, pathName)
};

exports.updateAbout = async (req, res) => {
	await updateImage(about, req.params.aboutId, req, res, 'image', 'about'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteAbout = async (req, res) => {
    await deleteImage(about, req.params.aboutId, req, res, 'image','about');
};