const pool = require('../util/ConPool.js');


class VueDao {
	constructor() {

	}
	selectByUsernameAndPwd(username, pwd, cb) {
		pool.getConnection((err, conn) => {
			if (err) {
				console.log("连接失败")
			} else {
				let sql = 'select * from user_info where username=? && pwd=?';
				conn.query(sql, [username, pwd], (err1, results) => {
					if (err1) {
						console.log('查询失败')
					} else {
						cb(results);
					}
				})
			}
			conn.release();
		})
	}
	checkUsername(username,cb) {
		pool.getConnection((err, conn) => {
			if (err) {
				console.log("连接失败")
			} else {
				let sql = 'select * from user_info where username=?';
				conn.query(sql, [username], (err1, results) => {
					if (err1) {
						console.log('查询失败')
					} else {
						cb(results);
					}
				})
			}
			conn.release();
		})
	}
	addUser(username, pwd, cb) {
		pool.getConnection((err, conn) => {
			if (err) {
				console.log("连接失败")
			} else {
				let sql = 'insert into user_info(username, pwd)values(?, ?)';
				conn.query(sql, [username, pwd], (err1, results) => {
					if (err1) {
						console.log('添加失败')
					} else {
						let results = 1;
						cb(results);
					}
				})
			}
			conn.release();
		})
	}
}

module.exports = VueDao;
