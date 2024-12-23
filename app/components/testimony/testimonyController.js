import testimony from './testimonyModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findTestimony = async (req, res) => {
    await find(testimony, req.params.testimonyId, res);
};

exports.getTestimonys = async (req, res) => {
    await all(testimony, res);
};

exports.storeTestimony = async (req, res) => {
	await storeImage(testimony, req, res, 'avatar', 'testimony'); // (model, request, respond, fieldName, pathName)
};

exports.updateTestimony = async (req, res) => {
	await updateImage(testimony, req.params.testimonyId, req, res, 'avatar', 'testimony'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteTestimony = async (req, res) => {
    await deleteImage(testimony, req.params.testimonyId, req, res, 'avatar','testimony');
};