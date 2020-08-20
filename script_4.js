const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  /* Années 70 */
  
  console.log('Les entrepreneurs nés dans les années 70 :')
  
  for (let entrepreneur in entrepreneurs) {
    if (entrepreneurs[entrepreneur].year >= 1970 && entrepreneurs[entrepreneur].year < 1980  ) {
      console.log("- " + entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last.toUpperCase());
    }
  }
  
  /* Sors une array qui contient le prénom et le nom des entrepreneurs */
  
  console.log("Array des entrepreneurs :")
  
  let arrayEntrepreneurs = []
  for (let entrepreneur in entrepreneurs) {
    arrayEntrepreneurs.push(entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last)
  }
  console.log(arrayEntrepreneurs)
  
  /* Quel âge aurait chaque inventeur aujourd'hui ? */
  
  console.log("Age des inventeurs :")
  
  for (let entrepreneur in entrepreneurs) {
    age = 2020 - entrepreneurs[entrepreneur].year
    console.log(entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last + " a aujoud'hui " + age + " ans")
    
  }
  
  /* Trie les entrepreneurs par ordre alphabétique du nom de famille. */
  
  console.log("Trie des entrepreneurs par ordre alphabétique en fonction du nom :")
  
  entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
    return 0;
  });
  
  for( let entrepreneur in entrepreneurs) {
    console.log("- " + entrepreneurs[entrepreneur].first + " " + entrepreneurs[entrepreneur].last);
  }