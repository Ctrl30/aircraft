/** @type {HTMLCanvasElement} */
function CreateAircraft(width, height, imgUrl, canvas) {
  console.log("aircraftCanvas", canvas);
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  let x = canvasWidth / 2 - width / 2; // x轴
  let y = canvasHeight - height - 20; // y轴
//   console.log("x", x);
//   console.log("y", y);
  const aircraft = new Aircraft(x, y, width, height, imgUrl, canvas);
  document.onkeydown = function (e) {
    const event = e || window.event;
    switch (event.keyCode) {
      case 37: {
        // 左
        aircraft.left = true;
        break;
      }
      case 38: {
        // 上
        aircraft.up = true;
        break;
      }
      case 39: {
        // 右
        aircraft.right = true;
        break;
      }
      case 40: {
        // 下
        aircraft.down = true;
        break;
      }
      default:
        break;
    }
  };
  document.onkeyup = function (e) {
    const event = e || window.event;
    switch (event.keyCode) {
      case 37: {
        // 左
        aircraft.left = false;
        break;
      }
      case 38: {
        // 上
        aircraft.up = false;
        break;
      }
      case 39: {
        // 右
        aircraft.right = false;
        break;
      }
      case 40: {
        // 下
        aircraft.down = false;
        break;
      }
      default:
        break;
    }
  };

  setInterval(() => {
    if (aircraft.left) aircraft.x -= 2;
    if (aircraft.right) aircraft.x += 2;
    if (aircraft.up) aircraft.y -= 2;
    if (aircraft.down) aircraft.y += 2;
    //   callback(canvas)
  }, 10);
  return aircraft;
}
// 飞机构造函数
function Aircraft(x, y, width, height, imgUrl, canvas) {
  const context = canvas.getContext("2d");
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = imgUrl;
  this.img.onload = () => {
    // callback(this);
    this.draw();
    setInterval(() => {
      context.clearRect(0, 0, 320, 568);
      this.draw(context);
    }, 10);
    // console.log("loaded");
  };
  this.draw = () => {
    // let context = canvas.getContext("2d");
    context.drawImage(
      this.img,
      0,
      0,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}
module.exports = { CreateAircraft };
