module.exports = function(app) {
    const pessoas = require('../Controller/pessoas.controller');

    // Create a new Customer
    app.post('/api/pessoas', pessoas.create);

    // Retrieve all Customer
    app.get('/api/pessoas', pessoas.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/pessoas/:id', pessoas.findByPk);

    // Update a Customer with Id
    app.put('/api/pessoas', pessoas.update);

    // Delete a Customer with Id
    app.delete('/api/pessoas/:id', pessoas.delete);
};
