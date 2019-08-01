const db = require('../Config/db.js');
const Consultas = db.consultas;

// Post a User
exports.create = (req, res) => {
    // Save to PostgreSQL database
    Consultas.create(req.body).then(consultas => {
        // Send created user to client
        res.json(consultas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    Consultas.findAll().then(consultas => {
        // Send All user to Client
        res.json(consultas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findByPk = (req, res) => {
    Consultas.findByPk(req.params.id).then(consultas => {
        res.json(consultas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    Consultas.update( req.body,
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
    Consultas.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};