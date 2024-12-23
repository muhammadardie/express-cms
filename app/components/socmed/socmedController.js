import socmed from './socmedModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

exports.findSocmed = async (req, res) => {
    await find(socmed, req.params.socmedId, res);
};

exports.getSocmeds = async (req, res) => {
    await all(socmed, res);
};

exports.storeSocmed = async (req, res) => {
    await create(socmed, req.body, res);
};

exports.updateSocmed = async (req, res) => {
    await update(socmed, req.params.socmedId, req.body, res);
};

exports.deleteSocmed = async (req, res) => {
    await destroy(socmed, req.params.socmedId, res, 'socmed');
};