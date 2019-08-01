module.exports = function(app) {
    const telefone = require('../Controller/telefone.controller');

    // Create a new Customer
    app.post('/api/telefone', telefone.create);

    // Retrieve all Customer
    app.get('/api/telefone', telefone.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/telefone/:id', telefone.findByPk);

    // Update a Customer with Id
    app.put('/api/telefone', telefone.update);

    // Delete a Customer with Id
    app.delete('/api/telefone/:id', telefone.delete);
};
