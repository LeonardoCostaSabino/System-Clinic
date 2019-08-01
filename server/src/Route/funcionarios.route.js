module.exports = function(app) {
    const funcionarios = require('../Controller/funcionario.controller');

    // Create a new Customer
    app.post('/api/funcionarios', funcionarios.create);

    // Retrieve all Customer
    app.get('/api/funcionarios', funcionarios.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/funcionarios/:id', funcionarios.findByPk);

    // Update a Customer with Id
    app.put('/api/funcionarios', funcionarios.update);

    // Delete a Customer with Id
    app.delete('/api/funcionarios/:id', funcionarios.delete);
};
