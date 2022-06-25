// Code your solutions in this file
let namesArray = ['John', 'Mary', 'Jane' ]

function writeCards( namesArray, surprise) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!` )
    }
    return thankYouCards
  }
  writeCards (namesArray, "surprise");


  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }
