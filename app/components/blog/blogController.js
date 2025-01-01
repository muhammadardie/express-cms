import blog from './blogModel.js';
import { all, find } from '../../repositories/queryRepository.js';
import { storeImage, updateImage, deleteImage } from '../../repositories/fileRepository.js';

// if in field contain file upload use fileRepository

export const findBlog = async (req, res) => {
    await find(blog, req.params.blogId, res);
};

export const getBlogs = async (req, res) => {
    all(blog, res);
};

export const storeBlog = async (req, res) => {
	await storeImage(blog, req, res, 'image', 'blog'); // (model, request, respond, fieldName, pathName)
};

export const updateBlog = async (req, res) => {
    updateImage(blog, req.params.blogId, req, res, 'image', 'blog'); // (model, id, request, respond, fieldName, pathName)
};

export const deleteBlog = async (req, res) => {
    await deleteImage(blog, req.params.blogId, req, res, 'image','blog');
};