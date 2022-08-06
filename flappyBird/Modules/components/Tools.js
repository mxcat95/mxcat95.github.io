// 这是一个工具组件 用来存放一些通用的方法

// 点击事件 按钮边界检测
function isPointInBlock(point, block) {
  return point.x > block.x &&
    point.x < (block.x + block.w) &&
    point.y > block.y &&
    point.y < (block.y + block.h)
}

// 节流函数封装
function throttle(fn, delay) {
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    fn()
    setTimeout(() => flag = true, delay)
  }
}