import company from './companyModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findCompany = async (req, res) => {
    await find(company, req.params.companyId, res);
};

exports.getCompanys = async (req, res) => {
    await all(company, res);
};

exports.storeCompany = async (req, res) => {
	await storeImage(company, req, res, 'image', 'company'); // (model, request, respond, fieldName, pathName)
};

exports.updateCompany = async (req, res) => {
	await updateImage(company, req.params.companyId, req, res, 'image', 'company'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteCompany = async (req, res) => {
    await deleteImage(company, req.params.companyId, req, res, 'image','company');
};