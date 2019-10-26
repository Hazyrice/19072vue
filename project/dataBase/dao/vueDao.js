const pool = require('../util/ConPool.js');


class VueDao {
	constructor() {

	}
		selectByUsernameAndPwd(username, pwd, cb) {
			pool.getConnection((err, conn) => {
				if (err) {
					console.log("连接失败")
				} else {
					const sql = 'select * from stu where no=? && pwd=?';
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
	showMember(cb) {
		pool.getConnection((err, conn)=> {
			if (err) {
				console.log(err);
			} else {
				let sql = 'select * from element';
				conn.query(sql,(qerr,results)=>{
					if(qerr){
						console.log("查询失败")
					}else {
						cb(results);
					}
				})
			}
			conn.release();
		})
	}
	search(a,cb) {
		pool.getConnection((err, conn)=> {
			if (err) {
				console.log(err);
			} else {
				let sql = `select * from element where name like '%${a}%'`;
				conn.query(sql,(qerr,results)=>{
					if(qerr){
						console.log("查询失败")
					}else {
						cb(results);
					}
				})
			}
			conn.release();
		})
	}
	
}

module.exports = VueDao;
