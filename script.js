const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
let isSpinning = false;

spinBtn.addEventListener('click', () => {
  if (isSpinning) return;

  isSpinning = true;
  spinBtn.disabled = true;
  result.textContent = '';


  const randomSpins = 3; // 
  const totalDeg = randomSpins * 360; // 60度是"去"的中心位置

  // 关键修复：先移除过渡效果并重置旋转状态
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';

  // 强制浏览器重绘
  void wheel.offsetWidth;

  // 再应用过渡效果和旋转动画
  wheel.style.transition = 'transform 3s cubic-bezier(0.1, 0.7, 0.1, 1)';
  wheel.style.transform = `rotate(${totalDeg}deg)`;

  // 旋转结束后显示结果
  setTimeout(() => {
    isSpinning = false;
    spinBtn.disabled = false;
    result.textContent = '去！💪 早八人早八魂！';
  }, 3000);
});