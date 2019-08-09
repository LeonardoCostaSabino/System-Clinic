const db = require('../Config/db.js');
const Pacientes = db.pacientes;

const Pessoas = db.pessoa;
const Telefone = db.telefone;
const Endereco = db.enderecos;

// Post a User
exports.create = (req, res) => {
    // Save to PostgreSQL database
    Pacientes.create(req.body,{
        include: Pessoas, Telefone, Endereco
    }).then(pacientes => {
        // Send created user to client
        res.json(pacientes);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    Pacientes.findAll().then(pacientes => {
        // Send All user to Client
        res.json(pacientes);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findByPk = (req, res) => {
    Pacientes.findByPk(req.params.id).then(funcionarios => {
        res.json(funcionarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    Pacientes.update( req.body,
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
    Pacientes.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};