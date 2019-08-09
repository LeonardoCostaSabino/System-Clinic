module.exports = function(app) {
    const telefone = require('../Controller/telefone.controller');

    // Create a new Customer
    app.post('/api/telefones', telefone.create);

    // Retrieve all Customer
    app.get('/api/telefones', telefone.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/telefones/:id', telefone.findByPk);

    // Update a Customer with Id
    app.put('/api/telefones', telefone.update);

    // Delete a Customer with Id
    app.delete('/api/telefones/:id', telefone.delete);
};
