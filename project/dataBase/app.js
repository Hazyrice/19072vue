const express = require('express');
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json())
const cookieParser = require('cookie-parser')
app.use(cookieParser());

var mydb = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'lizongyun5635288',
	database: 'vue_project',
	port: 3306
})
mydb.connect();

const VueService = require('./service/vueService.js');
const vueService = new VueService();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	res.setHeader("Access-Control-Allow-Credentials", "true");
	next();
})

// 登陆
app.post('/login', (req, res) => {
	let username = req.body.username;
	let pwd = req.body.pwd;
	vueService.login(username, pwd, (data) => {
		if (data.length == 1) {
			res.cookie('user-cookie', username, {
				maxAge: 24 * 3600 * 1000
			})
			res.json({
				inf: '登陆成功',
				check: 'ok'
			});
		} else {
			res.json({
				inf: '用户名或密码输入错误。'
			})
		}
	})
})

// 注册
app.post('/checkUsername',(req,res) => {
	let username = req.body.username;
	vueService.check(username,(data) =>{
		if (data.length == 1) {
			res.json({inf:'用户名已存在',check:'had'})
		} else {
			res.json({inf:'用户名可用'})
		}
	})
})
app.get('/register', (req, res) => {
	let username = req.query.username;
	let pwd = req.query.pwd;
	vueService.add(username, pwd, (data) => {
		if (data == 1) {
			res.json({inf:'ok'});
		}


	});
})

app.get("/getEmploy", function(req, res) {
	var sql = "select * from find where 1";
	if (req.query.keyW) {
		sql += ` and name like '%${req.query.keyW}%'`
	}
	if (req.query.deptid) {
		sql += ` and deptid=${req.query.deptid}`
	}

	mydb.query(sql, function(err, results) {
		if (err) {
			console.log(err);
			return;
		}
		res.json(results);
	})

})


app.get("/getQuestions", function(req, res) {
	var sql = "select * from questions";
	mydb.query(sql, function(err, results) {
		if (err) {
			console.log(err);
			return;
		}
		res.json(results);
	})
})


app.get("/getGoods", function(req, res) {
	//前边是其实条目位置，后边是总的查询的条目数
	var sql = "select * from shop_goods ";

	if (req.query.kw) {
		sql += ` where kw like '%${req.query.kw}%'`
	}

	sql += " limit 0,10";
	mydb.query(sql, function(err, results) {
		if (err) {
			console.log(err);
			return;
		}
		res.json(results);
	})
})

app.listen(9191, () => {
	console.log("9191端口已开启");
})
