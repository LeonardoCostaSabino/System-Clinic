const db = require('../Config/db.js');
const Funcionarios = db.funcionario;

// Post a User
exports.create = (req, res) => {
    // Save to PostgreSQL database
    Funcionarios.create(req.body).then(funcionarios => {
        // Send created user to client
        res.json(funcionarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    Funcionarios.findAll().then(funcionarios => {
        // Send All user to Client
        res.json(funcionarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findByPk = (req, res) => {
    Funcionarios.findByPk(req.params.id).then(funcionarios => {
        res.json(funcionarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    Funcionarios.update( req.body,
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
    Funcionarios.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};