const mysql = require("mysql");
//创建数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lizongyun5635288',
    database: 'vue_project',
    port: 3306
});
module.exports=pool;

