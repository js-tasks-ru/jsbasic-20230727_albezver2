function checkSpam(str) {
  let spam1 = "1xBet";
  let spam2 = "XXX";
  
  if ( str.toLowerCase().includes( spam1.toLowerCase() ) ) {
    return true;
  } else if ( str.toLowerCase().includes( spam2.toLowerCase() ) ) {
    return true;
  } else {
    return false;
  }
}

