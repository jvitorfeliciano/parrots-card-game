function comparador() { 
	return Math.random() - 0.5; 
}
let cardNumbers=0;
let count4=0;
const imgNumber = [0,1,2,3,4,5,6];
imgNumber.sort(comparador);
const imgArchive =[];
let cardFlipped = [];
function start(){
while(cardNumbers<4 || cardNumbers >14 || cardNumbers%2 !=0){

    cardNumbers = Number(prompt('Com quantas cartas vocês deseja jogar?'));
}
}

start();

function cardOrganization (){
    let count1 =0;
   while(count1 < cardNumbers/2){
        imgArchive.push (`<div class="card" cardNumber ="C${count1}"  onclick="flipCard(this)">
        <div class="face1" >
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back face2">
        <img src="./imagens/${imgNumber[count1]}.gif" alt="">
        </div> `)
        imgArchive.push (`<div class="card" onclick="flipCard(this)" cardNumber ="C${count1}">
        <div class="face1" >
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back  face2">
        <img src="./imagens/${imgNumber[count1]}.gif" alt="">
        </div> `)  
        count1++
     }
     imgArchive.sort(comparador);
}
cardOrganization();

function cardDistribution (){
    let count2 = 0;
    const addCard = document.querySelector('.contents');
    addCard.innerHTML="";
    while (count2< cardNumbers){
        addCard.innerHTML = addCard.innerHTML + imgArchive[count2]
        count2++
}
}
cardDistribution();

function flipCard(card){
    
    const front = card.querySelector('.face1')
    front.classList.add('front-face')
    const back = card.querySelector('.face2') 
    back.classList.add('back-face') 
    cardFlipped.push(card)
    count4 ++

    if (count4%2==0){
        verification();
        
    }  
}

function remove(){
    for (let i=0; i<cardFlipped.length; i++){
        cardFlipped[i].querySelector('.front-face').classList.remove('front-face')
        cardFlipped[i].querySelector('.back-face').classList.remove('back-face')
    }

    cardFlipped.splice(0, cardFlipped.length)
}


function verification() {
    const card1 = cardFlipped[0].getAttribute('cardNumber')
    const card2 = cardFlipped[1].getAttribute('cardNumber')
    if (card1 !== card2){
        setTimeout(remove, 1000)
        } else{
            cardFlipped.splice(0, cardFlipped.length)
        }
        
    }
        

    






      