<template>
	<div>
		<div class="logBox">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username"><el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input></el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
			if (value === '') {
				callback(new Error('请输入用户名'));
			} else {
				if (/[ \\\ / * ? : "<> | ]/.test(value)) {
					callback(new Error('用户名含有非法字符'));
				}
				callback();
			}
		};
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(value)) {
					this.$refs.ruleForm.validateField('checkPass');
				} else {
					callback(new Error('密码中必须含有数字和字母!'));
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
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
					alert('submit!');
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
.el-form-item {
	margin-bottom: 32px;
}
</style>
