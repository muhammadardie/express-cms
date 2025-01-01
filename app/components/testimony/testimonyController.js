import testimony from './testimonyModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findTestimony = async (req, res) => {
    await find(testimony, req.params.testimonyId, res);
};

export const getTestimonies = async (req, res) => {
    all(testimony, res);
};

export const storeTestimony = async (req, res) => {
	await storeImage(testimony, req, res, 'avatar', 'testimony'); // (model, request, respond, fieldName, pathName)
};

export const updateTestimony = async (req, res) => {
	updateImage(testimony, req.params.testimonyId, req, res, 'avatar', 'testimony'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteTestimony = async (req, res) => {
    await deleteImage(testimony, req.params.testimonyId, req, res, 'avatar','testimony');
};