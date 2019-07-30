const env = {
    database: 'system',
    username: 'sabino',
    password: '123456',
    host: '172.16.201.10',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;