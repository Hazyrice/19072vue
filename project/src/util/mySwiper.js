export default {
	
	mySwiper() {
		function mylunbo(num) {
			swipper(num);
		}
		function swipper(num) {
			var isNum = num;
			num = num || swipperIndex++;
			num = num % 4; //4张图片轮播
			if (num == isNum) {
				//判断是发生了点击
				swipperIndex = num; //重置自动轮播的起始位置
			}
			for (var i = 0; i < 4; i++) {
				// document.querySelectorAll('.imgBox li')[i].style.display = 'none';
				// document.querySelectorAll('.circle li')[i].style.backgroundColor = 'white';
			}
		
			// document.querySelectorAll('.imgBox li')[num].style.display = 'block';
			// document.querySelectorAll('.circle li')[num].style.backgroundColor = 'red';
		}
		var swipperIndex = 1;
		setInterval(swipper, 2000);
		mylunbo(0);
		mylunbo(1);
		mylunbo(2);
		mylunbo(3);
	}
}