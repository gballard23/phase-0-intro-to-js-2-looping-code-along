// Code your solutions in this file
function writeCards(stringName, eventName) {
    let thankYouCard = [];
    for(let i = 0; i < stringName.length; i++){
        thankYouCard.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCard;
}
writeCards(["Dennis", "Jalon", "Gerren"], "birthday");

function countDown() {
    let i = 10
    while (i>=0){
        console.log(i);
        i-=1;
    }
}