const pool = require('../util/ConPool.js');


class VueDao {
	constructor() {

	}
		selectByUsernameAndPwd(username, pwd, cb) {
			pool.getConnection((err, conn) => {
				if (err) {
					console.log("连接失败")
				} else {
					const sql = 'select * from user_info where username=? && pwd=?';
					conn.query(sql,[username,pwd],(err1,results)=>{
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
}

module.exports = VueDao;
