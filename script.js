/* Definition des constantes */

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const pricex2 = document.getElementById('pricex2');
const x2 = document.getElementById('x2');
const pricex5 = document.getElementById('pricex5');
const x5 = document.getElementById('x5');
const auto = document.getElementById('auto');
const bonusbutton = document.getElementById('bonus');
const bonustimer = document.getElementById('bonustimer');
const priceAuto = document.getElementById('price-auto');
const priceBonus = document.getElementById('price-bonus');
const perclick = document.getElementById('perclick');
const sound = document.getElementById('audio');

/* definition des variable ceci definisse le score, le cookie par click, le prix pour le bonus x2, bonus x5, auto click, et le bonus. */

let score = 0;
let step = 1;
let pricex2value = 50;
let pricex5value = 150;
let priceAutoValue = 500;
let priceBonusValue = 700;

/* defini que le score dont augmenter a chaque click */

cookie.addEventListener('click', () =>{
    score += step;
    display();
});

/* defini les nombres qui vont apparaitre comme pour le score le cookie par click, etc ... */

function display (){
    scoreDisplay.innerHTML = score;
    pricex2.innerHTML = pricex2value;
    pricex5.innerHTML = pricex5value;
    priceAuto.innerHTML = priceAutoValue;
    priceBonus.innerHTML = priceBonusValue;
    perclick.innerHTML = step;
};

/* cette fonction defini que le score doit etre superieur a la valeur du bonus pour etre activable et y ajoute sa valeur a l ecran */
/* cette fonction defini que au click du bonus x2 le cookie par click sera augmenter de 2.
On lui indique aussi qu on doit deduire du score le prix pour debloque cette augmentation */

x2.addEventListener('click', () =>{
    if (score > pricex2value){
        step += 2;
        score -= pricex2value;
        pricex2value += 20
    } 
    display();
});

/* cette fonction defini que le score doit etre superieur a la valeur du bonus pour etre activable et y ajoute sa valeur a l ecran.

Cette fonction defini que au click du bonus x5 le cookie par click sera augmenter de 5.
On lui indique aussi qu on doit deduire du score le prix pour debloque cette augmentation */

x5.addEventListener('click', () =>{
    if (score > pricex5value){
        step += 5;
        score -= pricex5value;
        pricex5value += 50
    }
    display(); 
});

/* cette fonction defini que le score doit etre superieur a la valeur du bonus pour etre activable et y ajoute sa valeur a l ecran */

auto.addEventListener('click', () =>{
    if (score > priceAutoValue){
        score -= priceAutoValue;
        priceAutoValue += 50;
        autoclick();
    }
    
    display()
});

/* cette fonction defini que le score doit etre superieur a la valeur du bonus pour etre activable et y ajoute sa valeur a l ecran */

bonusbutton.addEventListener('click', () =>{
    if (score > priceBonusValue){
        score -= priceBonusValue;
        priceBonusValue += 100;
        bonus();
    }
    display();
});

/* fonction definissant que le score doit etre augmenter de 1 toutes les 1000 secondes */

function autoclick(){
    setInterval(function(){
        score++;
        display();
    },1000)
    
}

display();

/* dans celle-ci on y ajouter un son qui se declenchera qu au click sur ce bonus, que le cookie par click est doublé pendant une durée de 30 secondes, qu un chronometre affichera le decompte, qu a ce meme click le bouton passera en rouge, ainsi que rendre le bouton indisponible pendant ce lapse de temps.

ensuite on remet le bouton pour qu'il sont clickable on remet le bonus a 0 et on lui remet sa couleur d origine ainsi que le cookie par seconde qui ne sera plus doublé*/

function bonus() {
    sound.pause();
    sound.currentTime = 0;
    sound.onloadeddata = sound.play()
    bonusbutton.setAttribute('disabled', true)
    step = step*2;
    let timer = 30;
    let timer1 = setInterval(function(){
        bonustimer.innerHTML = timer;
        timer--;
        bonusbutton.style.background = 'rgb(202, 8, 8)';
    },1000)
   setTimeout(function bonusON() {
    clearTimeout(timer1);
    bonusbutton.removeAttribute('disabled')
    bonustimer.innerHTML = "";
    bonusbutton.style.background = '#3da1d8';
    step = step / 2; 
  }, 31000);
  
    
}