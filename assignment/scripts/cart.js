console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



let basket = [];
const maxItems = 5;
let cart = 0;

/** fullCartShopping
 * @param {variable} var0 set as a constant of maxItems
 * @param {variable} var1 items in your basket array
 * @param {String} item item you are putting in basket
 */

function fullCartShopping(var0, var1, item){
    if(var1 === (var0-1)) {
        console.log(`${item} was added, No space left in your cart`);
        basket.push(item);
        cart++;
    }// end last item added
    else if(var1 < var0) {
        console.log(`${item} was added, there is room for more!`);
        basket.push(item);
        cart++;
    }// end room for more
    else {
        console.log(`There is no room in your cart!`)
    }// end no room in cart
}// end fullcartshopping

/** listItems
 * @param {variable} array this is the basket array
 */

function listItems(array){
    for(let item of array) {
        console.log(`${item} is in your basket!`);
    }// end for of loop
}// end list items

/** empty
 * @param {variable} arr this is your basket array
 */

function empty(arr){
    while( arr.length > 0 ){
        arr.pop();
        cart--;
    }// end while loop
    console.log(`the cart was emptied!`);
} // end empty cart

/**
 * @param {String} item the item you are removing
 * @param {variable} arr basket array 
 */

function remItem(item, arr){
    if(arr.indexOf(item) === -1){
        console.log(`this item is not in your cart!`);
    }// end if item is not in cart
    else {
        for(let i=0; i<arr.length; i++){
            if(item === arr[i]){
                console.log(`The item, ${item}, has been removed.`);
                arr.splice(i, 1);
                cart--;
            }// end if item is removed from cart
        }// end for loop
    }// end else statement
}// end remItem function


// Ben's grocery outing

// Ben adds bananas, apples, and peppers per his list
fullCartShopping(maxItems, cart, `banana`);
fullCartShopping(maxItems, cart, `apple`);
fullCartShopping(maxItems, cart, `pears`);

// Ben finds a cool looking dragonfruit that he want's to try
// He decides he'll put back the apple, and pick up a dragon fruit
remItem('apple', basket);
fullCartShopping(maxItems, cart, `dragonfruit`);

// he then bumps into a customer and drops his entire basket
// his items roll all around the floor
empty(basket);

// Ben decides he didnt need those items anyways
// he goes and picks out vegetables instead
fullCartShopping(maxItems, cart, `green beans`);
fullCartShopping(maxItems, cart, `peas`);
fullCartShopping(maxItems, cart, `spinach`);
fullCartShopping(maxItems, cart, `pumpkin`);
fullCartShopping(maxItems, cart, `peppers`);

// ben decides he needs milk and tries to squeeze it in his cart
fullCartShopping(maxItems, cart, `milk`);
// it doesnt fit so he puts it back

// ben tries to remove the pears from his cart
remItem('pears', basket);
// but then he remembered he dropped his cart and it's not there

// ben decides he's tired of shopping so he checks out and goes home

console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
