import team from './teamModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findTeam = async (req, res) => {
    await find(team, req.params.teamId, res);
};

exports.getTeams = async (req, res) => {
    await all(team, res);
};

exports.storeTeam = async (req, res) => {
	await storeImage(team, req, res, 'image', 'team'); // (model, request, respond, fieldName, pathName)
};

exports.updateTeam = async (req, res) => {
	await updateImage(team, req.params.teamId, req, res, 'image', 'team'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteTeam = async (req, res) => {
    await deleteImage(team, req.params.teamId, req, res, 'image','team');
};