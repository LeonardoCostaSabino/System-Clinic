module.exports = function(app) {
    const acesso = require('../Controller/acesso.controller');

    // Create a new Customer
    app.post('/api/acessos', acesso.create);

    // Retrieve all Customer
    app.get('/api/acessos', acesso.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/acessos/:id', acesso.findByPk);

    // Update a Customer with Id
    app.put('/api/acessos', acesso.update);

    // Delete a Customer with Id
    app.delete('/api/acessos/:id', acesso.delete);
};
