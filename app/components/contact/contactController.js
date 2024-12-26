import contact from './contactModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

exports.findContact = async (req, res) => {
    await find(contact, req.params.contactId, res);
};

exports.getContacts = async (req, res) => {
    await all(contact, res);
};

exports.storeContact = async (req, res) => {
    await create(contact, req.body, res);
};

exports.updateContact = async (req, res) => {
    await update(contact, req.params.contactId, req.body, res);
};

exports.deleteContact = async (req, res) => {
    await destroy(contact, req.params.contactId, res, 'contact');
};