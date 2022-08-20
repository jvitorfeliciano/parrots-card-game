let cardNumbers=0;

function comparador() { 
	return Math.random() - 0.5; 
}
const imgNumber = [0,1,2,3,4,5,6];
imgNumber.sort(comparador);
const imgArchive =[];

function start(){
while(cardNumbers<4 || cardNumbers >14 || cardNumbers%2 !=0){

    cardNumbers = Number(prompt('Com quantas cartas vocês deseja jogar?'));
}
}

start();

function cardOrganization (){
    let count1 =0;
   while(count1 < cardNumbers/2){
        imgArchive.push (`<div class="card C${count1}"}>
        <div class="front-face face" onclick="">
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back-face face">
        <img src="./imagens/${imgNumber[count1]}.gif" alt="">
        </div> `)
        imgArchive.push (`<div class="card  C${count1}" >
        <div class="front-face face" onclick="">
            <img src="./imagens/front.png" alt="">
        </div>
        <div class="back-face face">
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

