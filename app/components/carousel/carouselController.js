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
    update(carousel, req.params.carouselId, req.body, res);
};

exports.deleteCarousel = (req, res) => {
    destroy(carousel, req.params.carouselId, res, 'carousel');
};