module.exports = function(app) {
    const user = require('../Controller/usuarios.controller.js');

    // Create a new Customer
    app.post('/api/user', user.create);

    // Retrieve all Customer
    app.get('/api/user', user.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/user/:id', user.findByPk);

    // Update a Customer with Id
    app.put('/api/user', user.update);

    // Delete a Customer with Id
    app.delete('/api/user/:id', user.delete);
};
