<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="top-part grid-content bg-purple-dark">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<div class="logo-part"></div>
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
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="9"><div class="grid-content bg-purple-light"></div></el-col>
			<el-col :span="9"><div class="grid-content bg-purple"></div></el-col>
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
.logo-part {
	width: 300px;
}
.top-part {
	height: 60px;
}
.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
