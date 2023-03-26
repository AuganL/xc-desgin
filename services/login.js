const mysql = require('../config/mysql');

const selectUser = () => {
    mysql.query('select * from test', (err, row, f) => {
        if (err) throw err;
        let data = JSON.parse(JSON.stringify(row))
        return data;
    })
}

module.exports = {
    selectUser
};
