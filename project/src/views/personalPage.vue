<template>
	<div>
		<el-backtop :bottom="60"></el-backtop>
		<el-row>
			<el-col :span="24">
				<div>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="1">首页</el-menu-item>
						<el-submenu index="2">
							<template slot="title">
								账号详情
							</template>
							<el-submenu index="2-1">
								<template slot="title">
									安全设置
								</template>
								<el-menu-item index="2-1-1">修改登陆密码</el-menu-item>
								<el-menu-item index="2-1-2">密保问题修改</el-menu-item>
								<el-menu-item index="2-1-3">手机绑定</el-menu-item>
							</el-submenu>
							<el-submenu index="2-2">
								<template slot="title">
									个人资料
								</template>
								<el-menu-item index="2-2-1">收货地址</el-menu-item>
								<el-menu-item index="2-2-2">修改头像、昵称</el-menu-item>
								<el-menu-item index="2-2-3">消息提醒设置</el-menu-item>
							</el-submenu>
							<el-submenu index="2-3">
								<template slot="title">
									账号绑定
								</template>
								<el-menu-item index="2-3-1">微博绑定</el-menu-item>
								<el-menu-item index="2-3-2">支付宝绑定</el-menu-item>
								<el-menu-item index="2-3-3">分享绑定</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3">消息</el-menu-item>
					</el-menu>
					<div class="line"></div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="5">
				<el-row class="tac">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<h5 style="">全部功能</h5>
						<el-menu-item index="1" class="side-guide"><span slot="title">我的购物车</span></el-menu-item>
						<el-menu-item index="2" class="side-guide"><span slot="title">我的订单</span></el-menu-item>
						<el-menu-item index="3" class="side-guide"><span slot="title">我的收藏</span></el-menu-item>
					</el-menu>
				</el-row>
			</el-col>
			<el-col :span="12">
				<div class="self-info">
					<div class="detail-info">
						<div class="base-info">
							<div class="avatar"></div>
							<div class="user-name">
								<span>name</span>
								<br />
								<span></span>
							</div>
						</div>
						<div class="my-stuffs"></div>
					</div>
					<div class="goods-info">
						<el-breadcrumb separator="|">
							<div class="borderR">待付款</div>
							<div class="borderR">待发货</div>
							<div class="borderR">待收货</div>
							<div class="borderR">待评价</div>
							<div>退款</div>
						</el-breadcrumb>
					</div>
				</div>
				<div class="guess">
					<div v-infinite-scroll="load" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
						<div v-for="item in data" :key="item.index" class="contain-box">
							<el-row>
								<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
									<el-card :body-style="{ padding: '0px' }" shadow="hover">
										<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
										<div style="padding: 14px;">
											<span>好吃的汉堡</span>
											<div class="bottom clearfix">
												<time class="time">{{ currentDate }}</time>
												<el-button type="text" class="button">操作按钮</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</el-row>
						</div>
						<p v-show="busy" style="text-align: center;">{{ info }}</p>
					</div>
				</div>
			</el-col>
			<el-col :span="7">
				<div class="set-margin">
					<div class="right-box">广告位</div>
					<div class="calendar">
						<div class="calendar-top">我的日历</div>
						<el-calendar v-model="value">
						</el-calendar>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1',
			count: 0,
			data: [],
			busy: false,
			currentDate: new Date(),
			info: '加载中......',
			value: new Date()
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		load() {
			this.busy = true;
			setTimeout(() => {
				if (this.count >= 20) {
					this.info = '没有更多了';
				} else {
					for (var i = 0, j = 2; i < j; i++) {
						this.data.push({ name: this.count++ });
					}
					this.busy = false;
				}
			}, 700);
		}
	}
};
</script>

<style scoped="scoped">
* {
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
}
.top-part {
	height: 60px;
}
.el-col {
	border-radius: 4px;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
.side-guide span {
	font-size: 13px;
}
.tac {
	margin: 40px 0 0 50%;
}
.self-info {
	height: 120px;
	margin-top: 40px;
}
.detail-info {
	height: 60%;
	display: flex;
	border: 1px solid #bcbec2;
}
.goods-info {
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #bcbec2;
	border-top: none;
}
.base-info {
	height: 100%;
	width: 42%;
	display: flex;
}
.my-stuffs {
	height: 100%;
	width: 58%;
}
.el-menu {
	border: none;
}
.avatar {
	height: 50px;
	width: 50px;
	border-radius: 50%;
	margin: 5px 0 0 5px;
	border: 1px solid #bcbec2;
	overflow: hidden;
	background-image: url('../../public/touxiang.jpeg');
	background-repeat: no-repeat;
	background-size: 45px 45px;
}
.user-name {
	height: 50px;
	width: 150px;
	margin: 5px 0 0 5px;
}
.el-breadcrumb {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.el-breadcrumb div {
	height: 100%;
	width: 20%;
	text-align: center;
}
.borderR {
	border-right: 1px solid #bebebe;
}
.el-breadcrumb div:hover {
	cursor: pointer;
	color: #0086b3;
}
.guess {
	width: 100%;
	min-height: 200px;
	margin-top: 20px;
}
.contain-box {
	margin: 10px 0 10px 0;
}
.contain-box .el-row {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: '';
}

.clearfix:after {
	clear: both;
}
.el-col-8 {
	width: 50%;
}
.el-col-offset-2 {
	margin-left: 5%;
}
.set-margin {
	margin-left: 2.5rem;
	width: 85%;
}
.right-box {
	height: 7.5rem;
	border: 2px solid red;
	background-color: rgba(255, 0, 0, 0.1);
	margin: 2.5rem 0 0;
	line-height: 7.5rem;
	text-align: center;
	font-size: 46px;
}
.calendar {
	margin-top: 1.25rem;
	min-height: 11.25rem;
	border: 1px solid #60d95b;
}
.calendar-top {
	width: 100%;
	height: 15%;
	background-color: #72ff6c;
	text-align: center;
	color: #fff;
	font-weight: bold;
}
</style>
<!-- 全局下的属性 -->
<style>
	.el-calendar-table .el-calendar-day {
		height: 40px!important;
	}
</style>
