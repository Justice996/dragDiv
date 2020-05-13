//创建节点
let div1 = document.createElement("div");
div1.className = 'demo'
//插入到页面
document.body.appendChild(div1);
//创建一个标志用来储存div是否能够开始移动
let status = false
let lastX, lastY
//当用户在div上按下鼠标时
div1.onmousedown = (e) => {
  lastX = e.clientX
  lastY = e.clientY
  status = true;
}



document.onmousemove = (e) => {
  //当状态为true时移动div
  if (status === true) {
    //由于div1.style取不到样式需要处理一下
    let top = parseInt(div1.style.top) || 0;
    let left = parseInt(div1.style.left) || 0;
    //防止div被拖出浏览器
    let resultY = top + (e.clientY - lastY);
    let resultX = left + (e.clientX - lastX);
    if (resultX < 0) {
      resultX = 0;
      status = false
    }
    if (resultY < 0) {
      resultY = 0;
      status = false
    }
    div1.style.top = resultY + "px"
    div1.style.left = resultX + "px"
    // console.log(div1.style.top);
    // 刷新lastX，lastY
    lastX = e.clientX
    lastY = e.clientY
  }

}
//当用户松开鼠标时禁止拖动
div1.onmouseup = () => {
  status = false
}