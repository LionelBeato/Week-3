//hands array


var hands = ['rock', 'paper', 'scissors']


//function that returns hand

function gethand(){
    x = parseInt(Math.random()*10)%3;
    return hands[x]
}

//player object with function

var player1 = {
    name:"Nana",
    score: 0,
 
}

var player2 = {
    name: "Popo",
    score: 0,

}


// function for the round and hand picking :DDD
// this function determines the winner for that specific round

function playRound(){

    player1.playedHand = gethand();
    player2.playedHand = gethand();

    console.log(player1.name+" played "+player1.playedHand+" and "+player2.name+" played "+player2.playedHand)

    if (player1.playedHand == player2.playedHand){
    console.log ("The round tied!");
    }
    else if (player1.playedHand == "rock" && player2.playedHand == "scissors") {

        player1.score++
        console.log(player1.name+" wins and has "+player1.score)
    }
    else if (player1.playedHand == 'scissors' && player2.playedHand == 'paper') {


        player1.score++
        console.log(player1.name+" wins and has "+player1.score)
    }

    else if (player1.playedHand == 'paper' && player2.playedHand == 'rock') {

        player1.score++
        console.log(player1.name+" wins and has "+player1.score)
    }

    else if (player2.playedHand == 'scissors' && player1.playedHand == 'paper') {

        player2.score++
        console.log(player2.name+" wins and has "+player2.score)
    }

    else if (player2.playedHand == 'rock' && player1.playedHand =='scissors') {

        player2.score++
        console.log(player2.name+" wins and has "+player2.score)
    }

    else if (player2.playedHand == 'paper' && player1.playedHand =='rock') {

        player2.score++
        console.log(player2.name+" wins and has "+player2.score);
    }
    }

    //function that actually plays the game :D
    //I didn't add the players as arguments cuz I couldn't get it to work with my established work :DDD
    //this function runs until the inputed limit is reached and determines the winner

    function playGame(playUntil){

     
        roundCount = 1;
        while (player1.score < playUntil && player2.score < playUntil) {
            console.log("round "+roundCount)
            playRound();
            roundCount++;

        }    

        if (player1.score > player2.score){
            console.log(player1.name+" wins the game!")
        }
        else if (player2.score > player1.score) {
            console.log(player2.name+" wins the game!")
        }

    }

 //logs the game to console with inputted win condition

playGame(5)
