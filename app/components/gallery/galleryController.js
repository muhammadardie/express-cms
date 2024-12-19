import gallery from './galleryModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findGallery = (req, res) => {
    find(gallery, req.params.galleryId, res);
};

exports.getGallerys = (req, res) => {
    all(gallery, res);
};

exports.storeGallery = (req, res) => {
	storeImage(gallery, req, res, 'image', 'gallery'); // (model, request, respond, fieldName, pathName)
};

exports.updateGallery = (req, res) => {
	updateImage(gallery, req.params.galleryId, req, res, 'image', 'gallery'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteGallery = (req, res) => {
    deleteImage(gallery, req.params.galleryId, req, res, 'image','gallery');
};