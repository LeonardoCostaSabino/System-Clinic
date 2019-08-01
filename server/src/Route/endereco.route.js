module.exports = function(app) {
    const endereco = require('../Controller/endereco.controller');

    // Create a new Customer
    app.post('/api/endereco', endereco.create);

    // Retrieve all Customer
    app.get('/api/endereco', endereco.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/endereco/:id', endereco.findByPk);

    // Update a Customer with Id
    app.put('/api/endereco', endereco.update);

    // Delete a Customer with Id
    app.delete('/api/endereco/:id', endereco.delete);
};
