var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 var price = Math.random(100);
 var itemName = obj["itemName"] = item;
 var itemPrice = obj["itemPrice"] = Math.floor(price);
 var newObj = { itemName, itemPrice };
 cart.push(newObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
