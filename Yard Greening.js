function greening(input){
       let price = (input[0] * 7.61);
       let discount = price * 0.18;
       let finalPrice = price - discount; 
       console.log(`The final price is: ${finalPrice} lv.`);
       console.log(`The discount is: ${discount} lv.`);
   }