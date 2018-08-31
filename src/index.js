class Ampel {
  constructor(number) {
    this.number = number;
    this.doBlink('yellow');
  }

  phasen() {
    return {
      blink: {
        color: 'yellow',
        blink: true
      }
    }
  }
  
  process() {
    console.log(document.getElementById('a1'));
  }

  doBlink (color) {
    window.clearInterval(this.interval);
    const lightNumber = this.getLighNumberFromColor(color);
    
    console.log(color, this.number, lightNumber);

    this.interval = window.setInterval(() => {
      const elm = document.getElementById(`l${this.number}${lightNumber}`);
      if (elm.style.backgroundColor === color) {
        elm.style.backgroundColor = 'black';
      } else {
        elm.style.backgroundColor = color;
      }
    }, 1000);
  }

  getLighNumberFromColor(color) {
    let lightNumber;
    switch(color) {
      case 'green':
        lightNumber = 3;
        break;
      case 'yellow':
        lightNumber = 2;
        break;
      default: lightNumber = 1;
    }
    return lightNumber;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let westAmpel = new Ampel(1);
  westAmpel.doBlink('yellow');
  
  let nordAmpel = new Ampel(2);
  nordAmpel.doBlink('yellow');

  let ostAmpel = new Ampel(3);
  ostAmpel.doBlink('yellow');
  
  let suedAmpel = new Ampel(4);
  suedAmpel.doBlink('yellow');
});