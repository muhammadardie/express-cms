import company from './companyModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findCompany = async (req, res) => {
    await find(company, req.params.companyId, res);
};

export const getCompanies = async (req, res) => {
    all(company, res);
};

export const storeCompany = async (req, res) => {
	await storeImage(company, req, res, 'image', 'company'); // (model, request, respond, fieldName, pathName)
};

export const updateCompany = async (req, res) => {
	updateImage(company, req.params.companyId, req, res, 'image', 'company'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteCompany = async (req, res) => {
    await deleteImage(company, req.params.companyId, req, res, 'image','company');
};