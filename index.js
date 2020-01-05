function scuberGreetingForFeet(ride){
  // Write your code here!
  let payment
  if (ride <= 400) {
    payment = "This one is on me!"
  } else if (ride >= 2000 && ride <= 2500) {
    payment = "I will gladly take your thirty bucks."
  } else {
    payment = "No can do."
  }
  return payment
}


function ternaryCheckCity(city){
  // Write your code here!
  let ride;
  city === "NYC" ? (ride = "Ok, sounds good.") : (ride = "No go.");

  return ride
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let charm;

switch (tip) {
  case 'generous':
    charm = "Thank you so much.";
    break;
  case 'not as generous':
    charm = "Thank you." ;
    break;
  default:
    charm = "Bye.";
 }
 return charm;

}