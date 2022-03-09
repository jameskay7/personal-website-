/*set up query Selectors that make hidden links visible in website html*/
const is250player = document.querySelector('#is250player');
const wycPlayer = document.querySelector('#wycPlayer');
const tntPlayer = document.querySelector('#tntPlayer');
const idleinterludePlayer = document.querySelector('#idlePlayer');
const pnuemoniaPlayer = document.querySelector('#pnuemoniaPlayer');
const coastalPlayer = document.querySelector('#coastalPlayer');
let TNT = document.querySelector('#TNT')
TNT.addEventListener('click', displayTNT);
TNT.addEventListener('dblclick', getridofTNT);



function playIs250(){
    if ( is250player.paused) {
        is250player.play();
    } else {
        is250player.pause();
    }
}

function playWyc(){
    if (wycPlayer.paused){
        wycPlayer.play();
    } else {
        wycPlayer.pause();
    }
}

function playTNT(){
    if (tntPlayer.paused){
        tntPlayer.play();
    } else {
        tntPlayer.pause();
    }
}

function playIdle(){
    if (idleinterludePlayer.paused){
        idleinterludePlayer.play();
    } else {
        idlePlayer.pause();
    }
}

function playPnuemonia(){
    if (pnuemoniaPlayer.paused){
       pnuemoniaPlayer.play();
    } else {
        pnuemoniaPlayer.pause();
    }
}

function playCoastal(){
    if (coastalPlayer.paused){
        coastalPlayer.play();
     } else {
        coastalPlayer.pause();
    }
}

function displayTNT(){
    document.querySelector('.tnt-lyric-holder').style.display = 'unset';
    playTNT();
}
function getridofTNT(){
    document.querySelector('.tnt-lyric-holder').style.display = 'none';
}


const IS250 = document.querySelector('#IS-250');
IS250.addEventListener('click', displayIS250);
IS250.addEventListener('dblclick', getridofIS250);

function displayIS250(){
    document.querySelector('.is250-lyric-holder').style.display = 'unset';
    playIs250();
}

function getridofIS250(){
    document.querySelector('.is250-lyric-holder').style.display = 'none';
}


const wyc = document.querySelector('#WYC');
wyc.addEventListener('click', displayWYC)
wyc.addEventListener('dblclick', getridofWYC)


function displayWYC(){
    document.querySelector('.wyc-lyric-holder').style.display = 'unset';
    playWyc();
}

function getridofWYC(){
    document.querySelector('.wyc-lyric-holder').style.display = 'none';
}

const idle = document.querySelector('#IdleInterlude')

idle.addEventListener('click', displayIdle)
idle.addEventListener('dblclick', getridofIdle)

function displayIdle(){
    document.querySelector('.idle-lyric-holder').style.display = 'unset';
    playIdle();
}

function getridofIdle(){
    document.querySelector('.idle-lyric-holder').style.display = 'none';
}

const pnuemonia = document.querySelector('#Pnuemonia')

pnuemonia.addEventListener('click', displayPnuemonia)
pnuemonia.addEventListener('dblclick', getridofPnuemonia)

function displayPnuemonia(){
    document.querySelector('.pnuemonia-lyric-holder').style.display = 'unset';
    playPnuemonia();
}

function getridofPnuemonia(){
    document.querySelector('.pnuemonia-lyric-holder').style.display = 'none';
}

const coastal = document.querySelector('#coastal')

coastal.addEventListener('click', displayCoastal)
coastal.addEventListener('dblclick', getridofCoastal)

function displayCoastal(){
    document.querySelector('.coastal-lyric-holder').style.display = 'unset';
    playCoastal();
}

function getridofCoastal(){
    document.querySelector('.coastal-lyric-holder').style.display = 'none';
}

