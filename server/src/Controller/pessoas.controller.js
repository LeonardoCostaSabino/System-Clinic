const db = require('../Config/db.js');
const Sequelize = require('sequelize');
const Pessoas = db.pessoa;
const Endereco = db.enderecos;
const Telefone = db.telefone;
const Usuarios = db.usuarios;
const Paciente = db.pacientes;

let ende_id;
let tele_id;
let use_id;
let pess_id;

// Post a User
exports.create = async (req, res) => {
    // Save to PostgreSQL database
    return await db.sequelize.transaction(t => {
        // chain all your queries here. make sure you return them.
        return Endereco.create(req.body,{transaction: t}).then(result => {
            return (ende_id = result.id,
                Telefone.create(req.body,{transaction: t}).then(result => {
                    return (tele_id = result.id,
                        Usuarios.create(req.body,{transaction: t}).then(result => {
                            return (use_id = result.id,
                                Pessoas.create({
                                    cpf: req.body.cpf,
                                    rg: req.body.rg,
                                    nome: req.body.nome,
                                    genero: req.body.genero,
                                    datanascimento: req.body.datanascimento,
                                    endereco_id: ende_id,
                                    telefone_id: tele_id,
                                    usuario_id: use_id
                                },{transaction: t} )
                                    .then(pessoas => { pess_id = pessoas.id
                                    },{transaction: t}))
                        }, {transaction: t}))
                }, {transaction: t}))
        }, {transaction: t});
    }).then(
        result => {
            return(
                Paciente.create({
                    peso: req.body.peso,
                    altura: req.body.altura,
                    sangue: req.body.sangue,
                    filiacao1: req.body.filiacao1,
                    filiacao2: req.body.filiacao2,
                    pessoas_id: pess_id
                }).then(result => res.send(result))
                ,
                console.log(pess_id),
                result.commit(),
                res.json('Parabens Paciente cadastrado com sucesso!')
            )
        }).catch(err => { res.send(err);
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    Pessoas.findAll().then(pessoas => {
        // Send All user to Client
        res.json(pessoas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findByPk = (req, res) => {
    Pessoas.findByPk(req.params.id).then(pessoas => {
        res.json(pessoas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    Pessoas.update( req.body,
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
    Pessoas.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};