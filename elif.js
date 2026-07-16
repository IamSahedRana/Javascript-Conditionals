let price = 1990;

if (price > 5000) {
     const discount = 20;
     const discount_amount = price*(discount/100);
     const Payment = price - discount_amount ;
     console.log(`Total Payable Amount: ${Payment}TK`);
}
else if (price > 1000){
     const discount = 10;
     const discount_amount = price*(discount/100);
     const Payment = price - discount_amount ;
     console.log(`Total Payable Amount: ${Payment}TK`);
}
else {
     console.log(`Total Payable Amount: ${price}TK`);
}