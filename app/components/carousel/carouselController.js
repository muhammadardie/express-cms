import carousel from './carouselModel.js';
import { all, find } from '../repository/queryRepository';
import { storeImage, updateImage, deleteImage } from '../repository/fileRepository';

// if in field contain file upload use fileRepository

exports.findCarousel = (req, res) => {
    find(carousel, req.params.carouselId, res);
};

exports.getCarousels = (req, res) => {
    all(carousel, res);
};

exports.storeCarousel = (req, res) => {
	storeImage(carousel, req, res, 'image', 'carousel'); // (model, request, respond, fieldName, pathName)
};

exports.updateCarousel = (req, res) => {
	updateImage(carousel, req.params.carouselId, req, res, 'image', 'carousel'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteCarousel = (req, res) => {
    deleteImage(carousel, req.params.carouselId, req, res, 'image','carousel');
};