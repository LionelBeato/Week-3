var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

var addGroc = list.push('fruit loops');

list[4] = 'fair trade coffee';
list[2] = 'rice';
list[3] = 'beans';

var cart = [];
var poppedItems = list.pop();
var shiftedItems = list.shift();

cart.push(poppedItems, shiftedItems);

console.log(list)
console.log(cart)

//something that takes items from one array and puts it into another

while (list.length > 0){
    var autoItems = list.shift();
    cart.push(autoItems);
    console.log('\n', cart)
}

//prints out cart alphabetically... and backwards

console.log(cart.sort().reverse().join(", "))

