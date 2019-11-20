<template>
	<div class="background-pic">
		<img src="../assets/logbg.jpg" alt="bg-pic" />
		<div class="logBox">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name" placeholder="请输入您的用户名"></el-input></el-form-item>
				<el-form-item label="密码" prop="pwd"><el-input type="password" v-model="ruleForm.pwd" placeholder="请输入您的密码"></el-input></el-form-item>
				<el-form-item size="large">
					<el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
					<el-button @click="goToRegister">注册</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				name: '',
				pwd: ''
			},
			rules: {
				name: [{ message: '请输入用户名称', trigger: 'blur' }, { min: 3, max: 8, message: '用户名称长度在 3 到 8 个字符', trigger: 'blur' }],
				pwd: [{ message: '请输入密码', trigger: 'blur' }, { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }]
			}
		};
	},
	methods: {
		submitForm(formName) {
			const that = this;
			if (this.ruleForm.name.length >= 3 && this.ruleForm.pwd.length >= 6) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.axios
							.post('/login', {
								username: this.ruleForm.name,
								pwd: this.ruleForm.pwd
							})
							.then(function(response) {
								if (response.data.check == 'ok') {
									
									that.$notify({
										title: '成功',
										message: response.data.inf,
										type: 'success',
										position: 'bottom-right'
									});
									that.$router.push('/');
								} else {
									that.$notify.error({
										title: '失败',
										message: response.data.inf,
										position: 'bottom-right'
									});
								}
								// that.$router.push('/')
							})
							.catch(function(error) {
								console.log(error);
							});

						// alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			} else {
				this.$notify.error({
					title: '失败',
					message: '用户名或密码输入错误，请重试。',
					position: 'bottom-right'
				});
			}
		},
		goToRegister: function() {
			this.$router.push('/LogReg/register');
		}
	}
};
</script>

<style scoped="scoped">
.background-pic {
	position: absolute;
	height: 45.375rem;
	width: 100%;
	overflow: hidden;
	top: 40px;
}
.background-pic > img {
	height: 120%;
	width: 120%;
	position: absolute;
	top: -2.5rem;
	z-index: -1;
}
.logBox {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	height: 200px;
	margin: 0 auto;
	margin-top: 40px;
	top: 13rem;
	left: -31rem;
}
</style>
<style>
.el-form-item > label {
	color: white;
}
</style>
