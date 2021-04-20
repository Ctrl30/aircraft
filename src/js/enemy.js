/** @type {HTMLCanvasElement} */

function CreateEmemy(width, height, enemyUrl, canvas) {
  const enemy = new Enemy(width, height, enemyUrl, canvas);
  //   console.log('enemyUrl',enemyUrl)
  return enemy;
}
function Enemy(width, height, enemyUrl, canvas) {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const context = canvas.getContext("2d");
  const x = getRandNum(0, canvasWidth - width);
  let y = 0;
  this.x = x;
  this.y = y;
  this.speed = getRandNum(3,18);
  this.canvas = canvas;
  this.width = width;
  this.height = height;
  this.img = new Image();
  this.img.src = enemyUrl;
  this.img.onload = () => {

  }
}

Enemy.prototype.draw = function(){
	var context = this.canvas.getContext("2d");
	context.drawImage(this.img, 0, 0, 
		this.width,this.height, this.x, this.y,this.width,this.height);
}

Enemy.prototype.move = function(){
	this.y += this.speed;
}

Enemy.prototype.isOutScreen = function(){
	if(this.y >= this.canvas.height){
		return true;
	}else{
		return false;
	}
}

function getRandNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

module.exports = { CreateEmemy, getRandNum };
