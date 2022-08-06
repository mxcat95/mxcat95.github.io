// 全局变量配置 方便在多个文件重复使用

// canvas对象
const canvas = document.querySelector('#canvas')
// 绘制环境
const ctx = canvas.getContext('2d')

// canvas 尺寸
const data = {
  cw: 288,
  ch: 512,
  speed: -1
}

canvas.width = data.cw
canvas.height = data.ch


// 本局游戏分数
let currentScore = 0
// 最高分
let maxScore = 0