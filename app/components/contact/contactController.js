import contact from './contactModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

export const findContact = async (req, res) => {
    await find(contact, req.params.contactId, res);
};

export const getContacts = async (req, res) => {
    all(contact, res);
};

export const storeContact = async (req, res) => {
    await create(contact, req.body, res);
};

export const updateContact = async (req, res) => {
    await update(contact, req.params.contactId, req.body, res);
};

export const deleteContact = async (req, res) => {
    await destroy(contact, req.params.contactId, res, 'contact');
};