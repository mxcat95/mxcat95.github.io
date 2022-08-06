// 小鸟模块
class Bird extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.srcLists = ['./FlappyBird/bird0_0.png', './FlappyBird/bird0_1.png', './FlappyBird/bird0_2.png']
    this.step = 0
    this.img.src = this.srcLists[this.step]
    this.w = 48
    this.h = 48
    this.x = 50
    this.y = 100
    this.vy = 1 // 跳跃高度
    this.g = 0.07 // 重力加速度

    // 节流操作
    this.registerFn = throttle(() => this.jump(), 200)
    // this.dead = false // 小鸟是否阵亡
    // setTimeout(() => this.dead = true, 3000)

  }
  render() {
    ctx.drawImage(this.img, this.x, this.y)
    this.update()
  }

  // 更新鸟的飞行状态
  update() {
    // 切换图片 煽动翅膀
    this.step++
    let s = Math.floor(this.step / 3) % 3
    this.img.src = this.srcLists[s]

    // 让小鸟做自由落体
    this.y += this.vy
    // 下边界条件
    if (this.y >= data.ch - 150) {
      this.y = data.ch - 150
      this.vy = 0
    }

    // 上边界条件
    if (this.y <= -10) {
      this.y = -10
      this.vy = 0
    }

    // 重力加速度 增加下落速度
    this.vy += this.g

  }
  // 跳跃
  jump() {
    this.vy = -3
  }
  // 碰撞检测
  checkCollide(pipe) {
    // 鸟的大小位置状态
    let birdSize = {
      x: this.x + 10,
      y: this.y + 10,
      w: this.w - 20,
      h: this.h - 20
    }
    // 管道信息
    let pipeInfo = {
      x: pipe.x,
      w: pipe.w,
      y: pipe.y,
      size: pipe.size
    }
    // 鸟在管道的左右边界判断
    if (birdSize.x + birdSize.w < pipeInfo.x ||
      birdSize.x > pipeInfo.x + pipeInfo.w) {
      return false
    }
    // 鸟在柱子周围 判断 y 方向
    if (birdSize.y > pipeInfo.y &&
      birdSize.y + birdSize.h < pipeInfo.y + pipeInfo.size) {
      return false
    }

    return true

  }
  // 事件注册
  register() {
    canvas.addEventListener('click', this.registerFn)
  }
  unregister() {
    canvas.removeEventListener('click', this.registerFn)
  }


}