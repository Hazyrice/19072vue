const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended: false
}));

const VueService = require('./service/vueService.js');
const vueService = new VueService();

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*')
	res.setHeader('Access-Control-Allow-Headers','Content-Type')
	next();
})

app.get('/getElement', (req, res) => {
	let keyV = req.query.keyV;
	if (req.query.keyV) {
		vueService.searchAll(keyV,(data) => {
			res.json(data);
		})
	} else {
		vueService.showAll((data) => {
			res.json(data);
		})
	}
});

app.post('/login',(req,res)=>{
	let username = req.body.username;
	let pwd = req.body.pwd;
	vueService.login(username,pwd,(data)=>{
		res.json(data);
	})
})

app.listen(9191, () => {
	console.log("9191端口已开启");
})
		