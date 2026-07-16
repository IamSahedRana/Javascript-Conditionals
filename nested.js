let brac = 62; /* Stock Price */
let city = 30;
let ebl = 24;

if (brac > 61) {
     if (city > 29){
          if (ebl < 23){
               console.log("Buy EBL");
          }
          else {
               console.log("Buy City");
          }
     }
          else {
          console.log("Buy Brac");
               
     }
}