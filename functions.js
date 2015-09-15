var showCards = document.getElementById("cards");

function newDeck(){

  var ranks = [ {card:"1", points: 1 },
               { card: "2", points: 2 }, { card: "3", points: 3 }, { card: "4", points: 4 }, { card: "5", points: 5 }, { card: "6", points: 6 }];
  
  var suits = [ "U"];
  var numOfCards = ranks.length*suits.length;
  
  var deck = [];
  

  // for each suit
  for(var i=0; i<suits.length; i++){
    //for each rank
    for(var j=0; j<ranks.length; j++){
        deck.push({suit: suits[i], card: ranks[j].card, points: ranks[j].points});
    }
  }  
  return deck;  
}

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);
  var imageURL = [{ chosenCard: "U-1", imgURL: "http://static.wixstatic.com/media/afc4a4_7bf6fddf12664eb1a04eebf3dd9440b3.jpg_srz_p_596_431_75_22_0.50_1.20_0.00_jpg_srz" },
             { card: "2", points: 2 }, { card: "3", points: 3 }, { card: "4", points: 4 }, { card: "5", points: 5 }, { card: "6", points: 6 }];

  
  for(var i=0; i < 1; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    //URL NOT WORKING
    card.style.backgroundImage = "url(card-img/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".jpg" + ")";
  }
}

//returns new shuffled card array
function shuffleCards(numbers){
   for (var i = numbers.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = numbers[i];
     numbers[i] = numbers[j];
     numbers[j] = temp;
   }
   return(numbers);
}
var cardContainer = document.getElementById('container');
cardContainer.innerHTML = "";
displayCards()