
import React, { Component } from "react";

import "./js/index.js";

class Aircraft extends Component {
  render() {
    return (
      <div className="container">
        <canvas id="bgCanvas" width={320} height={568}></canvas>
        <canvas id="aircraftCanvas" width={320} height={568}></canvas>
        <canvas id="bulletCanvas" width={320} height={568}></canvas>
        <canvas id="enemyCanvas" width={320} height={568}></canvas>
      </div>
    );
  }
}
export default Aircraft;
