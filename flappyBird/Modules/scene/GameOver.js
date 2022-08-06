// 第四个场景 游戏结束场景
class GameOver {
  constructor() {
    index = 3
    aud.src = musicSrc[index]
    this.bg = new Background() // 背景
    this.titleOver = new Over() // 结束标题
    this.btn = new Button() // 重新开始按钮
    this.scroeBar = new ScoreBar() // 积分面板
    this.medal = new Medal() // 奖章
    this.boxList = [this.bg, this.titleOver, this.btn, this.medal]
    this.bg.speed = 0
    this.btn.y = data.ch / 3 * 2
    this.next = false // 是否重新开始
  }
  render() {

    // 直接渲染到第二场景 重新开始游戏
    this.next = this.btn.next

    this.bg.render()
    this.titleOver.render()
    this.btn.render()
    this.scroeBar.render()
    this.medal.render()

  }
  register() {
    this.boxList.forEach(item => item.register())
  }
  unregister() {
    this.boxList.forEach(item => item.unregister())
  }
}