import React, { Component } from 'react'

export default class Save extends Component {
    componentDidMount(){
        const canvas =document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = "cyan";
        ctx.font = '24px STheiti, SimHei';
        ctx.save();
        ctx.fillRect(100, 100, 150, 150);
        ctx.fillText('1',100, 100)
        ctx.closePath();
        
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.save();
        ctx.fillText('2',300, 100)
        ctx.fillRect(300, 100, 150, 150);
        ctx.closePath();
      
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.save();
        ctx.fillText('3',100, 350)
        ctx.fillRect(100,350,150,150)
        ctx.closePath();
      
        ctx.beginPath();
        ctx.restore();
        ctx.fillText('4',300, 350)
        ctx.fillRect(300,350,150,150)
        ctx.closePath();
      
        ctx.beginPath();
        ctx.restore();
        ctx.fillText('5',100, 550)
        ctx.fillRect(100,550,150,150)
        ctx.closePath();
      
        ctx.beginPath();
        ctx.restore();
        ctx.fillText('6',300, 550)
        ctx.fillRect(300,550,150,150)
        ctx.closePath();
    }
    render() {
        return (
            <div>
                <canvas id="canvas" width="800" height="1200" />
            </div>
        )
    }
}
