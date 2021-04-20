/** @type {HTMLCanvasElement} */

function CreateBullet(bulletUrl, aricraft, bulletCanvas) {
  // 创建子弹宽高
  const bWidth = 48;
  const bHeight = 14;
  // console.log('aricraft',aricraft)
  var x = aricraft.x + aricraft.width/2 - bWidth / 2 ;
  var y = aricraft.y - bHeight;

  // 创建子弹的构造函数
  var bullet = new Bullet(x, y, bWidth, bHeight, bulletUrl, bulletCanvas);

  return bullet;
}
// 创建子弹的构造函数
function Bullet(x, y, w, h, imageURL, bulletCanvas) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.canvas = bulletCanvas;
  var image = new Image();
  image.src = imageURL;
  this.Image = image;
}
// 画子弹
Bullet.prototype.draw = function () {
  var context = this.canvas.getContext("2d");
  context.drawImage(this.Image, this.x, this.y, this.w, this.h);
};

// 子弹移动的方法
Bullet.prototype.move = function () {
  this.y -= 10;
};

// 判断是否离开屏幕
Bullet.prototype.isOutScreen = function () {
  if (this.y <= -this.h) {
    return true;
  } else {
    return false;
  }
};

module.exports = { CreateBullet };
