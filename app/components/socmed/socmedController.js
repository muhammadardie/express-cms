import socmed from './socmedModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

export const findSocmed = async (req, res) => {
    await find(socmed, req.params.socmedId, res);
};

export const getSocmeds = async (req, res) => {
    all(socmed, res);
};

export const storeSocmed = async (req, res) => {
    await create(socmed, req.body, res);
};

export const updateSocmed = async (req, res) => {
    await update(socmed, req.params.socmedId, req.body, res);
};

export const deleteSocmed = async (req, res) => {
    await destroy(socmed, req.params.socmedId, res, 'socmed');
};