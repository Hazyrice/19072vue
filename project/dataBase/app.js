const express = require('express');
const app = express();
const mysql=require("mysql");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended: false
}));

var mydb=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'lizongyun5635288',
	database: 'vue_project',
	port: 3306
})
mydb.connect();

const VueService = require('./service/vueService.js');
const vueService = new VueService();

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*')
	res.setHeader('Access-Control-Allow-Headers','Content-Type')
	next();
})

app.post('/login',(req,res)=>{
	let username = req.body.username;
	let pwd = req.body.pwd;
	vueService.login(username,pwd,(data)=>{
		res.json(data);
	})
})

app.get("/getEmploy",function(req,res){
	var sql="select * from find where 1";
	if(req.query.keyW){
		sql+=` and name like '%${req.query.keyW}%'`
	}
	if(req.query.deptid){
		sql+=` and deptid=${req.query.deptid}`
	}
	
	mydb.query(sql,function(err,results){
		if(err){
			console.log(err);
			return;
		}
		res.json(results);
	})

})


app.get("/getQuestions",function(req,res){
	var sql="select * from questions";
	mydb.query(sql,function(err,results){
		if(err){
			console.log(err);
			return;
		}
		res.json(results);
	})
})


app.get("/getGoods",function(req,res){
	//前边是其实条目位置，后边是总的查询的条目数
	var sql="select * from shop_goods ";
	
	if(req.query.kw){
		sql+=` where kw like '%${req.query.kw}%'`
	}
	
	sql+=" limit 0,10";
	mydb.query(sql,function(err,results){
		if(err){
			console.log(err);
			return;
		}
		res.json(results);
	})
})

app.listen(9191, () => {
	console.log("9191端口已开启");
})
		