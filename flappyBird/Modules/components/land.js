// 陆地模块
class Land extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/land.png'
    this.w = 336
    this.h = 112
    this.x = 0
    this.y = data.ch - 112
    this.speed = data.speed
  }
  render() {
    this.x += this.speed
    if (this.x <= -data.cw) this.x = 0
    ctx.drawImage(this.img, this.x, this.y)
    ctx.drawImage(this.img, this.x + data.cw, this.y)

  }
}