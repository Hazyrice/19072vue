<template>
	<div>
		<el-backtop :bottom="60"></el-backtop>
		<el-row>
			<el-col :span="24">
				<div class="top-part grid-content bg-purple-dark">
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
			<el-col :span="6">
				<el-row class="tac">
					<el-col :span="12">
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
							<h5 style="">全部功能</h5>
							<el-menu-item index="1" class='side-guide'><span slot="title">我的购物车</span></el-menu-item>
							<el-menu-item index="2" class='side-guide'><span slot="title">我的订单</span></el-menu-item>
							<el-menu-item index="3" class='side-guide'><span slot="title">我的收藏</span></el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="9"><div></div></el-col>
			<el-col :span="9"><div></div></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1'
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
</style>
