import service from './serviceModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

export const findService = async (req, res) => {
    await find(service, req.params.serviceId, res);
};

export const getServices = async (req, res) => {
    all(service, res);
};

export const storeService = async (req, res) => {
    await create(service, req.body, res);
};

export const updateService = async (req, res) => {
    await update(service, req.params.serviceId, req.body, res);
};

export const deleteService = async (req, res) => {
    await destroy(service, req.params.serviceId, res, 'service');
};