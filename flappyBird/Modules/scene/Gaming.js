// 游戏核心场景
class Gaming {
  constructor() {
    index = 2
    aud.src = musicSrc[index]
    this.bg = new Background() // 背景
    this.land = new Land() // 陆地
    this.bird = new Bird() // 小鸟
    this.pipe = new Pipe() // 管道
    this.score = new Score() // 计分
    this.next = false
    this.scoreCount = -1
    this.boxList = [this.bg, this.land, this.bird, this.pipe, this.score]


  }
  render() {

    if (this.scoreCount >= 5) {
      this.pipe.size = 180 // 增加难度
    }

    if (this.scoreCount >= 10) {
      this.pipe.size = 150
      this.bg.img.src = './FlappyBird/bg_night.png'

    }
    if (this.scoreCount >= 25) {
      this.bg.speed = -1.5 // 加快速度
      this.land.speed = -1.5
      this.pipe.speed = -1.5
    }

    this.bg.render()
    this.pipe.render()
    this.land.render()
    this.bird.render()

    // 统计得分
    if (this.pipe.getScore) {
      this.scoreCount++
    }
    // 显示得分
    this.score.show(this.scoreCount)

    // 单独计算 bird 和 pipe 的位置关系
    let result = this.bird.checkCollide(this.pipe) // true：碰撞 false: 安全
    if (result) {
      this.next = true

      currentScore = this.scoreCount // 将得分保留下来
      // 保存最高分
      if (this.scoreCount > maxScore) {
        maxScore = this.scoreCount
      }
    }
  }
  register() {
    this.boxList.forEach(item => item.register())
  }
  unregister() {
    this.boxList.forEach(item => item.unregister())
  }
}