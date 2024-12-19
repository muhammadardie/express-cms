import socmed from './socmedModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

exports.findSocmed = (req, res) => {
    find(socmed, req.params.socmedId, res);
};

exports.getSocmeds = (req, res) => {
    all(socmed, res);
};

exports.storeSocmed = (req, res) => {
    create(socmed, req.body, res);
};

exports.updateSocmed = (req, res) => {
    update(socmed, req.params.socmedId, req.body, res);
};

exports.deleteSocmed = (req, res) => {
    destroy(socmed, req.params.socmedId, res, 'socmed');
};