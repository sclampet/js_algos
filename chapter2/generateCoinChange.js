//Given cents, return the fewest number of coins it would take to total cents

function genCoinChange(cents) {
 const demonitations = [
   {
     name: 'quarters',
     value: 25
   },
   {
     name: 'dimes',
     value: 10
   },
   {
     name: 'nickels',
     value: 5
   },
   {
     name: 'pennies',
     value: 1
   }
 ];

 var result = {}

 for (let denom of demonitations) {
    result[denom.name] = Math.floor(cents/denom.value)
    cents %= denom.value
 }
 return result;



}

console.log(genCoinChange(94))

module.exports = {
  genCoinChange
}