(function (w) {
  window.onload = () => {
    var header =
      '<a href="./"><label>nathanTi</label></a><ul tabindex="4"><li></li><li></li><li></li></ul><div><a href="./home">HOME</a><a href="./tools">TOOLS</a><a href="./programs">PROGRAMS</a><a href="./tutorials">TUTORIALS</a><a href="./about">ABOUT</a></div>';
    var footer =
      '<div><a href="https://www.khanacademy.org/profile/kaid_1091820158849429237197523">Khan Academy</a><a href="https://github.com/ntillier">GitHub</a><img src="https://raw.githubusercontent.com/ntillier/nathantiprograming-webpage/annex/logo.png"><span>Copyright © 2022 - Nathan Tillier</span></div>';
    document.getElementsByTagName('header')[0].innerHTML = header;
    document.getElementsByTagName('footer')[0].innerHTML = footer;
    init();
  };
})(window);
