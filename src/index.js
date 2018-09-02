

let ampelCtrl = {
  phaseCounter: 0,

  timer: undefined,

  phasen: [
    {
      name: 'off',
      duration: 30,
      west: {
        blink: true,
        color: 'yellow'
      },
      nord: {
        blink: true,
        color: 'yellow'
      },
      ost: {
        blink: true,
        color: 'yellow'
      },
      sued: {
        blink: true,
        color: 'yellow'
      }
    },
    
    {
      name: 'beforeNSGo',
      duration: 10,
      west: {

      },
      nord: {
        color: ['rot', 'gelb'],
      },
      ost: {},
      sued: {},
    },

    {
      name: 'beforeWOGo',
      duration: 10,
    },
    
    {
      name: 'NSGo',
      duration: 10,
    },

    {
      name: 'WOGo',
      duration: 10,
    }
  ],

  process: () => {
    const actPhase = ampelCtrl.phasen[ampelCtrl.phaseCounter];
    console.log(actPhase);
    
    timer = setTimeout(() => {
      ampelCtrl.phaseCounter++;
      if (ampelCtrl.phaseCounter > ampelCtrl.phasen.length - 1) {
        ampelCtrl.phaseCounter = 0;
      }
      ampelCtrl.process();
    }, actPhase.duration * 100);
  },

  exec() {
    console.log(phase);
  },

  getLightNumberFromColor: color => {
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

class Ampel {
  constructor(number) {
    this.number = number;
    //this.doBlink('yellow');
    //this.phaseCounter = 0;
  }

  doBlink (colors) {
    window.clearInterval(this.interval);
    
    this.interval = window.setInterval(() => {
      colors.map(color => {
        const lightNumber = ampelCtrl.getLightNumberFromColor(color);
        const elm = document.getElementById(`l${this.number}${lightNumber}`);
        if (elm.style.backgroundColor === color) {
          elm.style.backgroundColor = 'black';
        } else {
          elm.style.backgroundColor = color;
        }
      });
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ampelCtrl.process();

  //let westAmpel = new Ampel(1);
  //westAmpel.doBlink(['yellow']);
  //
  //let nordAmpel = new Ampel(2);
  //nordAmpel.doBlink(['red']);
//
  //let ostAmpel = new Ampel(3);
  //ostAmpel.doBlink(['yellow']);
  //
  //let suedAmpel = new Ampel(4);
  //suedAmpel.doBlink(['green']);
});