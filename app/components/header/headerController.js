import header from './headerModel.js';
import { all, find, findBy } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.findHeader = async (req, res) => {
    await find(header, req.params.headerId, res);
};

exports.getHeaders = async (req, res) => {
    await all(header, res);
};

exports.findHeaderByPage = async (req, res) => {
	const param = { page: capitalizeFirstLetter(req.params.page) };
	
	await findBy(header, param, res);
};

exports.storeHeader = async (req, res) => {
	await storeImage(header, req, res, 'image', 'header'); // (model, request, respond, fieldName, pathName)
};

exports.updateHeader = async (req, res) => {
	await updateImage(header, req.params.headerId, req, res, 'image', 'header'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteHeader = async (req, res) => {
    await deleteImage(header, req.params.headerId, req, res, 'image','header');
};