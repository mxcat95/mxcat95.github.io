// 得分面板
class ScoreBar extends Basic {
  constructor() {
    super()
    this.img = new Image()
    this.img.src = './FlappyBird/score_panel.png'
    this.w = 238
    this.h = 126
    this.x = (data.cw - this.w) / 2
    this.y = data.ch / 3

  }

  render() {
    ctx.drawImage(this.img, this.x, this.y)
    ctx.fillStyle = 'white'
    ctx.font = 'normal normal 20px Verdana'

    // 当前分数
    this.showScore(currentScore, 224, 224)
    // 最高分
    this.showScore(maxScore, 224, 264)
  }
  showScore(score, x, y) {
    if (score >= 0 && score < 10) {
      ctx.fillText(`${score}`, x, y)
    }

    if (score >= 10 && score < 100) {
      ctx.fillText(`${score}`, x - 18, y)
    }

    if (score >= 100 && score < 1000) {
      ctx.fillText(`${score}`, x - 28, y)
    }

    if (score >= 1000 && score < 10000) {
      ctx.fillText(`${score}`, x - 38, y)
    }
    if (score > 10000) {
      ctx.font = 'normal normal 12px Verdana'
      ctx.fillText(`你真是够闲的！`, x - 68, y)
    }
  }

}