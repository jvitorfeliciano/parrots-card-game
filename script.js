function comparador() { 
	return Math.random() - 0.5; 
}
let cardNumbers=0;
let count1=0;
const imgNumber = [0,1,2,3,4,5,6];
imgNumber.sort(comparador);
const imgPairs =[];
let  imgArchive =[];
let cardFlipped = [];

function start(){
while(cardNumbers<4 || cardNumbers >14 || cardNumbers%2 !=0){

    cardNumbers = Number(prompt('Com quantas cartas vocês deseja jogar?'));
}
}

start();

function cardOrganization (){
   for(let i=0; i<cardNumbers/2; i++){
    imgArchive.push (`<div class="card cardOn" cardNumber ="C${i}"  onclick="flipCard(this)">
        <div class="face1" >
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back face2">
        <img src="./imagens/${imgNumber[i]}.gif" alt="">
        </div> `);
     imgArchive.push (`<div class="card cardOn"  onclick="flipCard(this)" cardNumber ="C${i}">
        <div class="face1" >
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back  face2">
        <img src="./imagens/${imgNumber[i]}.gif" alt="">
        </div> `); 
   }  
     imgArchive.sort(comparador);
}
cardOrganization();

function cardDistribution (){
    const addCard = document.querySelector('.contents');
    addCard.innerHTML="";
    for (let i=0; i<cardNumbers; i++){
        addCard.innerHTML = addCard.innerHTML + imgArchive[i]; 
    }
}

cardDistribution();


function flipCard(card){
    const front = card.querySelector('.face1');
    front.classList.add('front-face');
    const back = card.querySelector('.face2') ;
    back.classList.add('back-face') ;
    cardFlipped.push(card);
    count1 ++
    if (count1%2==0){
        disable();
        verification(); 
        setTimeout(enable,1000)
    }  

    setTimeout(endGame,500);
}

function remove(){
    for (let i=0; i<cardFlipped.length; i++){
        cardFlipped[i].querySelector('.front-face').classList.remove('front-face');
        cardFlipped[i].querySelector('.back-face').classList.remove('back-face');
    }
    cardFlipped.splice(0, cardFlipped.length);
}

function verification() {
    const card1 = cardFlipped[0].getAttribute('cardNumber');
    const card2 = cardFlipped[1].getAttribute('cardNumber');
    if (card1 !== card2){
        setTimeout(remove, 1000);
        } else{
            for (let i=0; i< 2; i++){
                cardFlipped[i].removeAttribute('onclick');
                cardFlipped[i].classList.remove('cardOn')
            }
            imgPairs.push(cardFlipped[0]);
            imgPairs.push(cardFlipped[1]);
            cardFlipped.splice(0, cardFlipped.length);
        }     
    }
        
function endGame (){
    if (imgPairs.length === cardNumbers){
        alert(`Você ganhou com ${count1} jogadas`);endGame();
    }
}
    
function disable(){
    const list = document.querySelectorAll('.cardOn')
    console.log(list)
    for (let i=0; i<list.length; i++){
        list[i].removeAttribute('onclick')
    }
}

function enable (){
    const list = document.querySelectorAll('.cardOn')
    console.log(list)
    for (let i=0; i<list.length; i++){
        list[i].setAttribute('onclick','flipCard(this)')
    }
}


      