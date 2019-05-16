//hands array


var hands = ['rock', 'paper', 'scissors']

//function that returns hand

function gethand(){
    x = parseInt(Math.random()*10)%3;
    return hands[x]
}

//player object with function

 var player1 = {
    name:'Mike',
    playedHand: gethand(),
 
}

var player2 = {
    name: 'Jeremy',
    playedHand: gethand()

}



//round function

function playRound(){
    if (player1.playedHand === player2.playedHand){
    return ("The round tied!");
    }
    else if (player1.playedHand['rock'] && player2.playedHand['scissors']) {
        return("wins!")
    }
    else {

    }
}

console.log(player1.playedHand,player2.playedHand);
console.log (playRound());