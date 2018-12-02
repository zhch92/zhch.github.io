(function() {

  function rollTitle() {
    var title=document.getElementsByTagName('title');
    var titleStr = title[0].innerHTML;
    var firstChar = titleStr.charAt(0);
    var newTitle=titleStr.slice(1)+firstChar;
    title[0].innerHTML=newTitle;
  }
  setInterval(rollTitle, 500);


})();