class Ball {
  constructor(x = 1000, y = 0) {
    // 随机颜色
    this.color = `#${Math.random().toString(16).slice(2, 8)}`;
    this.ball = Ball.init(this.color); // 获取小球

    // 起始位置
    this.sp = {
      x: x,
      y: y,
    };

    // 结束位置
    this.ep = {
      x: this.sp.x - 300 - Math.random() * 300,
      y: Math.random() * 100 + 800,
    };

    // 当前位置
    this.cp = {
      x: this.sp.x,
      y: this.sp.y,
    };

    // 运动时间
    this.duration = 1000 * Math.random() + 2000;

    // 小球速度
    this.speed = {
      vx: (this.ep.x - this.sp.x) / this.duration,
      vy: (this.ep.y - this.sp.y) / this.duration,
    };

    // 第一次渲染 让小球出现在规定区域的任意位置
    this.render(this.sp);
  }
  // 初始化方法 静态方法 防止外部调用
  static init(color) {
    const div = document.createElement("div");
    div.className = "box";
    div.style.borderColor = color;
    document.body.appendChild(div);
    return div;
  }
  // 渲染函数
  render(p) {
    this.ball.style.left = p.x + "px";
    this.ball.style.top = p.y + "px";
  }
  // 开始运动
  start() {
    this.startTime = new Date(); // 记录开始时间
    this.animation();
  }
  animation() {
    let current = new Date();
    if (current - this.startTime > this.duration) {
      document.body.removeChild(this.ball);
      return;
    }
    // 下面就是运动描述了
    requestAnimationFrame(() => this.animation());
    // 计算当前的位置
    this.cp.x = this.sp.x + (current - this.startTime) * this.speed.vx;
    this.cp.y = this.sp.y + (current - this.startTime) * this.speed.vy;
    this.render(this.cp);
  }
}

document.onmousemove = function (e) {
  let ball = new Ball(e.clientX, e.clientY);
  ball.start();
};
