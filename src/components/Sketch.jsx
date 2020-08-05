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
        
        p.perspective(90, w / h, 0.1, 1000);
  
        let count = 4;
        let size = Math.min(w, h);
        for (let i = 0; i < count; i++) {
          let x = Math.sin((i / count) * Math.PI * 2 + Math.PI / 4) * w / 2;
          let y = Math.cos((i / count) * Math.PI * 2 + Math.PI / 4) * h / 2;
  
          boxes.push(new Box(
            p,
            x, y, 0,
            size / 6,
            size / 6,
            size / 6,
            w, h,
          ));
        }
      }
  
      p.draw = () => {
        p.background(0, 0, 0, 0);
        
        p.lights();
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
    p.specularMaterial(255, 0, 76);
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