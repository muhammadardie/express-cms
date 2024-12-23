import gallery from './galleryModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findGallery = async (req, res) => {
    await find(gallery, req.params.galleryId, res);
};

exports.getGallerys = async (req, res) => {
    await all(gallery, res);
};

exports.storeGallery = async (req, res) => {
	storeImage(gallery, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
};

exports.updateGallery = async (req, res) => {
	updateImage(gallery, req.params.galleryId, req, res, 'image', 'gallery'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteGallery = async (req, res) => {
    await deleteImage(gallery, req.params.galleryId, req, res, 'image','gallery');
};