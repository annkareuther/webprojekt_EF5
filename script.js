const gameStarter = document.getElementById('game-starter');
const buttonsCard = document.getElementsByClassName('js-cards');
const buttonsLevel = document.getElementsByClassName('js-level');
const output = document.getElementById('game');
const mainContainer = document.getElementById ('main-container');
let clicks= 0;

function prepareGame() {
  mainContainer.innerHTML = "";
  console.log(cards);
  console.log("prepare game");
// Baue array

  let carddeck = []; 
    for (a=0; a <cards /2; a++){
      carddeck.push (a + '.jpg');
      // Bild zu zweiten mal in array einfügen
      carddeck.push (a + '.jpg');
      }
  // array vermischen damit die Kartenpaare nicht hintereinander sind    
  carddeck = carddeck.sort(()=>Math.random() -0.5);
  //console.log (carddeck);
  //console.log (carddeck[2])

  // Bilder anzeigen
  carddeck.forEach (function(item, index) {
   console.log(item);
   const div = document.createElement('div');
   //console.log(div);
   const img = document.createElement('img');
   console.log(img);
   img.src =  'images/' + item;
   img.alt = index;
   img.hidden = 0;
   
   
   //const deck =document.createElement('img');
   //img.src = 'images/18.jpg';
   

   img.dataset.index = index;
   img.classList.add('image');
   div.appendChild(img);
   mainContainer.append(div);

  
   
   
   

   /*
   let square = document.createElement('square');
    square.classList.add('test');
    div.appendChild(square);
    document.body.appendChild(square);
   */

   /*Deckblatt machen$
   while index <= cards; 
      square2 = square.cloneNode(true); */
  })

return carddeck;
}

// Für Output von der Anzahl der Karten und des Levels
gameStarter.addEventListener('click', function () {
  output.innerHTML = cards + ' Karten / Level ' + level;
  prepareGame();
});
  
// Definition der Variablen
let cards = 0;
let level = 0;

//Analyse
//console.log(buttonsCard);


// Daten von den Drop down Anzahl Karten
for (i = 0; i < buttonsCard.length; i++) {
  buttonsCard[i].addEventListener('click', function (event) {
    cards = event.target.getAttribute('data-cards');
  });
}
// Daten von den Drop down level
for (i = 0; i < buttonsLevel.length; i++) {
  buttonsLevel[i].addEventListener('click', function (event) {
    level = event.target.getAttribute('data-level');

  });
}
 
mainContainer.addEventListener('click', function (event) {
  //console.log(img.src);
  clicks++;
  test = event.target.getAttribute('data-index');
  wert1 = carddeck[test];
  console.log (test);
  console.log (wert1);

  //console.log(clicks); 

})


/*Bildquellen:alle Tierbilder von unsplash
0.jpg "https://images.unsplash.com/photo-1565104227903-cf0d71c80d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
12.jpg "https://images.unsplash.com/photo-1467104533309-26934667df46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvdXRoJTIwYWZyaWthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
16.jpg "https://images.unsplash.com/photo-1576695126479-2bcb00269957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
17.jpg "https://images.unsplash.com/photo-1570786697494-0ee0860719d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cyVDMyVCQ2QlMjBhZnJpa2F8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
18.jpg "https://www.google.com/search?q=blaues+image&rlz=1C1GCEB_enDE971DE971&sxsrf=AOaemvL4a9kdx1dsDh1KODijulyveIFm_w:1642545499030&tbm=isch&source=iu&ictx=1&vet=1&fir=mEuIOyCkmF-piM%252C7EaCWFNrauVWkM%252C_%253BoGLsnGDgNAkZFM%252Cco4Cgqr7NE_vuM%252C_%253BVtFETlEKu475GM%252Cco4Cgqr7NE_vuM%252C_%253BYnjHqA9vu9gQZM%252CZ9vlx7dz8eTFiM%252C_%253BX_Duw5Sy3O34bM%252CgJ5QFYtUMpJoTM%252C_%253Btol9iZoaWIYInM%252CZ9vlx7dz8eTFiM%252C_%253BuNu3NIKy6XZlKM%252CFoMzqrooEWePZM%252C_%253BZFCSHv57LTQkAM%252CRLOlXmh5UcHZVM%252C_%253BJifJcaA-CH1GFM%252CZ9vlx7dz8eTFiM%252C_%253B9Ie0xXyTGeMkMM%252C4rZTiIazuG-O4M%252C_%253BEpFg1HCfNqs1cM%252CZ9vlx7dz8eTFiM%252C_%253B0zEgSv3wOTM2uM%252Cr9u8Wnz9SREnbM%252C_%253B61qz7Tuse7EZqM%252Ctb-Ypy5VGTgbdM%252C_&usg=AI4_-kR-nCypSIVB9rJKRmNrULpMq_P2NQ&sa=X&sqi=2&ved=2ahUKEwjgufznrrz1AhX_xTgGHeu6DfsQ9QF6BAgYEAE#imgrc=VtFETlEKu475GM"
*/
