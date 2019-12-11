import user from './userModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findUser = (req, res) => {
    find(user, req.params.userId, res);
};

exports.getUsers = (req, res) => {
    all(user, res);
};

exports.storeUser = (req, res) => {
    create(user, req.body, res);
};

exports.updateUser = (req, res) => {
    update(user, req.params.userId, req.body, res);
};

exports.deleteUser = (req, res) => {
    destroy(user, req.params.userId, res, 'user');
};