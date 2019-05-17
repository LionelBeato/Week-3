var phone={
    color:"blue",
    screenSize:"5 inch",
    changeSize: function(){
        this.screenSize="10 inch";
        return this.screenSize;
    }
}

console.log(phone.changeSize())