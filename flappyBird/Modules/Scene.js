// 游戏场景类 负责场景切换
class Scene {
  constructor() {
    this.status = 0; // 根据游戏状态来渲染场景
    this.gameOver = false; // 是否结束游戏
    this.sceneArr = [Start, Ready, Gaming, GameOver]; // 不同的游戏状态
    this.stage = new this.sceneArr[this.status](); // 初始化第一个场景
    this.stage.register();
  }
  // 场景渲染
  render() {
    // 重新开始
    if (this.status === 3) {
      this.status = 0;
    }

    // 判断场景状态的变化
    if (this.stage.next) {
      // 先注销当前场景中所有事件
      this.stage.unregister();
      this.status++;
      this.stage = new this.sceneArr[this.status]();
      this.stage.register(); // 重新注册新的事件
    }
    // 渲染场景
    this.stage.render();

    // // 游戏结束就不再渲染了
    // if (this.status === 3) {
    //   setTimeout(() => (this.gameOver = true), 10);
    // }
  }
}
