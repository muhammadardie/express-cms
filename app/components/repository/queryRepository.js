'use strict'

/**
 * Get object by id
 */

exports.find = async (model, id, res) => {
    model.findById(id)
         .then(model => {
            if(model){
                res.json(model)    
            } else {
                res.send({ error: 'ID not Found'})
            }
            
         })
         .catch(err => {
            res.send({ error: 'ID not Found'})
         });
}

/**
 * Get all object by model
 */
exports.all = (model, res) => {
    model.find({})
         .then(model => {
            res.json(model)
         })
         .catch(err => {
            res.send({ error: 'Failed to retrieve data'})
        });
};

/**
 * create new object
 */
exports.create = (model, body, res) => {
    model.create(body)
         .then(model => {
            res.json(model);
         })
         .catch(err => {
            res.status(500).send(err);
         });
};

/**
 * update model by id
 */
exports.update = (model, id, body, res) => {
    model.findOneAndUpdate({_id: id}, body)
         .then(model => {
            res.json({model})
         })
         .catch(err => {
            res.status(400).json({err});
         });
};

/**
 * delete model by id
 */
exports.destroy = (model, id, res, message) => {
    model.deleteOne({_id: id})
         .then(model => {
                res.json({ message: `${message} ${id} successfully deleted` })
         })
         .catch(err => {
            res.status(400).json({err});
         });
};
