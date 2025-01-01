import team from './teamModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findTeam = async (req, res) => {
    await find(team, req.params.teamId, res);
};

export const getTeams = async (req, res) => {
    all(team, res);
};

export const storeTeam = async (req, res) => {
	await storeImage(team, req, res, 'image', 'team'); // (model, request, respond, fieldName, pathName)
};

export const updateTeam = async (req, res) => {
	updateImage(team, req.params.teamId, req, res, 'image', 'team'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteTeam = async (req, res) => {
    await deleteImage(team, req.params.teamId, req, res, 'image','team');
};