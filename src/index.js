class Ampel {
  constructor(id) {
    this.id = id;
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
    this.interval = window.setInterval(() => {
      const elm = document.getElementById(this.id);
      if (elm.style.backgroundColor === color) {
        elm.style.backgroundColor = 'black';
      } else {
        elm.style.backgroundColor = color;
      }
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let westAmpel = new Ampel('l12');
  westAmpel.doBlink('yellow');
  
  let nordAmpel = new Ampel('l22');
  nordAmpel.doBlink('yellow');

  let ostAmpel = new Ampel('l32');
  ostAmpel.doBlink('yellow');
  
  let suedAmpel = new Ampel('l42');
  suedAmpel.doBlink('yellow');
});