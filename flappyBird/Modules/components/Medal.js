// 奖章
class Medal extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.srcLists = [
      './FlappyBird/medals_0.png',
      './FlappyBird/medals_1.png',
      './FlappyBird/medals_2.png',
      './FlappyBird/medals_3.png'
    ]
    this.img.src = this.srcLists[0]
    this.w = 44
    this.h = 44
    this.x = (data.cw - this.w) / 4
    this.y = data.ch / 2.5
  }

  render() {

    // 金银铜牌的对应分数
    if (currentScore >= 5 && currentScore < 10) {
      this.img.src = this.srcLists[3]
    }
    if (currentScore >= 10 && currentScore < 15) {
      this.img.src = this.srcLists[2]
    }
    if (currentScore >= 15) {
      this.img.src = this.srcLists[1]
    }
    ctx.drawImage(this.img, this.x - 5, this.y + 10)
  }
}