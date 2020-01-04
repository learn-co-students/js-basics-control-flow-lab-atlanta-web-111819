function scuberGreetingForFeet(distance){
  switch (true) {
    case distance < 400:
      return 'This one is on me!';
    case distance  > 2000 && distance < 2500:
      return 'I will gladly take your thirty bucks.';
    default:
      return 'No can do.';
  }
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
  } 
}