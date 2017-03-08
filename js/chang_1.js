window.onload = function() {


	function imgchangeOne() {

		var oMain = document.getElementById('main');
		var oChang_1 = document.getElementById('chang_1');

		var oUl = oChang_1.getElementsByTagName('ul')[0];
		var oImg = oMain.getElementsByTagName('img')[0];
		var oLi = oUl.getElementsByTagName('li');
		var num = 0;
		var timer = null;
		var arrUrl = ['../img/7.jpg', '../img/8.jpg', '../img/6.jpg', '../img/10.jpg', '../img/9.jpg'];
		//初始化。。。。
		for (var i = 0; i < arrUrl.length; i++) {
			arrUrl[i]
		};

		function tab() {
			oImg.src = arrUrl[num];
		}

		tab();
		oMain.onmouseover = function() {
			clearInterval(timer);
			oMain.onmouseout = autoPlay_1;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onclick = function() {
				var onum = this.index;
				oImg.src = arrUrl[this.index];
				num = onum;
				chang(onum);
			}
		};

		function chang(num) {
			for (var i = 0; i < arrUrl.length; i++) {
				if (i === num) {
					oLi[i].className = 'active';
				} else {
					oLi[i].className = '';

				};
			};
		}

		function autoPlay_1() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 1000)
		}
		autoPlay_1();

	}


	function imgchangeTwo() {

		var oMain_3 = document.getElementById('main_3');
		var oChang_2 = document.getElementById('chang_2');
		var oUl = oChang_2.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
		var oImg = oMain_3.getElementsByTagName('img')[0];
		var arrUrl = ['../img/5.jpg', '../img/4.jpg', '../img/3.jpg', '../img/1.jpg'];
		var num = 0;
		timer = null;
		//初始化。。。
		function tab() {
			oImg.src = arrUrl[num];
		}
		tab();
		oMain_3.onmouseover = function() {
			clearInterval(timer);
			oMain_3.onmouseout = autoPlay;
		}

		function chang(num) {
			for (var i = 0; i < arrUrl.length; i++) {
				if (i === num) {
					oLi[i].className = 'active';
				} else {
					oLi[i].className = '';

				};
			};
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onclick = function() {
				var onum = this.index;
				oImg.src = arrUrl[this.index];
				num = onum;
				chang(onum);
			}
		};

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0;
				} else {
					num++
				};
				tab();
				chang(num);
			}, 1000)

		}
		autoPlay();
	}

	function mousemove_1() {
		var oB_1 = document.getElementById('b_1');
		var oB_2_1 = document.getElementById('b_2_1');
		oB_1.onmouseover = function show() {
			oB_2_1.style.display = 'block';
			oB_1.className = 'b_1_1';
		}
		oB_1.onmouseout = function hide() {
			oB_2_1.style.display = 'none';
			oB_1.className = 'b_1';
		}
	}

	function mousemove_2() {
		var oB_2 = document.getElementById('b_2');
		var oB_2_2 = document.getElementById('b_2_2');
		oB_2.onmouseover = function show() {
			oB_2_2.style.display = 'block';
			oB_2.className = 'b_1_1';
		}
		oB_2.onmouseout = function hide() {
			oB_2_2.style.display = 'none';
			oB_2.className = 'b_1';
		}
	}

	function mousemove_3() {
		var oB_3 = document.getElementById('b_3');
		var oB_2_3 = document.getElementById('b_2_3');
		oB_3.onmouseover = function show() {
			oB_2_3.style.display = 'block';
			oB_3.className = 'b_1_1';
		}
		oB_3.onmouseout = function hide() {
			oB_2_3.style.display = 'none';
			oB_3.className = 'b_1';
		}
	}

	function mousemove_4() {
		var oB_4 = document.getElementById('b_4');
		var oB_2_4 = document.getElementById('b_2_4');
		oB_4.onmouseover = function show() {
			oB_2_4.style.display = 'block';
			oB_4.className = 'b_1_1';
		}
		oB_4.onmouseout = function hide() {
			oB_2_4.style.display = 'none';
			oB_4.className = 'b_1';
		}
	}

	function mousemove_5() {
		var oB_5 = document.getElementById('b_5');
		var oB_2_5 = document.getElementById('b_2_5');
		oB_5.onmouseover = function show() {
			oB_2_5.style.display = 'block';
			oB_5.className = 'b_1_1';
		}
		oB_5.onmouseout = function hide() {
			oB_2_5.style.display = 'none';
			oB_5.className = 'b_1';
		}
	}

	function mousemove_6() {
		var oB_6 = document.getElementById('b_6');
		var oB_2_6 = document.getElementById('b_2_6');
		oB_6.onmouseover = function show() {
			oB_2_6.style.display = 'block';
			oB_1.className = 'b_1_1';
		}
		oB_6.onmouseout = function hide() {
			oB_2_6.style.display = 'none';
			oB_1.className = 'b_1';
		}
	}


	imgchangeOne();
	imgchangeTwo();
	mousemove_1();
	mousemove_2();
	mousemove_3();
	mousemove_4();
	mousemove_5();
	mousemove_6();

}