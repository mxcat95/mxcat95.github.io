// 准备场景
class GetReady extends Basic {
  constructor() {
    super();
    this.img = new Image();
    this.img.src = "./FlappyBird/text_ready.png"; // logo图片
    this.w = 200;
  }
  render() {
    ctx.drawImage(this.img, (data.cw - this.w) / 2, 100); // 渲染logo图片
  }
}
