let myImage = document.querySelector('img');

myImage.onClick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/safari-logo.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuilllez entrer votre nom.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('nom', myName);
    myHeading.innerHTML = "Mozilla c'est cool, " + myName;
  }
}

if(!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.innerHTML = "Mozilla c'est cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*
mes petits tests

let mavariable;
mavariable = 'zozo';
mavariable;
*/

// commentaire sur une seule ligne

/*
let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}
*/
