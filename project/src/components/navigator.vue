<template>
	<div class="nn">
		<div id="nav">
			<div class="nav-img">
				<img src="../../public/国.png" alt="">
			</div>
			<div class="nav-middle">
				<ul>
					<li @click="toHome">首页</li>
					<li @click="toFind">发现</li>
					<li @click="toPerson">在线商城</li>
					<li>应用</li>
				</ul>
			</div>
			<div class="nav-right">
				<div class="gerenzhongxin" @click="toPerson">
					<div>个人中心</div>
					<div><img src="../../public/个人中心.png" alt=""></div>
				</div>
				<div class="gouwuche" style="cursor: pointer;" @click="toshop()">
					<div class="gouwuche-top">
						<div>购物车</div>
					<div><img src="../../public/购物车.png" alt=""></div>
					</div>
					<div class="gouwuche-box">
						<img src="../../public/购物车-1.png" alt="">	
						<p>购物车为空</p>
					</div>
				</div>
			</div>
		</div>
		</div>
</template>

<script>
	export default {
	  name: 'nabigator',
	  methods:{
		  toFind(){
		  			this.$router.push('/find')  
		  },
		  toPerson(){
			  if(11){
				  this.$router.push('/logReg')
			  }else{
		  			this.$router.push('/person')  
			  }
		  },
		  toHome(){
		  			this.$router.push('/')  
		  },
		  toshop(){
			this.$router.push('/shop')  
		  },
	  }
	}
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		/*background-color: #ECECEC;*/
	}
	#container {
		background-color: #ECECEC;
		width: 100%;
		height: 1500px;
	}
	.nn {
		background-color: #343537;
	}
	#nav {
		width: 1220px;
		height: 44px;
		margin: 0 auto;
		background-color: #343537;
		display: flex;
	}
	.nav-img {
		background-color: #fff;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.nav-img img {
		width: 40px;
		height: 40px;
	}
	.nav-middle {
		width:500px;
		margin: 0 auto;
		color: white;
		line-height: 44px;
		/*border: 1px solid red;*/
	}
	.nav-middle ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	.nav-middle li {
		width: 80px;
		cursor: pointer;
	}
	.nav-middle li:hover {
		text-shadow: 0px 0px 20px;
	}
	.nav-right {
		display: flex;
		width: 280px;
		/*border: 1px solid red;*/
		justify-content: space-between;
		margin-right: 30px;
	}
	
	.nav-right img{
		width: 40px;
		height: 40px;
	}
	.gerenzhongxin {
		display: flex;
		justify-content: space-between;
		color: #fff;
		line-height: 44px;
		cursor: pointer;
	}
	.gerenzhongxin img {
		width: 35px;
		height: 35px;
		margin-top: 6px;
	}
	.gouwuche {
		position: relative;
	}
	.gouwuche-box {
		width: 260px;
		height: 260px;
		border-radius: 20px;
		border: 1px solid #ccc;
		position: absolute;
		top: 43px;
		right: 3px;
		background-color: #fff;
		display: none;
		z-index: 100;
	}
	.gouwuche-top {
		display: flex;
		justify-content: space-between;
		color: white;
		line-height: 44px;
	}
	.gouwuche-box img {
		display: block;
		width: 100px;
		height: 100px;
		margin: 40px auto;
	}
	.gouwuche-box p {
		margin-left: 65px;
		font-size: 20px;
		color: #bbb;
	}
	.gouwuche:hover .gouwuche-box{
		display: block;
	}
</style>
