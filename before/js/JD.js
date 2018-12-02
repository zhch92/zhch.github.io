window.onload = function() {


	function changeimgone() {
		var oTop = document.getElementById('top');
		var oImg = oTop.getElementsByTagName('img')[0];
		var oUl = oTop.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
		var num = 0;
		var timer = null;
		var arrUrl = ['http://img10.360buyimg.com/da/jfs/t682/70/386462483/61160/815df73/546373b5Ne38dde92.jpg',
				'http://img13.360buyimg.com/da/jfs/t592/29/370179026/73098/583f47c1/546324e6N01408a68.jpg',
				'http://img13.360buyimg.com/da/jfs/t676/309/118420410/39659/6747dd81/54630577N6a1b2794.jpg',
				'http://img14.360buyimg.com/da/jfs/t622/64/393512873/60742/91a75337/54644784Nd54cfab7.jpg',
				'http://img13.360buyimg.com/da/jfs/t577/327/127799085/47835/1f631875/546449abNa815650e.jpg',
				'http://img13.360buyimg.com/da/jfs/t604/339/387930141/83578/e228c6c2/54632312N211804cd.jpg'
			]
			// 初始化
		for (var i = 0; i < arrUrl.length; i++) {
			arrUrl[i]
		};

		function tab() {
			oImg.src = arrUrl[num];
		}
		tab();
		oTop.onmouseover = function() {
			clearInterval(timer);
			oTop.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
	}
  function changeimgtwo(){
  	var oTwo=document.getElementById('two');
  	var oImg=oTwo.getElementsByTagName('img')[0];
  	var oUl = oTwo.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oTwo.onmouseover = function() {
			clearInterval(timer);
			oTwo.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }
  function changeimgthree(){
  	var oThree=document.getElementById('three');
  	var oImg=oThree.getElementsByTagName('img')[0];
  	var oUl = oThree.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img10.360buyimg.com/da/jfs/t685/2/430768179/12257/cb0ea38f/54674942Nc735273b.jpg',
  	'http://img13.360buyimg.com/da/jfs/t493/365/423365610/13346/2f11960d/5468439aNbbf86c13.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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
  }

  function changeimgfour(){
  	var oFour=document.getElementById('four');
  	var oImg=oFour.getElementsByTagName('img')[0];
  	var oUl = oFour.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oFour.onmouseover = function() {
			clearInterval(timer);
			oFour.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }

  function changeimgfive(){
  	var oFive=document.getElementById('five');
  	var oImg=oFive.getElementsByTagName('img')[0];
  	var oUl = oFive.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oFive.onmouseover = function() {
			clearInterval(timer);
			oFive.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }
  function changeimgsix(){
  	var oSix=document.getElementById('six');
  	var oImg=oSix.getElementsByTagName('img')[0];
  	var oUl = oSix.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oSix.onmouseover = function() {
			clearInterval(timer);
			oSix.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }
  function changeimgseven(){
  	var oSeven=document.getElementById('seven');
  	var oImg=oSeven.getElementsByTagName('img')[0];
  	var oUl = oSeven.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oSeven.onmouseover = function() {
			clearInterval(timer);
			oSeven.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }
  function changeimgeight(){
  	var oEight=document.getElementById('eight');
  	var oImg=oEight.getElementsByTagName('img')[0];
  	var oUl = oEight.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oEight.onmouseover = function() {
			clearInterval(timer);
			oEight.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }
  function changeimgnine(){
  	var oNine=document.getElementById('nine');
  	var oImg=oNine.getElementsByTagName('img')[0];
  	var oUl = oNine.getElementsByTagName('ul')[0];
		var oLi = oUl.getElementsByTagName('li');
  	var arrUrl=['http://img12.360buyimg.com/da/jfs/t646/1/420584872/16580/9a77ad48/54655fb1N33256147.jpg',
  	'http://img13.360buyimg.com/da/jfs/t580/352/412073379/12059/ed783a4b/5465d0a3N0a159631.jpg',
  	'http://img14.360buyimg.com/da/jfs/t565/52/431906154/14773/824ce36f/54656021N540174e9.jpg',
  	'http://img12.360buyimg.com/da/jfs/t694/340/402234462/36424/f23755e6/5465d0c5N2ae4b5a3.jpg']
    var num=0;
    var timer=null;
    // 初始化
    for (var i = arrUrl.length - 1; i >= 0; i--) {
    	arrUrl[i]
    };
    function tab(){
    	 oImg.src=arrUrl[num]
    }
   tab();
   	oNine.onmouseover = function() {
			clearInterval(timer);
			oNine.onmouseout = autoPlay;
		}
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].index = i;
			oLi[i].onmouseover = function() {
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

		function autoPlay() {
			timer = setInterval(function() {
				if (num == arrUrl.length - 1) {
					num = 0
				} else {
					num++
				};
				tab();
				chang(num);
			}, 2000)
		}
		autoPlay();
  }

	changeimgone();
	changeimgtwo();
	changeimgthree();
	changeimgfour();
	changeimgfive();
	changeimgsix();
	changeimgseven();
	changeimgeight();
	changeimgnine();






}