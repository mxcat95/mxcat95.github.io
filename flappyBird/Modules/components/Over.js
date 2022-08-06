// 结束界面
class Over extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/text_game_over.png'
    this.w = 200
    this.x = (data.cw - this.w) / 2
    this.y = 100
    this.boxList = []
  }
  render() {
    ctx.drawImage(this.img, this.x, this.y)
  }
}