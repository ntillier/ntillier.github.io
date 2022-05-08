(function(){
  createHeader();
  function createPart() {
    const part = creE('div');
    part.classList.add('part');
    return part;
  }
  function createTile(l, i, d, h, b) {
    const tile = creE('div');
    tile.classList.add('tile');
    if (b) tile.classList.add('big');
    const label = creE('label', l);
    const description = creE('p', d);
    tile.appendChild(label);
    if (i) {
      const img = creE("IMG");
      img.src = i;
      tile.appendChild(img);
    }
    tile.appendChild(description);
    tile.onclick = () => {
      goto(h);
    }
    return tile;
  }
  makeRequest("GET", '/api/news.json', {})
  .then((datas) => {
    CLASS('load').remove();
    
    const head = creE('div', `<img src="${datas.img}"><p>${parseContent(datas.content)}</p>`);
    head.classList.add('head');
    head.classList.add('home');
    document.body.appendChild(head);
    
    let part = null;
    datas.list.forEach((item, index) => {
      const i = index%6;
      if (i === 2 || i === 3) {
    document.body.appendChild(createTile(item.label, item.img, item.description, item.href, true))
      } else if (i === 0 || i === 4) {
        part = createPart();
        part.appendChild(createTile(item.label, item.img, item.description, item.href));
      } else {
        part.appendChild(createTile(item.label, item.img, item.description, item.href));
        document.body.appendChild(part);
        part = null;
      }
    });
    if (part) {
      document.body.appendChild(part);
    }
    showFooter();
  })
  
})();
