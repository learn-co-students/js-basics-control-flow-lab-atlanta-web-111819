function scuberGreetingForFeet(length){
  // Write your code here!
  switch(true){
    case length < 400:
      return 'This one is on me!'
      break;
    case length > 2000 && length < 2500:
      return 'I will gladly take your thirty bucks.'
      break;
    case length > 2500:
      return 'No can do.'
      break;
  }
}

function ternaryCheckCity(city){
  switch(city){
    case 'NYC':
      return 'Ok, sounds good.'
      break;
    default:
      return 'No go.'
      break;
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
      break;
  }
  // Write your code here!
}