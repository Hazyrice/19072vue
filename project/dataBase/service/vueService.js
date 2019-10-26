const VueDao = require('../dao/vueDao');

class VueService {
	constructor() {
	    this.vueDao = new VueDao();
	}
	showAll(cb) {
		this.vueDao.showMember((data)=>{
			cb(data);
		})
	}
	searchAll(a,cb) {
		this.vueDao.search(a,(data)=>{
			cb(data);
		})
	}
	login(username,pwd,cb) {
		this.vueDao.selectByUsernameAndPwd(username,pwd,(data)=>{
			cb(data);
		});
	}
}
module.exports = VueService;