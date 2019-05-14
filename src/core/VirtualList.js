/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable vars-on-top */

/** from: https://sergimansilla.com/blog/virtual-scrolling/ */
/**
 * see also:
 * https://www.jeasyui.com/tutorial/datagrid/datagrid27.php
 * https://dbushell.com/2016/03/04/css-only-responsive-tables/ (https://codepen.io/dbushell/pen/wGaamR)
 *
 * more css3 scrolling
 * https://codepen.io/Kseso/pen/bygkA
 * https://codepen.io/nirmalkc/pen/oswdB
 * https://codepen.io/paulobrien/pen/pPpbYJ
 * https://codepen.io/sebredhh/pen/jKGREz sticky headers css attribute!
 *
 * html5 custom data attributes http://html5doctor.com/html5-custom-data-attributes/
 *
 */
export default class VirtualList {
  static createContainer(w, h) {
    const c = document.createElement("div");
    c.style.width = w;
    c.style.height = h;
    c.style.overflow = "auto";
    c.style.position = "relative";
    c.style.padding = 0;
    c.style.border = "1px solid black";
    return c;
  }

  static createScroller(h) {
    const scroller = document.createElement("div");
    scroller.style.opacity = 0;
    scroller.style.position = "absolute";
    scroller.style.top = 0;
    scroller.style.left = 0;
    scroller.style.width = "1px";
    scroller.style.height = h + "px";
    return scroller;
  }

  constructor(config) {
    const width = (config && config.width + "px") || "100%";
    const height = (this.height = (config && config.height + "px") || "100%");
    const itemHeight = (this.itemHeight = config.itemHeight);

    this.items = config.items;
    this.generatorFn = config.generatorFn;
    // console.log(config.totalRows);
    this.totalRows = config.totalRows || (config.items && config.items.length);

    const totalHeight = itemHeight * this.totalRows;
    this.scroller = VirtualList.createScroller(totalHeight);
    this.container = VirtualList.createContainer(width, height);

    const screenItemsLen = Math.ceil(config.h / itemHeight);
    // Cache 4 times the number of items that fit in the container viewport
    const cachedItemsLen = screenItemsLen * 3;
    this._renderChunk(this.container, 0, cachedItemsLen / 2);

    const self = this;
    let lastRepaintY;
    const maxBuffer = screenItemsLen * itemHeight;

    function onScroll(e) {
      const scrollTop = e.target.scrollTop;
      let first = parseInt(scrollTop / itemHeight) - screenItemsLen;
      first = first < 0 ? 0 : first;
      if (!lastRepaintY || Math.abs(scrollTop - lastRepaintY) > maxBuffer) {
        self._renderChunk(self.container, first, cachedItemsLen);
        lastRepaintY = scrollTop;
      }

      e.preventDefault && e.preventDefault();
    }

    this.container.addEventListener("scroll", onScroll);
  }

  _renderChunk(node, fromPos, howMany) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.scroller);

    let finalItem = fromPos + howMany;
    if (finalItem > this.totalRows) finalItem = this.totalRows;

    for (let i = fromPos; i < finalItem; i++) {
      let item;
      if (this.generatorFn) item = this.generatorFn(i);
      else if (typeof this.items[i] === "string") {
        const itemText = document.createTextNode(this.items[i]);
        item = document.createElement("div");
        item.style.height = this.height;
        item.appendChild(itemText);
      }
      else {
        item = this.items[i];
      }

      item.classList.add("vrow");
      item.style.position = "absolute";
      item.style.top = i * this.itemHeight + "px";
      fragment.appendChild(item);
    }

    node.innerHTML = "";
    node.appendChild(fragment);
  }

  createExample(nodeId = 'placeholder') {
    const list = new VirtualList({
      width: 300,
      height: 300,
      itemHeight: 31,
      totalRows: 1000000,
      generatorFn: function (row) {
        const el = document.createElement("div");
        el.innerHTML = "I am row number " + row;
        el.style.backgroundColor = "red";
        el.style.background = "linear-gradient(to bottom, #fefefd 0%,#dce3c4 42%,#aebf76 100%)";
        el.style.textAlign = "center";
        el.style.width = "300px";
        return el;
      },
    });

    list.container.style.marginLeft = "auto";
    list.container.style.marginRight = "auto";
    document.getElementById(nodeId).appendChild(list.container);
  }
}
