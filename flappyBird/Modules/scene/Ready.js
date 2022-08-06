// 游戏准备场景
class Ready {
  constructor() {
    index = 1
    aud.src = musicSrc[index]
    this.bg = new Background() // 背景
    this.ready = new GetReady() // 提示标语
    this.countDown = new CountDown() // 倒计时
    this.boxList = [this.bg, this.ready, this.countDown]
    this.next = false // 表示当前场景没有结束

    this.timer = null

    this.timer = setInterval(() => {

      this.countDown.count++
      this.countDown.img.src = this.countDown.src[this.countDown.count]
    }, 1600)

    // 3s 后转场
    setTimeout(() => {
      clearInterval(this.timer)
      this.timer = null
      this.next = true
    }, 4700)

  }
  // 场景渲染
  render() {
    this.bg.render() // 背景渲染
    this.ready.render() // 提示语渲染
    this.countDown.render() // 倒计时渲染
  }
  register() {
    this.boxList.forEach(item => item.register())
  }
  unregister() {
    this.boxList.forEach(item => item.unregister())
  }

}