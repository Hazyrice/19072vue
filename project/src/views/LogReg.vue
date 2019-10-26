<template>
	<div>
	<top-mune></top-mune>
	<div class="logBox">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
			<el-form-item label="密码" prop="pwd"><el-input type='password' v-model="ruleForm.pwd"></el-input></el-form-item>
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
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.axios.post('/login', {
					    username: this.ruleForm.name,
					    pwd: this.ruleForm.pwd
					  })
					  .then(function (response) {
					    console.log(response);
						alert("登陆成功")
						console.log(that)
						that.$router.push('/')
					  })
					  .catch(function (error) {
					    console.log(error);
					  });

					// alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		goToRegister: function() {
			this.$router.push('/LogReg/register')
		},
		
	}
};
</script>

<style>
.logBox {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 600px;
	margin: 0 auto;
	margin-top: 40px;
	border: 2px solid rgba(96, 255, 244, 0.2);
}
</style>
