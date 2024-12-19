import team from './teamModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findTeam = (req, res) => {
    find(team, req.params.teamId, res);
};

exports.getTeams = (req, res) => {
    all(team, res);
};

exports.storeTeam = (req, res) => {
	storeImage(team, req, res, 'image', 'team'); // (model, request, respond, fieldName, pathName)
};

exports.updateTeam = (req, res) => {
	updateImage(team, req.params.teamId, req, res, 'image', 'team'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteTeam = (req, res) => {
    deleteImage(team, req.params.teamId, req, res, 'image','team');
};