// 第一个场景的标志
class Logo extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/title.png' // logo图片
    this.w = 178
    this.h = 48
    this.x = (data.cw - this.w) / 2
    this.y = 100
    this.registerFn = e => {
      let point = {
        x: e.offsetX,
        y: e.offsetY
      }
      let block = {
        x: this.x,
        y: this.y,
        w: this.w,
        h: this.h
      }
      if (isPointInBlock(point, block)) {
        alert('别点我啊！我只是标题！点下面那货！')
      }
    }
  }
  render() {
    ctx.drawImage(this.img, this.x, this.y) // 渲染logo图片
  }
  register() {
    canvas.addEventListener("click", this.registerFn)
  }
  unregister() {
    canvas.removeEventListener("click", this.registerFn)
  }

}