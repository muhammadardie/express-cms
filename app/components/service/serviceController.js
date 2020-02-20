import service from './serviceModel.js';
import { all, find, create, update, destroy } from '../repository/queryRepository';

exports.findService = (req, res) => {
    find(service, req.params.serviceId, res);
};

exports.getServices = (req, res) => {
    all(service, res);
};

exports.storeService = (req, res) => {
    create(service, req.body, res);
};

exports.updateService = (req, res) => {
    update(service, req.params.serviceId, req.body, res);
};

exports.deleteService = (req, res) => {
    destroy(service, req.params.serviceId, res, 'service');
};


exports.existService = (req, res) => {
	Promise.all([
	  req.body.title && service.countDocuments({'title': req.body.title })
	]).then( ([ foundTitle ]) => {
		
	  if(foundTitle > 0) {
	  	res.json({exist: true, msg: 'Title already exist'})
	  } else {
	  	return res.json({exist: false})	
	  }
	  
	});
};