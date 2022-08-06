// 第二个场景的倒计时标志
class CountDown extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.count = 0
    this.src = ['./FlappyBird/font_051.png', './FlappyBird/font_050.png', './FlappyBird/font_049.png']
    this.img.src = this.src[this.count]
    this.w = 50
    this.h = 60
    this.x = (data.cw - this.w) / 2
    this.y = data.ch / 2.5
  }
  // 渲染图片
  render() {
    ctx.drawImage(this.img, this.x, this.y, 40, 68) // 渲染logo图片
  }
}