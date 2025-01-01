import carousel from './carouselModel.js';
import { all, find } from '../../repositories/queryRepository';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository';

// if in field contain file upload use fileRepository

export const findCarousel = async (req, res) => {
    await find(carousel, req.params.carouselId, res);
};

export const getCarousels = async (req, res) => {
    all(carousel, res);
};

export const storeCarousel = async (req, res) => {
	await storeImage(carousel, req, res, 'image', 'carousel'); // (model, request, response, fieldName, pathName)
};

export const updateCarousel = async (req, res) => {
	updateImage(carousel, req.params.carouselId, req, res, 'image', 'carousel'); // (model, id, request, response, fieldName, pathName)
};

export const deleteCarousel = async (req, res) => {
    await deleteImage(carousel, req.params.carouselId, req, res, 'image','carousel');
};