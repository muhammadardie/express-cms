import service from './serviceModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

exports.findService = async (req, res) => {
    await find(service, req.params.serviceId, res);
};

exports.getServices = async (req, res) => {
    await all(service, res);
};

exports.storeService = async (req, res) => {
    await create(service, req.body, res);
};

exports.updateService = async (req, res) => {
    await update(service, req.params.serviceId, req.body, res);
};

exports.deleteService = async (req, res) => {
    await destroy(service, req.params.serviceId, res, 'service');
};