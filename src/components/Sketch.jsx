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
  
        let count = 4;
        let size = Math.min(w, h);
        for (let i = 0; i < count; i++) {
          let x = Math.sin((i / count) * Math.PI * 2 + Math.PI / 4) * w / 2;
          let y = Math.cos((i / count) * Math.PI * 2 + Math.PI / 4) * h / 2;
  
          boxes.push(new Box(
            p,
            x, y, -size / 2,
            size / 6,
            size / 6,
            size / 6,
            Math.random() * 360,
            Math.random() * 360,
            Math.random() * 360
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
  constructor(p, x, y, z, w, h, d, rx, ry) {
    this.pos = p.createVector(x, y, z);
    this.w = w;
    this.h = h;
    this.d = d;
    this.rx = rx;
    this.ry = ry;
  }

  render(p) {
    let x = p.frameCount / 5;

    p.noStroke();
    p.specularMaterial(255, 0, 76);
    p.push();
      p.translate(this.pos);
      p.rotateX(this.rx + x);
      p.rotateY(this.ry + x);
      p.box(this.w, this.h, this.d);
    p.pop();
  }
}

export default Sketch