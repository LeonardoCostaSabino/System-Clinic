module.exports = function(app) {
    const endereco = require('../Controller/endereco.controller');

    // Create a new Customer
    app.post('/api/enderecos', endereco.create);

    // Retrieve all Customer
    app.get('/api/enderecos', endereco.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/enderecos/:id', endereco.findByPk);

    // Update a Customer with Id
    app.put('/api/enderecos', endereco.update);

    // Delete a Customer with Id
    app.delete('/api/enderecos/:id', endereco.delete);
};
