var score_1 = 0
var score_2 = 0
var playerName_1 = "Mike"
var playerName_2 = "Dennis"
var weapons = ['rock' , 'paper', 'scissors'];

var weaponOfChoice = 0;
var weaponOfChoice_2 = 0;


while (score_1 < 3 && score_2 < 3) {

    weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    weaponOfChoice_2 = weapons[parseInt(Math.random()*weapons.length) %3];
    
    if (weaponOfChoice === weaponOfChoice_2 ){
        console.log("The game is tied!  \n")
    }

    else if (weaponOfChoice === "scissors" && weaponOfChoice_2 === "paper"){
        score_1++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_1+"  won this round with "+weaponOfChoice+" and has "+score_1+" points  \n")
    }

    else if (weaponOfChoice === "rock" && weaponOfChoice_2 === "scissors"){
        score_1++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_1+" won this round with "+weaponOfChoice+" and has "+score_1+" points  \n")
    }

    else if (weaponOfChoice === "paper" && weaponOfChoice_2 === "rock"){
        score_1++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_1+" won this round with "+weaponOfChoice+" and has "+score_1+" points  \n")
    }

    else if (weaponOfChoice === "scissors" && weaponOfChoice_2 === "rock"){
        score_2++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_2+" won this round with "+weaponOfChoice_2+" and has "+score_2+" points  \n")
    }

    else if (weaponOfChoice === "paper" && weaponOfChoice_2 === "scissors"){
        score_2++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_2+" won this round with "+weaponOfChoice_2+" and has "+score_2+" points  \n")
    }
    
    else if (weaponOfChoice === "rock" && weaponOfChoice_2 === "paper"){
        score_2++;
        console.log(playerName_1+" has "+weaponOfChoice)
        console.log(playerName_2+" has "+weaponOfChoice_2)
        console.log(playerName_2+" won this round with "+weaponOfChoice_2+" and has "+score_2+" points  \n")
    }

    
}

console.log("The game is over!")

if (score_1 === 3) {
    console.log(playerName_1+" won!")
     
}

else if (score_2 === 3) {
    console.log(playerName_2+" won!")
 }