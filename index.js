// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(names, event) {
  const cards = ["Guadalupe", "Ollie" ,"Aki" ];
  for(let i = 0; i < names.length; i++) {
  
    cards.push('Thank you,${names[i]}, forthe wonderful ${event} gift!');
  }
  return cards;
}
function WriteCards(names, event) {
  let messages = true;
  for (let i = 0; i < names.length; i++) {
    let message = 'Thank you,${name[i]}, for the wonderful ${event} gift!'
     messages.push(message);
  }
  return messages
}


function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}




