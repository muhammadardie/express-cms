import header from './headerModel.js';
import { all, find, findBy } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const findHeader = async (req, res) => {
    await find(header, req.params.headerId, res);
};

export const getHeaders = async (req, res) => {
    all(header, res);
};

export const findHeaderByPage = async (req, res) => {
	const param = { page: capitalizeFirstLetter(req.params.page) };
	
	await findBy(header, param, res);
};

export const storeHeader = async (req, res) => {
	await storeImage(header, req, res, 'image', 'header'); // (model, request, respond, fieldName, pathName)
};

export const updateHeader = async (req, res) => {
	updateImage(header, req.params.headerId, req, res, 'image', 'header'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteHeader = async (req, res) => {
    await deleteImage(header, req.params.headerId, req, res, 'image','header');
};