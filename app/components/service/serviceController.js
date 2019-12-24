import service from './serviceModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findService = (req, res) => {
    find(service, req.params.serviceId, res);
};

exports.getServices = (req, res) => {
    all(service, res);
};

exports.storeService = (req, res) => {
    create(service, req.body, res);
};

exports.updateService = (req, res) => {
    update(service, req.params.serviceId, req.body, res);
};

exports.deleteService = (req, res) => {
    destroy(service, req.params.serviceId, res, 'service');
};