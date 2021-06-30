var hero =  document.querySelector("#hero");

function forward () {
    var temp = hero.scr;
    hero.src = hero.getAttribute('data-alt-src')
    hero.setAttribute('data-alt-src', temp);
    console.log(temp);
}



//second part which you press on buy buttons and the 
//shopping cart number goes up
//item-count is used for the 0 number of shoping cart

var itemCount = document.querySelector("#item-count")
var items = 0;
itemCount.innerHTML = items;
 
//incrementCount() function is written into the buttons 
// so its <button onClick="incrementCount()"
function incrementCount() {
    items++;
    itemCount.innerHTML = items;
}
