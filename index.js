document.getElementById("display").innerHTML = "[]"
function playQ() {
  let audio = document.getElementById("Q");
  audio.play();
  colorQ(); document.getElementById("display").innerHTML = "kick";
}  
function playW() {
  let audio = document.getElementById("W");
  audio.play();
  colorW();
  document.getElementById("display").innerHTML = "perc";
}  
function playE() {
  var audio = document.getElementById("E");
  audio.play();
  colorE();
  document.getElementById("display").innerHTML = "clap";
}  
function playA() {
  var audio = document.getElementById("A");
  audio.play();
  colorA();
  document.getElementById("display").innerHTML = "open-hat";
}  
function playS() {
  var audio = document.getElementById("S");
  audio.play();
  colorS();
  document.getElementById("display").innerHTML = "rim";
}  
function playD() {
  var audio = document.getElementById("D");
  audio.play();
  colorD();
  document.getElementById("display").innerHTML = "chord-3";
}  
function playZ() {
  var audio = document.getElementById("Z");
  audio.play();
  colorZ();
  document.getElementById("display").innerHTML = "chord-1";
}  
function playX() {
  var audio = document.getElementById("X");
  audio.play();
  colorX();
  document.getElementById("display").innerHTML = "chord-2";
}  
function playC() {
  var audio = document.getElementById("C");
  audio.play();
  colorC();
  document.getElementById("display").innerHTML = "shaker";
}  

function colorQ() { document.getElementById("kick").style.backgroundColor = "blue";
}

function colorW() { document.getElementById("perc").style.backgroundColor = "blue";
}

function colorE() { document.getElementById("clap").style.backgroundColor = "blue";
}

function colorA() { document.getElementById("open-hat").style.backgroundColor = "blue";
}

function colorS() { document.getElementById("rim").style.backgroundColor = "blue";
}

function colorD() { document.getElementById("chord-3").style.backgroundColor = "blue";
}

function colorZ() { document.getElementById("chord-1").style.backgroundColor = "blue";
}
function colorX() { document.getElementById("chord-2").style.backgroundColor = "blue";
}
function colorC() { document.getElementById("shaker").style.backgroundColor = "blue";
}

document.addEventListener('keydown', function(x) {
    switch(x.key) {
    case 'Q':
    case 'q':
      playQ();
      colorQ();
 document.getElementById("display").innerHTML = "kick";
      break;
    case 'W':
    case 'w':
      playW();
      colorW();
 document.getElementById("display").innerHTML = "perc";
      break;
    case 'E':
    case 'e':
      playE();
      colorE();
 document.getElementById("display").innerHTML = "clap";
      break;
    case 'A':
    case 'a':
      playA();
      colorA();
 document.getElementById("display").innerHTML = "open-hat";
      break;
    case 'S':
    case 's':
      playS();
      colorS();
 document.getElementById("display").innerHTML = "rim";
      break;
    case 'D': 
    case 'd':
      playD();
      colorD();
 document.getElementById("display").innerHTML = "chord-3";
      break;
    case 'Z':
    case 'z':
      playZ();
      colorZ();
 document.getElementById("display").innerHTML = "chord-1";
      break;
    case 'X':
    case 'x':
      playX();
      colorX();
 document.getElementById("display").innerHTML = "chord-2";
      break;
    case 'C':
    case 'c':
      playC();
      colorC(); document.getElementById("display").innerHTML = "shaker";
      break;
  }
});

document.addEventListener('keyup', function() {
 let keys = document.getElementsByClassName('drum-pad')
 for (let i = 0; i < keys.length; i++) {
 console.log(keys[i])
keys[i].style.backgroundColor = "LightGray";
 }
})  

const resetMouse = () => { let keys = document.getElementsByClassName('drum-pad')
 for (let i = 0; i < keys.length; i++) {
 console.log(keys[i])
keys[i].style.backgroundColor = "LightGray";
}
}

