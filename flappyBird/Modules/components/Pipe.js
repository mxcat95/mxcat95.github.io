// 陆地模块
class Pipe extends Basic {
  constructor() {
    super()
    this.imgUp = new Image()
    this.imgDown = new Image()
    this.imgUp.src = './FlappyBird/pipe_down.png'
    this.imgDown.src = './FlappyBird/pipe_up.png'

    this.w = 52
    this.h = 320
    this.x = 0
    this.y = 50
    this.size = 200 // 两根柱子之间的间隙
    this.speed = data.speed // 向左移动速度
    this.getScore = false // 是否满足计分条件 默认不满足
  }
  render() {

    // 下一个管道没通过之前不能得分
    this.getScore = false
    // 重置柱子
    this.x += this.speed
    if (this.x <= -this.w) {
      this.x = data.cw
      this.y = 50 + Math.random() * 200
      // 管道有更新 说明上一个管道成功通过 可以得分
      this.getScore = true
    }

    ctx.drawImage(this.imgUp, this.x, this.y - this.h)
    ctx.drawImage(this.imgDown, this.x, this.y + this.size)

  }
}