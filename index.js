// Code your solutions in this file
let name = ["Guadalupe", "Ollie", "Aki"];
let event = ["Surprise"]
function writeCards(names, events) {
  const message = []
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  
  return message;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}




