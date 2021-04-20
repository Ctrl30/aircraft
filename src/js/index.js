import bgImgSrc from "../img/bg.png";
import aircraftImgSrc from "../img/aircraft.png";
import bulletImgSrc from "../img/bullet2.png";
import enemyImgSrc1 from "../img/enemy1.png";
import enemyImgSrc2 from "../img/enemy2.png";
import enemyImgSrc3 from "../img/enemy3.png";
import { loadBackground } from "./bg";
import { CreateAircraft } from "./aircraft";
import { CreateBullet } from "./bullet";
import { CreateEmemy, getRandNum } from "./enemy";
/** @type {HTMLCanvasElement} */

window.onload = () => {
  // 背景
  const bgCanvas = document.getElementById("bgCanvas");
  loadBackground(bgImgSrc, bgCanvas);
  // 飞机
  const aircraftCanvas = document.getElementById("aircraftCanvas");
  const aircraft = CreateAircraft(66, 82, aircraftImgSrc, aircraftCanvas);

  //子弹
  const bulletCanvas = document.getElementById("bulletCanvas");
  const bullet = bulletCanvas.getContext("2d");

  // 敌机
  const enemyCanvas = document.getElementById("enemyCanvas");
  const enemy = enemyCanvas.getContext("2d");

  const enemyArray = new Array();
  var bulletArray = new Array();
  let time1;
  let time2;
  let time3;

 time1 = setInterval(() => {
    let number = getRandNum(1, 3); // 随机的敌机
    let enemyAirCraft;
    switch (number) {
      case 1:
        enemyAirCraft = CreateEmemy(38, 34, enemyImgSrc1, enemyCanvas);
        break;
      case 2:
        enemyAirCraft = CreateEmemy(110, 164, enemyImgSrc2, enemyCanvas);
        break;
      case 3:
        enemyAirCraft = CreateEmemy(46, 64, enemyImgSrc3, enemyCanvas);
        break;

      default:
        break;
    }
    enemyAirCraft.draw();
    enemyArray.push(enemyAirCraft);
  }, 1000);

  // 敌机运动
  let timer = setInterval(() => {
    enemy.clearRect(0, 0, enemyCanvas.width, enemyCanvas.height);
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i]?.move();
      enemyArray[i]?.draw();
      // 判断是否出去
      if (enemyArray[i].isOutScreen()) {
        enemyArray.splice(i, 1);
      }
      //   判断是否相撞
      if (isCrash(enemyArray[i], aircraft)) {
        clearInterval(timer);
        clearInterval(time1);
        clearInterval(time2);
        clearInterval(time3);
        alert("GG");
      }
    }
  }, 50);

  // 发子弹
  time2 =  setInterval(function () {
    // 创建子弹
    const bullet = CreateBullet(bulletImgSrc, aircraft, bulletCanvas);
    // 将每次创建出来的子弹,存入到数组中
    bulletArray.push(bullet);
  }, 200);
  // 子弹移动
  time3 =setInterval(function () {
    bullet.clearRect(0, 0, 320, 568);
    for (var i = 0; i < bulletArray.length; i++) {
      // 判断: 当子弹超出屏幕之后,将超出的子弹在数组中干掉
      if (bulletArray[i].isOutScreen()) {
        bulletArray.splice(i, 1);
      }
      //   if (bulletArray[i]) { //防止越界
      bulletArray[i]?.move();
      bulletArray[i]?.draw();
      //   }

      var flag = 0; //用于控制是否continue
         for(var j = 0; j < enemyArray.length; j++){
             if(isCrash(bulletArray[i],enemyArray[j])){
                 enemyArray.splice(j,1);
                 j--;
                 bulletArray.splice(i,1);
                 i--;
                 flag = 1;
                 break;
             }
         }
         if(flag == 1){
             continue;
         }
    }
  }, 30);
  function isHit(enemy, aircraft) {
      
  }
  function isCrash(enemy, aircraft) {
    const minX1 = enemy.x;
    const minY1 = enemy.y;
    const maxX1 = enemy.x + enemy.width;
    const maxY1 = enemy.y + enemy.height;

    const minX2 = aircraft.x;
    const minY2 = aircraft.y;
    const maxX2 = aircraft.x + aircraft.width;
    const maxY2 = aircraft.y + aircraft.height;

    const minX = Math.max(minX1, minX2);
    const minY = Math.max(minY1, minY2);
    const maxX = Math.min(maxX1, maxX2);
    const maxY = Math.min(maxY1, maxY2);
    if (minX < maxX && minY < maxY) {
      return true;
    }
    return false;
  }
};
