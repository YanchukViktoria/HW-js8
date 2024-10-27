let arr = [42, 'Hello', true, undefined, NaN];
let str = ``;
let str2 = arr.join('');

for (let i = 0; i < arr.length; i++){
    str += arr[i];
};

const cards = [`card1`, `card2`, `card3`, `card4`, `card5`];

let ind = cards.indexOf("card3");
cards.splice(ind,1);

let ind2 = cards.indexOf("card6");
cards.splice(cards.length, ind2, "card6");

let ind3 = cards.indexOf("card4");
cards[ind3] = "newCard4";

console.log(cards);