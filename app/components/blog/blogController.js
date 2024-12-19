import blog from './blogModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

exports.findBlog = (req, res) => {
    find(blog, req.params.blogId, res);
};

exports.getBlogs = (req, res) => {
    all(blog, res);
};

exports.storeBlog = (req, res) => {
	storeImage(blog, req, res, 'image', 'blog'); // (model, request, respond, fieldName, pathName)
};

exports.updateBlog = (req, res) => {
	updateImage(blog, req.params.blogId, req, res, 'image', 'blog'); // (model, id, request, respond, fieldName, pathName)
};

exports.deleteBlog = (req, res) => {
    deleteImage(blog, req.params.blogId, req, res, 'image','blog');
};