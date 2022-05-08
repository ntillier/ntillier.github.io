function makeRequest(type, url, datas) {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(JSON.parse(req.response));
        }
      }
    }
    req.open(type, url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(datas));
  });
}
const ID = s => document.getElementById(s);
const CLASS = s => document.getElementsByClassName(s)[0];
const TAG = s => document.getElementsByTagName(s)[0];

const creE = (n, i) => {
  const e = document.createElement(n);
  e.innerHTML = i || "";
  return e;
}
const ass = (o, e) => {
  Object.assign(o, e);
}
const goto = (h) => {
  var w = window.open(h, '_self');
  /*w.onload = () => {
    w.postMessage(JSON.stringify({
      "header", TAG("header").innerHTML
    }))
  }*/
}
const createHeader = function() {
  function showHeader(obj) {
    const link = creE('link');
    link.rel = 'icon';
    TAG('head').appendChild(link);
    link.href = 'https://raw.githubusercontent.com/ntillier/website/main/Logo.svg';
    const header = document.createDocumentFragment();
    const label = creE("LABEL", "nathanTi");
    label.onclick = () => {goto('/');}
    header.appendChild(label);
    
    const ul = creE("UL");
    const div = creE("DIV");
    
    Object.keys(obj).forEach((item) => {
      var li = creE("LI", item);
      
      li.onclick = () => { window.open(`/${item.toLowerCase()}`, '_self');}

      if (obj[item].length > 0) {
        const ol = creE("OL");
      
        obj[item].forEach((i) => {
          const li2 = creE("LI");
          li2.innerHTML = i.title;
          li2.onclick = () => {
            goto(i.href);
          }
          ol.appendChild(li2);
        })
        li.onmouseover = () => {
          div.innerHTML = "";
          div.appendChild(ol);
          div.style.left = Math.min(li.getBoundingClientRect().x, window.innerWidth - div.offsetWidth) + "px";
        }
      } else {
        li.onmouseover = () => {
          div.style.left = window.innerWidth + "px";
        }
      }
      ul.appendChild(li);
    })
    header.appendChild(ul);
    header.appendChild(div);
    TAG("header").appendChild(header);
  }
  if (sessionStorage.getItem("currentHeader")) {
showHeader(JSON.parse(sessionStorage.getItem('currentHeader')));
    return;
  }
  makeRequest("GET", '/api/header.json', {})
  .then((datas) => {
    sessionStorage.setItem("currentHeader", JSON.stringify(datas));
    showHeader(datas);
  })
  .catch((err) => {
    const label = creE("LABEL", "nathanTi");
    label.onclick = () => {goto('/');}
    TAG("header").appendChild(label);
  })
}
const showFooter = () => {
  const footer = creE("DIV", '<div><a href="https://www.khanacademy.org/profile/kaid_1091820158849429237197523">Khan Academy</a><a href="https://github.com/ntillier">GitHub</a><img src="https://raw.githubusercontent.com/ntillier/website/main/Logo.svg"><span>Copyright © 2022 - Nathan Tillier</span></div>');
  footer.classList.add("footer");
  document.body.appendChild(footer); 
}
function parseURL(path){var paths=path.split("/").filter(item=>{return item!==""});return paths}
function getHead(t,d,n){return`<h1>${t}</h1><span>${d}</span><label>${n}</label>`}function parseContent(c){let t=c;for(var i=6;i>0;i--){const reg=new RegExp(`(\n|^)#{${i}}(.+)`,"g");t=t.replace(reg,`<h${i}>$2</h${i}>`)}[[/```((.|\n)*?)```/g,"<pre><code>$1</code></pre>"],[/`(.*?)`(?![^<]*?<\/code>)/g,'<label class="code">$1</label>'],[/\[(.*?)\]\((.*?)\)/g,"<a href='$2' target='_blank'>$1</a>"],[/\*\*(.*?)\*\*/g,"<b>$1</b>"],[/\*(.*?)\*/g,"<i>$1</i>"],[/_(.*?)_/g,'<label  class="underline">$1</label>'],[/-\?(.*?)(\n|$)/g,'<label  class="info">$1</label>'],[/-!(.*?)(\n|$)/g,'<label  class="warning">$1</label>'],[/\n(?![^]*?<\/code>)/g,"<br>"]].forEach(item=>{t=t.replace(item[0],item[1])});return t}
function fullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
