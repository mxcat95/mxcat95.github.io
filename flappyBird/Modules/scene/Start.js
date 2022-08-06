// 游戏开始的画面 背景 开始按钮 小鸟图标
class Start {
  constructor() {
    this.bg = new Background() // 背景
    this.logo = new Logo() // logo
    this.btn = new Button() // 按钮
    this.boxList = [this.bg, this.logo, this.btn] // 注册事件列表
    this.next = false // 表示当前场景没有结束
    this.register()
  }
  // 场景渲染
  render() {

    // 渲染之前需要状态变更
    this.next = this.btn.next

    this.bg.render() // 背景渲染
    this.logo.render() // logo渲染
    this.btn.render() // 按钮渲染
  }
  // 注册事件
  register() {
    this.boxList.forEach(item => item.register())
  }
  // 注销事件
  unregister() {
    this.boxList.forEach(item => item.unregister())
  }
}