//创建节点
let div1 = document.createElement("div");
div1.className = 'demo'
//插入到页面
document.body.appendChild(div1);
//创建一个标志用来储存div是否能够开始移动
let status = false

//当用户在div上按下鼠标时
div1.onmousedown = () => {
  status = true
}



document.body.onmousemove = (e) => {
  //当状态为true时移动div
  if (status === true) {
    div1.style.top = e.clientY + 'px'
    div1.style.left = e.clientX + "px"
  }

}
//当用户松开鼠标时禁止拖动
div1.onmouseup = () => {
  status = false
}