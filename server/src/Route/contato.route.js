module.exports = function(app) {
    const contato = require('../Controller/contato.controller');

    // Create a new Customer
    app.post('/api/contato', contato.create);

    // Retrieve all Customer
    app.get('/api/contato', contato.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/contato/:id', contato.findByPk);

    // Update a Customer with Id
    app.put('/api/contato', contato.update);

    // Delete a Customer with Id
    app.delete('/api/contato/:id', contato.delete);
};
