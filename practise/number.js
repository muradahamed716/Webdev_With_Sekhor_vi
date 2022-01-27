console.log(Number.parseInt('  20m'));
console.log(+"20");
console.log(Number.isNaN('20c'))
///
console.log(Number.isFinite(20))//for floating value
console.log(Number.isInteger(20))



///math///
//sqrt/coubic root
console.log(Math.sqrt(25))
console.log(25**(1/2))
console.log(8**(1/3))
 Math.trunc()
 Math.ceil()
 Math.round()
 Math.floor()
 Math.random()

//gettin a random number between two value
const randB2Value=(max,min)=>Math.floor(Math.random()*(max-min)+1)+min;
console.log(randB2Value(10,20))