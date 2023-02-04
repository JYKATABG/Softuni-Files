const config = {
    production: {
        PORT:3030,
        DB_URI: 'mongodb://127.0.0.1:27017/catShelter'
    },
    development: {
        PORT:5000,
        DB_URI: 'mongodb://127.0.0.1:27017/catShelter'
    }
}

module.exports = config[process.env.node_env || 'development'];