// 第一个场景的背景
class Background extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/bg_day.png' // 背景图片
    this.x = 0 // 背景初始化位置
    this.speed = data.speed // 移动速度
  }

  render() {

    this.x += this.speed // 让背景向左移动
    // 边界条件
    if (this.x <= -data.cw) this.x = 0
    ctx.drawImage(this.img, this.x, 0, data.cw, data.ch) // 渲染背景图片
    ctx.drawImage(this.img, this.x + data.cw, 0, data.cw, data.ch) // 渲染背景图片

  }
}