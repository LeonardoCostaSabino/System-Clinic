module.exports = function(app) {
    const consultas = require('../Controller/consultas.controller');

    // Create a new Customer
    app.post('/api/consultas', consultas.create);

    // Retrieve all Customer
    app.get('/api/consultas', consultas.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/consultas/:id', consultas.findByPk);

    // Update a Customer with Id
    app.put('/api/consultas', consultas.update);

    // Delete a Customer with Id
    app.delete('/api/consultas/:id', consultas.delete);
};
