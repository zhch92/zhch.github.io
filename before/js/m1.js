window.onload = function() {

    var oIm = document.getElementById('im')
    var oImg = oIm.getElementsByTagName('img')[0];
    var oUl = oIm.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var oNext = oIm.getElementsByTagName('next');
    var oPrevious = oIm.getElementsByTagName('previous');
    var oPre = document.getElementById('pre')
    var oNext = document.getElementById('next')
    var arrUrl = ['../img/m1.jpg', '../img/m2.jpg', '../img/m3.jpg', '../img/m4.jpg', '../img/m5.jpg', '../img/m6.jpg', '../img/m7.jpg']
    var num = 0;
    var timer = null;
    var i = 0;
    // 初始化.....
    function tab() {
        oImg.src = arrUrl[num]
    }
    tab();
    oIm.onmouseover = function() {
        clearInterval(timer);
        oIm.onmouseout = autoPlay;
    }
    oPre.onclick = p;

    function p() {

        for (var i = 0, len = arrUrl.length; i < len; i++) {

            var thisImg = oImg.getAttribute('src');
            if (thisImg == arrUrl[i]) {
                if (i == 0) {
                    i = arrUrl.length - 1;
                } else {
                    i -= 1;
                }
            } else {
                continue;
            }
            oImg.src = arrUrl[i]
            chang(i)
        };

    }
    oNext.onclick = n;

    function n() {
        for (var i = 0; i < arrUrl.length; i++) {
            var thisImg = oImg.getAttribute('src');
            if (thisImg == arrUrl[i]) {
                if (i == arrUrl.length-1) {
                    i = 0
                } else {
                    i += 1
                };
            } else {
                continue
            };
            oImg.src = arrUrl[i]
            chang(i)
        };

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
