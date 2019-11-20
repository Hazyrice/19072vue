<template>
	<div class="gd-box">
		<el-card :body-style="{ padding: '0px' }">
			<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
			<div style="height: 30px;" >
				<span class="gd-price"> ￥{{ pricea }}</span>
			</div>
			<div style="height: 40px;"><span class="gd-title">{{gdTitle}}</span></div>
		</el-card>
	</div>
</template>

<script>
export default {
	props: ['pricea','gdTitle'],
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.gd-box {
	width: 80%;
	border: 1px solid transparent;
	margin-bottom: 1.25rem;
	position: relative;
	img {
		width: 100%;
		display: block;
		cursor: pointer;
	}
	.gd-price {
		margin-left: 5px;
		font: {
			size: 20px;
			weight: bold;
		}
		cursor: pointer;
		color: #f62323;
	}
	.gd-title {
		cursor: pointer;
		margin-left: 10px;
		font: {
			size: 10px;
		}
	}
	.gd-title:hover {
		color: #800000;
		text-decoration: underline
	}
	&:hover {
		border: 1px solid #f62323;
	}
}
</style>
