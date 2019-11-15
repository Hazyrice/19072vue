const VueDao = require('../dao/vueDao');

class VueService {
	constructor() {
	    this.vueDao = new VueDao();
	}
	login(username,pwd,cb) {
		this.vueDao.selectByUsernameAndPwd(username,pwd,(data)=>{
			cb(data);
		});
	}
	check(username,cb) {
		this.vueDao.checkUsername(username,(data)=>{
			cb(data)
		})
	}
	add(username,pwd,cb) {
		this.vueDao.addUser(username,pwd,(data)=>{
			cb(data)
		});
	}
}
module.exports = VueService;