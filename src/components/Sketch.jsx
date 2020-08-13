import React from 'react';
import p5 from 'p5';

class Sketch extends React.Component {
  constructor(props) {
    super(props);

    this.reference = React.createRef();
    this.sketch = (p) => {
      const w = document.documentElement.style.getPropertyValue('--vw').replace('px', '') * 100;
      const h = document.documentElement.style.getPropertyValue('--vh').replace('px', '') * 100;
  
      let boxes = []; 
    
      p.setup = () => {
        p.createCanvas(w, h, p.WEBGL);
        p.angleMode(p.DEGREES);
        
        p.perspective(60, w / h, 0.1, 2500);
  
        let count = 4;
        let size = Math.min(w, h);
        for (let i = 0; i < count; i++) {
          let x = Math.sin((i / count) * Math.PI * 2 + Math.PI / 4) * w / 3;
          let y = Math.cos((i / count) * Math.PI * 2 + Math.PI / 4) * h / 3;
  
          boxes.push(new Box(
            p,
            x, y, 0,
            size / 10,
            size / 10,
            size / 10,
            w, h,
          ));
        }
      }
  
      p.draw = () => {
        p.background(0, 0, 0, 0);
        
        p.lights();
        // p.ambientLight(128, 128, 128);
        // p.directionalLight(255, 0, 76, 0, 1, 0);
        // p.directionalLight(255, 217, 0, 0, -1, 0);
        // p.directionalLight(64, 64, 64, 0, 0, -1);
        for (let box of boxes) {
          box.render(p);
        }
      }
    }
  }

  componentDidMount() {
    this.p5 = new p5(this.sketch, this.reference.current)
  }

  render() {
    return (
      <div className="sketch" ref={this.reference}></div>
    )
  }
}

class Box {
  constructor(p, x, y, z, w, h, d, sw, sh) {
    this.pos = p.createVector(x, y, z);
    this.w = w;
    this.h = h;
    this.d = d;
    this.sw = sw;
    this.sh = sh;
  }

  render(p) {
    let x = p.frameCount / 5;

    p.noStroke();
    // p.specularMaterial(255, 255, 255);
    p.ambientMaterial(255, 0, 76);
    // p.normalMaterial();
    // if (this.pos.y > 0) {
    //   p.ambientMaterial(255, 217, 0);
    // } else {
    //   p.ambientMaterial(255, 0, 76);
    // }
    p.push();
      p.translate(this.pos);
      p.rotateX(p.noise(this.pos.x * 1000 + x / 100) * 1000);
      p.rotateY(p.noise(this.pos.y * 1000 + x / 100) * 1000);
      p.rotateZ(p.noise(this.pos.z * 1000 + x / 100) * 1000);
      p.box(this.w, this.h, this.d);
    p.pop();
  }
}

export default Sketch