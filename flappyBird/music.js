// 音乐
const aud = document.querySelector('#aud')
const box = document.querySelector('#box')
const bl = document.querySelector('.bl')
const br = document.querySelector('.br')


// 音乐地址
const musicSrc = [
  './audios/flappybird.mp3',
  './audios/ready.mp3',
  './audios/gaming.mp3',
  './audios/gameOver.mp3'
]

// 默认第一首音乐
let index = 0

aud.style.display = 'none'

aud.src = musicSrc[index]
// 监听事件
window.onload = () => {
  // 控制开始按钮
  bl.addEventListener('click', () => {
    box.style.display = 'none'
    canvas.style.display = 'block'
    aud.play()
  })

  // 结束按钮
  br.addEventListener('click', () => {
    window.close()
  })
}