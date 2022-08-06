// 第一个场景的按钮
class Button extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/button_play.png' // logo图片
    this.w = 116
    this.h = 70
    this.x = (data.cw - this.w) / 2
    this.y = data.ch / 2
    this.next = false // 表示没有点击
    this.registerFn = e => {
      // 获取点击位置
      let point = {
        x: e.offsetX,
        y: e.offsetY
      }

      // 点击范围估算
      let block = {
        x: this.x + 5,
        y: this.y + 9,
        w: this.w - 17,
        h: this.h - 24
      }

      // 边界条件
      if (isPointInBlock(point, block)) {
        this.next = true // 表示按钮被点击了
      }
    }
  }
  // 渲染图片
  render() {
    ctx.drawImage(this.img, this.x, this.y) // 渲染logo图片
  }
  // 注册状态
  register() {
    canvas.addEventListener('click', this.registerFn)
  }
  // 注销状态
  unregister() {
    canvas.removeEventListener("click", this.registerFn)
  }
}