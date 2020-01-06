import about from './aboutModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findAbout = (req, res) => {
    find(about, req.params.aboutId, res);
};

exports.getAbouts = (req, res) => {
    all(about, res);
};

exports.storeAbout = (req, res) => {
    create(about, req.body, res);
};

exports.updateAbout = (req, res) => {
    update(about, req.params.aboutId, req.body, res);
};

exports.deleteAbout = (req, res) => {
    destroy(about, req.params.aboutId, res, 'about');
};