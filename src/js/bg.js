/** @type {HTMLCanvasElement} */

function loadBackground(bgUrl, bgCanvas, completeCallback) {
  const context = bgCanvas.getContext("2d");

  let width = bgCanvas.width;
  let height = bgCanvas.height;
  let y = 0;
  let img = new Image();
  img.src = bgUrl;
  img.onload = function () {
    // context.drawImage(img, 0, 0, width, height);
    // context.drawImage(img, 0, -height, width, height);
    bgMove();
    // setInterval(() => {
        
    // }, 20);
  };
  function bgMove() {
    // console.log('111', y)
    context.save();
    context.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    context.translate(0, y);
    context.drawImage(img, 0, 0, width, height);
    context.drawImage(img, 0, -bgCanvas.height, width, height);
    y++;
    if (y > bgCanvas.height) {
      y = 0;
    }
    context.restore();
    window.requestAnimationFrame(bgMove);
  }
}

module.exports = { loadBackground };
