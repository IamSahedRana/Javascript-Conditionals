let RickshawFare = 200;

if (RickshawFare < 50) {
     console.log("Heavy Rain, Mama!");
} else {
     console.log('No, Rain. 50Tk Only!');
}

let Mango = 100 ;
let Banana = 40;

if ((Mango < 80) || (Banana <30)) {
     const Bundle = Mango + Banana 
     console.log("I am Not Buying at this price: "+ Bundle +", MAMA!");
} else {
     const Bundle = Mango + Banana 
     console.log(`I buy at this Price: ${Bundle}, MAMA!`);
}