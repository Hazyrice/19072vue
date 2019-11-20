<template>
	<div class="gudiemenu wide">
		<div class="top-logo">
			<a title="大国品牌" href="/"><img src="../assets/logo(2).png" alt="logo" class="logo" /></a>
		</div>
		<div class="container">
			<ul>
				<li class="connect"><a @click="toHome()" title="首页">首页</a></li>
				<li class="connect">
					<a  title="在线商城" @click="toShop()"><strong>在线商城</strong></a>
				</li>
				<li class="connect"><a @click="toFind()" title="发现">发现</a></li>
			</ul>
		</div>
		<ul class="p-c float">
			<li class="personal-center"><a @click="toPerson()"></a></li>
			<li class="scart">
				<a @click="toScart()"></a>
				<div class="scart-hiddenbox">
					<div>
						<div class="logo"></div>
						<div class="scart-words">
							<h3 style="color: #999;">购物车为空</h3>
							<p>您还没有选购任何商品，现在前往商城选购吧！</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'navigator',
	created() {
		let cookie = this.PublicMethod.getCookie('user-cookie');
		if (cookie == undefined || cookie == null || cookie == NaN || cookie == '') {
			this.$router.push('/logReg');
		}
	},
	methods: {
		toFind() {
			let cookie = this.PublicMethod.getCookie('user-cookie');
			if (cookie == undefined || cookie == null || cookie == NaN || cookie == '') {
				this.$router.push('/logReg');
			} else {
				this.$router.push('/find');
			}
		},
		toPerson() {
			let cookie = this.PublicMethod.getCookie('user-cookie');
			if (cookie == undefined || cookie == null || cookie == NaN || cookie == '') {
				this.$router.push('/logReg');
			} else {
				this.$router.push('/person');
			}
		},
		toHome(){
			this.$router.push('/');
		},
		toShop() {
			let cookie = this.PublicMethod.getCookie('user-cookie');
			if (cookie == undefined || cookie == null || cookie == NaN || cookie == '') {
				this.$router.push('/logReg');
			} else {
				this.$router.push('/shop');
			}
		},
		toScart() {
			let cookie = this.PublicMethod.getCookie('user-cookie');
			if (cookie == undefined || cookie == null || cookie == NaN || cookie == '') {
				this.$router.push('/logReg');
			} else {
				this.$router.push('/scart');
			}
		},
		cookieCheck() {
			this.axios.get('/check.do').then(function(res) {
				return res;
			});
		}
	}
};
</script>

<style scoped="scoped">
/* 清除列表样式 */
ul {
	list-style: none;
}
a {
	text-decoration: none;
	cursor: pointer;
}
.gudiemenu {
	height: 45px;
	background-image: linear-gradient(135deg, #41295a, #2F0743);
	position: relative;
	z-index: 30;
}

.top-logo {
	width: 32px;
	height: 32px;
	position: absolute;
	margin: 13px 0 0 21px;
	padding-right: 56px;
}

.logo {
	width: 25px;
	height: 22px;
}

.container {
	width: 1220px;
	height: 45px;
	margin-left: auto;
	margin-right: auto;
}

.container > ul {
	width: 891px;
	height: 45px;
	margin-left: 181px;
}

.connect {
	float: left;
	margin-right: 1.25rem;
}

.connect a {
	line-height: 45px;
	text-decoration: none;
	color: hsla(0, 0%, 100%, 0.7);
	padding: 20px;
	font-size: 12px;
}

.connect a:hover {
	color: #fafafa;
}

.p-c {
	width: 80px;
	height: 20px;
	position: absolute;
	top: 11px;
	right: 18px;
}

.p-c li {
	float: left;
}

.personal-center {
	width: 30px;
	height: 20px;
}

.personal-center a {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(http://static.smartisanos.cn/index/assets/images/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png) no-repeat;
	background-position: 1px 1px;
	background-size: 180%;
	margin: 2px 0 0 23px;
}

.personal-center a:hover {
	background-position: -17px 1px;
}

.scart {
	width: 22px;
	height: 40px;
	margin: 1px 0 0 26px;
}

.scart a {
	display: inline-block;
	width: 21px;
	height: 20px;
	background: url(http://static.smartisanos.cn/index/assets/images/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png) no-repeat;
	background-position: -18px -18px;
	background-size: 180%;
	margin-top: 0.25rem;
}

.scart-hiddenbox {
	width: 360px;
	box-shadow: 0 11px 50px #888;
	height: 134px;
	padding-top: 180px;
	margin: 8px 0 0 -332px;
	background-color: #fafafa;
	border: 1px solid #bebcbc;
	border-radius: 10px;
	text-align: center;
	color: #bebcbc;
	font-size: 12px;
	display: none;
}

.scart-hiddenbox .logo {
	width: 90px;
	height: 90px;
	position: absolute;
	top: 115px;
	left: -146px;
	background: url(http://static.smartisanos.cn/index/assets/images/cart-empty.01f4c99a9df22275a7d374be0195adc7.png) no-repeat;
	background-size: 120%;
}

.scart-words {
	margin-top: 5px;
}

.scart:hover .scart-hiddenbox {
	display: block;
}
</style>
