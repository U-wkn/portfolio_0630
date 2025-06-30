const intro = document.getElementById('intro');
const clickGuide = document.getElementById('click-guide');

// Zdog Illustration
const illo = new Zdog.Illustration({
  element: '#canvas',
  dragRotate: false,
  zoom: 3.5,
});

const boxSize = 16;
const offset = boxSize;

const colors = [
  ['#fff', '#fff', '#fff'],
  ['#888', '#c00', '#888'],
  ['#888', '#fff', '#888'],
];

new Zdog.RoundedRect({
  addTo: illo,
  width: boxSize * 3 + 8,
  height: boxSize * 3 + 8,
  stroke: 6,
  color: '#000',
  cornerRadius: 4,
  fill: false,
});

for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 3; x++) {
    new Zdog.Rect({
      addTo: illo,
      width: boxSize,
      height: boxSize,
      stroke: 2,
      color: '#000',
      fill: true,
      translate: {
        x: (x - 1) * offset,
        y: (y - 1) * offset,
      },
    });

    new Zdog.Rect({
      addTo: illo,
      width: boxSize - 2,
      height: boxSize - 2,
      stroke: 0,
      color: colors[y][x],
      fill: true,
      translate: {
        x: (x - 1) * offset,
        y: (y - 1) * offset,
        z: 1,
      },
    });
  }
}

function animate() {
  illo.rotate.y += 0.01;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();

let clickable = false;

setTimeout(() => {
  clickable = true;
  clickGuide.style.display = 'block';
}, 3000);

intro.addEventListener('click', () => {
  if (!clickable) return;
  intro.classList.add('fade-out');
  intro.addEventListener('transitionend', () => {
    intro.style.display = 'none';
  }, { once: true });
});


// ハンバーガーメニューのトグル
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const nav = document.querySelector('.test-nav');
  nav.classList.toggle('open'); // メニューを開閉

  // ボタンのアニメーションも追加
  this.classList.toggle('open');
});

