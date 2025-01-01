import gallery from './galleryModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findGallery = async (req, res) => {
    await find(gallery, req.params.galleryId, res);
};

export const getGalleries = async (req, res) => {
    all(gallery, res);
};

export const storeGallery = async (req, res) => {
	storeImage(gallery, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
};

export const updateGallery = async (req, res) => {
	updateImage(gallery, req.params.galleryId, req, res, 'image', 'gallery'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteGallery = async (req, res) => {
    await deleteImage(gallery, req.params.galleryId, req, res, 'image','gallery');
};