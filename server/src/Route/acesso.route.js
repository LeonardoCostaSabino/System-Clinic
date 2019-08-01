module.exports = function(app) {
    const acesso = require('../Controller/acesso.controller');

    // Create a new Customer
    app.post('/api/acesso', acesso.create);

    // Retrieve all Customer
    app.get('/api/acesso', acesso.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/acesso/:id', acesso.findByPk);

    // Update a Customer with Id
    app.put('/api/acesso', acesso.update);

    // Delete a Customer with Id
    app.delete('/api/acesso/:id', acesso.delete);
};
