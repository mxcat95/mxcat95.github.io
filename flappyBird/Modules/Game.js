// 游戏主体模块 用于控制游戏的初始化 开始和结束等动作
class Game {
  constructor() {}
  // 开始游戏
  start() {
    this.scene = new Scene() // 场景初始化
    this.render() // 场景渲染
  }
  // 渲染场景
  render() {
    // 调用渲染关键帧
    if (!this.scene.gameOver) {
      requestAnimationFrame(() => this.render())
      ctx.clearRect(0, 0, canvas.width, canvas.height) // 清除画布
      this.scene.render()
    }
  }
}