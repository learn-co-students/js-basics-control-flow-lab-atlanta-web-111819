function scuberGreetingForFeet(distance){
  let result
  if (distance < 400){
    result = 'This one is on me!'
  }
  else if (distance > 2000 && distance < 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  // Write your code here!
  return result
}

function ternaryCheckCity(city){
let result 
if(city === 'NYC'){
  result = 'Ok, sounds good.';
}
else{
  result = 'No go.'
}
return result
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let result
  if (tip === 'generous'){
    result = 'Thank you so much.'
  }
  else if (tip === 'not as generous') {
    result = 'Thank you.'
  }
  else{
    result = 'Bye.'
  }
  return result
  
  // Write your code here!
}