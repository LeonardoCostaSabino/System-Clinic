class Controller {
    constructor (DBname){
        this.DB = require('../Config/db.js');
        switch (DBname) {
            case Acesso: {
                this.Table = this.DB.acesso;
                break;
            }
            case Cargos: {
                this.Table = this.DB.cargos;
                break;
            }
            case Consultas: {
                this.Table = this.DB.consultas;
                break;
            }
            case Funcionarios: {
                this.Table = this.DB.funcionario;
                break;
            }
            case Pacientes: {
                this.Table = this.DB.pacientes;
                break;
            }
            case Pessoas: {
                this.Table = this.DB.pessoa;
                break;
            }
            case Prontuarios: {
                this.Table = this.DB.protuarios;
                break;
            }
            case Telefone: {
                this.Table = this.DB.telefone;
                break;
            }
            case Usuarios: {
                this.Table = this.DB.usuarios;
                break;
            }
        }
    }

    Inserir(){
        exports.create = (req, res) => {
            // Save to PostgreSQL database
            this.Table.create(req.body)
                .then(res.json(this.val))
                .catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err});
            });
        };
    }

    MostrarTodos(){
        exports.findAll = (req, res) => {
            this.Table.findAll()
                .then(res.json(this.val))
                .catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err});
            });
        };
    }

    MostrarporID(){
        exports.findByPk = (req, res) => {
            this.Table.findByPk(req.params.id)
                .then(res.json(this.val))
                .catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err});
            });
        };
    }

    Atualizar(){
        exports.update = (req, res) => {
            const id = req.body.id;
            this.Table.update( req.body,
                { where: {id: id} }).then(() => {
                res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
            }).catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err});
            });
        };
    }

    Deletar(){
        exports.delete = (req, res) => {
            const id = req.params.id;
            this.Table.destroy({
                where: { id: id }
            }).then(() => {
                res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
            }).catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err});
            });
        };
    }
};