import inbox from './inboxModel.js';
import { all, find, create, update, destroy } from '../../repositories/queryRepository.js';

exports.findInbox = (req, res) => {
    find(inbox, req.params.inboxId, res);
};

exports.getInboxs = (req, res) => {
    all(inbox, res);
};

exports.storeInbox = (req, res) => {
    create(inbox, req.body, res);
};

exports.updateInbox = (req, res) => {
    update(inbox, req.params.inboxId, req.body, res);
};

exports.deleteInbox = (req, res) => {
    destroy(inbox, req.params.inboxId, res, 'inbox');
};