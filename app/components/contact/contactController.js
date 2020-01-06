import contact from './contactModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findContact = (req, res) => {
    find(contact, req.params.contactId, res);
};

exports.getContacts = (req, res) => {
    all(contact, res);
};

exports.storeContact = (req, res) => {
    create(contact, req.body, res);
};

exports.updateContact = (req, res) => {
    update(contact, req.params.contactId, req.body, res);
};

exports.deleteContact = (req, res) => {
    destroy(contact, req.params.contactId, res, 'contact');
};