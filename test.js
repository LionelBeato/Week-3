var billAmount = 100

function gratuity(){
    return billAmount *0.2
    
}

console.log("$"+gratuity())

function totalWithGrat(){
    return billAmount + gratuity()
}

console.log("you're total including gratuity: $"+totalWithGrat())

