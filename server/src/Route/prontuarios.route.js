module.exports = function(app) {
    const prontuarios = require('../Controller/prontuarios.controller');

    // Create a new Customer
    app.post('/api/prontuarios', prontuarios.create);

    // Retrieve all Customer
    app.get('/api/prontuarios', prontuarios.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/prontuarios/:id', prontuarios.findByPk);

    // Update a Customer with Id
    app.put('/api/prontuarios', prontuarios.update);

    // Delete a Customer with Id
    app.delete('/api/prontuarios/:id', prontuarios.delete);
};
