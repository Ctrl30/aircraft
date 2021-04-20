import bgImgSrc from "../img/bg.png";
import aircraftImgSrc from "../img/aircraft.png";
import bulletImgSrc from "../img/bullet2.png";
import { loadBackground } from "./bg";
import { createAircraft } from "./aircraft";
import { CreateBullet } from "./bullet";
/** @type {HTMLCanvasElement} */

window.onload = () => {
  // 背景
  const bgCanvas = document.getElementById("bgCanvas");
  loadBackground(bgImgSrc, bgCanvas);
  // 飞机
  const aircraftCanvas = document.getElementById("aircraftCanvas");
  //   const aircraftContext = aircraftCanvas.getContext("2d");
  const aircraft = createAircraft(66, 82, aircraftImgSrc, aircraftCanvas);

  //子弹
  const bulletCanvas = document.getElementById("bulletCanvas");
  const bulletContext = bulletCanvas.getContext("2d");
  var bulletArray = new Array();
  // 发子弹
  setInterval(function () {
    // 创建子弹
    const bullet = CreateBullet(bulletImgSrc, aircraft, bulletCanvas);
    // 将每次创建出来的子弹,存入到数组中
    bulletArray.push(bullet);
  }, 200);
  // 子弹移动
  setInterval(function () {
    bulletContext.clearRect(0, 0, 320, 568);
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
      //    for(var j = 0; j < enemyArray.length; j++){
      //        if(isObjInsect(bulletArray[i],enemyArray[j])){
      //            enemyArray[j].crash();
      //            enemyArray.splice(j,1);
      //            j--;
      //            bulletArray.splice(i,1);
      //            i--;
      //            flag = 1;
      //            break;
      //        }
      //    }
      //    if(flag == 1){
      //        continue;
      //    }
    }
  }, 30);
};
