import about from './aboutModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findAbout = async (req, res) => {
    await find(about, req.params.aboutId, res);
};

export const getAbouts = async (req, res) => {
    all(about, res);
};

export const storeAbout = async (req, res) => {
	await storeImage(about, req, res, 'image', 'about'); // (model, request, respond, fieldName, pathName)
};

export const updateAbout = async (req, res) => {
	updateImage(about, req.params.aboutId, req, res, 'image', 'about'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteAbout = async (req, res) => {
    await deleteImage(about, req.params.aboutId, req, res, 'image','about');
};