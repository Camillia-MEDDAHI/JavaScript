/* Bibliothécaire */

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  
  /* Est-ce que tous les livres ont été au moins empruntés une fois ? */
  
  
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  
  var bookNotRented = false
  
  for (book in books) {
    if (books[book].rented < 1) {
      bookNotRented = books[book].title
    } else {
      bookNotRented = false
    }
  }
  
  if (bookNotRented) {
    console.log("Il y a un livre qui n'a pas encore été emprunté : " + bookNotRented);
  } else {
    console.log("Tous les livres ont étés empruntés au moins une fois");
  }
  
  /* Quel est livre le plus emprunté ? */
  
  console.log("Quel est livre le plus emprunté ?")
  
  i = 0;
  
  for (key in books) {
    if (books[key].rented > i) {
      i = books[key].rented;
      book = books[key].title;
    }
  }
  console.log("Le livre le plus emprunté est le suivant : " + book);
  
  /* Quel est le livre le moins emprunté ? */
  
  console.log("Quel est livre le moins emprunté ?")
  
  
  for (key in books) {
    if (books[key].rented < i) {
      i = books[key].rented;
      book = books[key].title;
    }
  }
  console.log("Le livre le moins emprunté est le suivant : " + book);
  
  /* Trouve le livre avec l'ID: 873495 */
  
  console.log("Trouve le livre avec l'ID: 873495")
  
  var result = books.filter(obj => {
    return obj.id === 873495;
  })
  
  console.log(result[0].title);
  
  /* Supprime le livre avec l'ID: 133712 ; */
  
  books.splice(books.findIndex(book => book.id == 133712), 1);
  console.log("Le livre avec l'id 133712 a été supprimé avec succès")
  
  /* Trie les livres par ordre alphabétique */
  console.log("Trie des livres dans l'ordre alphabétique :")
  books.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  })
  
  for(book in books) {
    console.log("- " + books[book].title);
  }