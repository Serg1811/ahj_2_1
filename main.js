(()=>{"use strict";class t{constructor(){this.board=null}createBoard(t){const e=document.createElement("div");e.classList.add("wrapper");for(let i=0;i<t**2;i+=1){const t=document.createElement("div");t.classList.add("cell"),e.appendChild(t)}return this.board=e,this.board}}(new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;this.board=new t,this.boardSize=e,this.index=null}init(){document.body.appendChild(this.board.createBoard(this.boardSize)),this.cells=[...document.querySelectorAll(".cell")],this.img=document.images[0],this.start()}getIndex(){let t=null;do{t=Math.floor(Math.random()*this.boardSize**2)}while(t===this.index);return this.index=t,t}start(){setInterval((()=>{(this.index||0===this.index)&&(this.cells[this.index].classList.remove("active"),this.cells[this.index].innerHTML=""),this.getIndex(),this.cells[this.index].classList.add("active"),this.cells[this.index].appendChild(this.img)}),1e3)}}).init()})();