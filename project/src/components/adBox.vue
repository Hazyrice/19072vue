<template>
	<div class="ad-box">
		<el-card :body-style="{ padding: '0px' }">
			<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
			<div style="padding: 14px;">
				<span class="ad-price">￥{{ price }}</span>
			</div>
		</el-card>
		<div class="ad-detail-box">商品名</div>
	</div>
</template>

<script>
export default {
	props: ['price'],
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.ad-box {
	width: 80%;
	border: 1px solid transparent;
	cursor: pointer;
	margin-bottom: 0.9375rem;
	position: relative;
	img {
		width: 100%;
		display: block;
	}
	.ad-price {
		font: {
			weight: bold;
			size: 20px;
		}
		color: #f62323;
	}
	.ad-detail-box {
		width: 100%;
		height: 60px;
		background-color: rgba(255, 255, 255, 0.8);
		position: absolute;
		bottom: 49px;
		text-align: center;
		line-height: 60px;
		display: none;
	}
	&:hover {
		border: 1px solid #f62323;
	}
	&:hover .ad-detail-box {
		display: block;
	}
}
</style>
