const db = require('../Config/db.js');
const User = db.user;

// Post a User
exports.create = (req, res) => {
    // Save to PostgreSQL database
    User.create(req.body).then(user => {
        // Send created user to client
        res.json(user);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// FETCH All Users
exports.findAll = (req, res) => {
    User.findAll().then(user => {
        // Send All user to Client
        res.json(user);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Find a User by Id
exports.findById = (req, res) => {
    User.findById(req.params.id).then(customer => {
        res.json(customer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// Update a User
exports.update = (req, res) => {
    const id = req.body.id;
    User.update( req.body,
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
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};