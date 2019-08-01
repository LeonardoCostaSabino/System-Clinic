const db = require('../Config/db.js');
const Prontuarios = db.protuarios;

// Post a User
exports.create = (req, res) => {
    // Save to PostgreSQL database
    Prontuarios.create(req.body).then(prontuarios => {
        // Send created user to client
        res.json(prontuarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    Prontuarios.findAll().then(prontuarios => {
        // Send All user to Client
        res.json(prontuarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findByPk = (req, res) => {
    Prontuarios.findByPk(req.params.id).then(prontuarios => {
        res.json(prontuarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    Prontuarios.update( req.body,
        { where: {id: id} }).then(() => {
        res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Prontuarios.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};