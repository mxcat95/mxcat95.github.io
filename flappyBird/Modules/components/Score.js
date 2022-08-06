// 计分
class Score extends Basic {
  constructor() {
    super()
    this.srcLists = [
      './FlappyBird/font_048.png',
      './FlappyBird/font_049.png',
      './FlappyBird/font_050.png',
      './FlappyBird/font_051.png',
      './FlappyBird/font_052.png',
      './FlappyBird/font_053.png',
      './FlappyBird/font_054.png',
      './FlappyBird/font_055.png',
      './FlappyBird/font_056.png',
      './FlappyBird/font_057.png',
    ]

    // 用于分数组合的图片
    this.imgLists = this.srcLists.map(src => {
      let img = new Image()
      img.src = src
      img.style.cssText = `margin: 1px 0px;`
      return img
    })

    this.w = 24
    this.h = 44
    this.y = 0
  }
  // 根据分数显示图片组合
  show(num) {
    this.num = Math.floor(num)
    if (this.num > 9999999 || this.num < 0) return

    // 将数字拆分为单个数字
    let numList = (this.num + '').split('').map(str => str * 1)
    let length = numList.length

    numList.forEach((num, index) =>
      ctx.drawImage(this.imgLists[num], data.cw - (length - index) * (this.w), this.y))

  }

}