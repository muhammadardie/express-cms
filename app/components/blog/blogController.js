import blog from './blogModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findBlog = async (req, res) => {
    await find(blog, req.params.blogId, res);
};

exports.getBlogs = async (req, res) => {
    await all(blog, res);
};

exports.storeBlog = async (req, res) => {
	await storeImage(blog, req, res, 'image', 'blog'); // (model, request, respond, fieldName, pathName)
};

exports.updateBlog = async (req, res) => {
    await updateImage(blog, req.params.blogId, req, res, 'image', 'blog'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteBlog = async (req, res) => {
    await deleteImage(blog, req.params.blogId, req, res, 'image','blog');
};