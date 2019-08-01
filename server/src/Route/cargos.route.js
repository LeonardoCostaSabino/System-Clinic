module.exports = function(app) {
    const cargos = require('../Controller/cargos.controller');

    // Create a new Customer
    app.post('/api/cargos', cargos.create);

    // Retrieve all Customer
    app.get('/api/cargos', cargos.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/cargos/:id', cargos.findByPk);

    // Update a Customer with Id
    app.put('/api/cargos', cargos.update);

    // Delete a Customer with Id
    app.delete('/api/cargos/:id', cargos.delete);
};
