const path = require('path');

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'app', 'database', 'database.sqlite')
    },
    migrations : {
        directory: path.resolve(__dirname, 'src', 'app', 'database', 'migrations')
    },
    useNullAsDefault: true
};