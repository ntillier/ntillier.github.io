(function () {
  setTimeout(() => {
    var header =
      '<label>nathanTi</label><div><a href="./">HOME</a><a href="./tools">TOOLS</a><a href="./programs">PROGRAMS</a><a href="./tutorials">TUTORIALS</a><a href="./about">ABOUT</a></div>';
    var footer =
      '<div><a href="https://www.khanacademy.org/profile/kaid_1091820158849429237197523">Khan Academy</a><a href="https://github.com/nathanTi-Programing">GitHub</a><img src="https://github.com/nathanTi-Programing/nathantiprograming-webpage/blob/master/logo.png?raw=true"><span>Copyright © 2022 - Nathan Tillier</span></div>';
    document.getElementsByTagName('header')[0].innerHTML = header;
    document.getElementsByTagName('footer')[0].innerHTML = footer;
  }, 50);
})();
