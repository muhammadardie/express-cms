'use strict'

/**
 * Get object by id
 */
exports.find = (model, id, res) => {
  model.findById(id, (err, model) => {
        if (err) {
            res.send(err);
        }

        res.json(model);
    });
}

/**
 * Get all object by model
 */
exports.all = (model, res) => {
    model.find({}, (err, model) => {
        if (err) {
            res.send(err);
        }

        res.json(model);
    });
};

/**
 * create new object
 */
exports.create = (model, body, res) => {
    const newModel = new model(body);

    newModel.save((err, model) => {
        if (err) {
            res.send(err);
        }

        res.json(model);
    });
};

/**
 * update model by id
 */
exports.update = (model, id, body, res) => {
    model.findOneAndUpdate({
        _id: id
    }, body,
        (err, model) => {
            if (err) {
                res.send(err);
            }

            res.json(model);
        });
};

/**
 * delete model by id
 */
exports.destroy = (model, id, res, message) => {
    model.deleteOne({
        _id: id
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `${message} ${id} successfully deleted`
        });
    });
};