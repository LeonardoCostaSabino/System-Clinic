module.exports = function(app) {
    const user = require('../Controller/usuarios.controller.js');

    // Create a new Customer
    app.post('/api/usuarios', user.create);

    // Retrieve all Customer
    app.get('/api/usuarios', user.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/usuarios/:id', user.findByPk);

    // Update a Customer with Id
    app.put('/api/usuarios', user.update);

    // Delete a Customer with Id
    app.delete('/api/usuarios/:id', user.delete);
};
