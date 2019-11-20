<template>
	<div class="bg-pic">
		<img src="../assets/reg.jpg" alt="bg-img" />
		<div class="logBox">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username"><el-input ref='username' type="text" v-model="ruleForm.username" placeholder="请输入用户名,长度为4到12位" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码,长度为6到16位,且包含数字字母" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" placeholder="请再输入一遍密码" autocomplete="off"></el-input></el-form-item>
				<el-form-item>
					<el-button plain type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		var validateUsername = (rule, value, callback) => {
			if (value.length == 0) {
				callback();
			} else if (/[ \\\ / * ? : "<>. | ]/.test(value)) {
				callback(new Error('用户名含有非法字符'));
			} else if (value.trim().length <= 3|| value.trim().length >= 12) {
				callback(new Error('用户名字数至少为4位以上,12位以下'));
			} else {
				this.axios
					.post('/checkUsername', {
						username: value
					})
					.then(function(response) {
						if (response.data.check == 'had') {
							callback(new Error(response.data.inf))
						} else {
							callback();
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		};
		var validatePass = (rule, value, callback) => {
			if (value.length == 0) {
				callback();
			} else {
				if (/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(value)) {
					this.$refs.ruleForm.validateField('checkPass');
				} else if (value.length <= 5 || value.length >= 17) {
					callback(new Error('密码为6到16位之间'));
				} else {
					callback(new Error('密码中必须含有数字和字母!'));
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback();
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				username: '',
				pass: '',
				checkPass: ''
			},
			rules: {
				username: [{ validator: validateUsername, trigger: 'blur' }],
				pass: [{ validator: validatePass, trigger: 'blur' }],
				checkPass: [{ validator: validatePass2, trigger: 'blur' }]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let that = this;
					this.axios
						.get('/register', {
							params: {
								username: this.ruleForm.username,
								pwd: this.ruleForm.pass
							}
						})
						.then(function(response) {
							if (response.data.inf == 'ok') {
								that.$notify({
									message: '注册成功',
									type: 'success',
									position: 'bottom-right'
								});
								that.$router.push('/logReg');
							}
						})
						.catch(function(error) {
							console.log(error);
						});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>

<style scoped="scoped">
.bg-pic {
	position: absolute;
	height: 45.375rem;
	width: 100%;
	overflow: hidden;
	top: 40px;
}
.bg-pic > img {
	height: 120%;
	width: 120%;
	position: absolute;
	top: -2.5rem;
	z-index: -1;
}
.logBox {
	position: relative;
	width: 33%;
	height: 270px;
	margin: 0 auto;
	margin-top: 40px;
	left: 21.375rem;
	top: 8.75rem;
}
.el-form-item {
	margin-bottom: 32px;
}
</style>
