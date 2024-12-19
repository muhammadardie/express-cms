import company from './companyModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findCompany = (req, res) => {
    find(company, req.params.companyId, res);
};

exports.getCompanys = (req, res) => {
    all(company, res);
};

exports.storeCompany = (req, res) => {
	storeImage(company, req, res, 'image', 'company'); // (model, request, respond, fieldName, pathName)
};

exports.updateCompany = (req, res) => {
	updateImage(company, req.params.companyId, req, res, 'image', 'company'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteCompany = (req, res) => {
    deleteImage(company, req.params.companyId, req, res, 'image','company');
};