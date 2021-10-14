function cadenaMasLarga(arr) {

  let longestWord=" ";
  let longestWordPosition=undefined;

  arr.map( (word,index) => {
    (longestWord.length < word.length) && (
        longestWord = word,
        longestWordPosition = index
    )
  })

  console.log(`La cadena más larga es "${longestWord}" y está en la posición "${longestWordPosition}" `);
}

const testArray = [
  "Colombia",
  "Mexico",
  "Ecuador",
  "Brasil",
  "Venezuela",
  "Peru"
]

cadenaMasLarga(testArray)