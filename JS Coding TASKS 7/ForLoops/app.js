// for loop
var games = ['Circket','Pubg', 'COD','Football'];
for (let i = 0; i < games.length; i++){
    if (games[i] === 'Circket') {
        console.log('Circket exist'); 
        break;   
    }
    else{
        console.log('Circket does not exist');
    }
};

//foreach loop
var myFavtGame;
games.forEach(function(myFavtGame) {
//   console.log(myFavtGame)
  if (myFavtGame === 'Circket') {
    console.log('Circket exist');
  }
  else{
      console.log('Circket doesnt exist');
  }
});

