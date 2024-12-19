import carousel from './carouselModel.js';
import { all, find } from '../../repositories/queryRepository';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository';

// if in field contain file upload use fileRepository

exports.findCarousel = async (req, res) => {
    await find(carousel, req.params.carouselId, res);
};

exports.getCarousels = async (req, res) => {
    await all(carousel, res);
};

exports.storeCarousel = async (req, res) => {
	await storeImage(carousel, req, res, 'image', 'carousel'); // (model, request, response, fieldName, pathName)
};

exports.updateCarousel = async (req, res) => {
	await updateImage(carousel, req.params.carouselId, req, res, 'image', 'carousel'); // (model, id, request, response, fieldName, pathName)
};

exports.deleteCarousel = async (req, res) => {
    await deleteImage(carousel, req.params.carouselId, req, res, 'image','carousel');
};