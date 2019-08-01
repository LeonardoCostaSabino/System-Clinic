module.exports = function(app) {
    const pacientes = require('../Controller/pacientes.controller');

    // Create a new Customer
    app.post('/api/pacientes', pacientes.create);

    // Retrieve all Customer
    app.get('/api/pacientes', pacientes.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/pacientes/:id', pacientes.findByPk);

    // Update a Customer with Id
    app.put('/api/pacientes', pacientes.update);

    // Delete a Customer with Id
    app.delete('/api/pacientes/:id', pacientes.delete);
};
