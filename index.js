function upadateshoesNumber(id,isnumber,price){
    let Shoesinput = document.getElementById(id + '-number');
   let Shoesnumber = Shoesinput.value;
   let Shoesinputvalue =parseInt(Shoesnumber);
   Shoesinput.value = Shoesinputvalue + 1; 
   if(isnumber==true){
    Shoesinput.value = Shoesinputvalue + 1; 
   }else{
    Shoesinput.value = Shoesinputvalue - 1; 
   }
   let newvalue = parseInt(Shoesinput.value);
   document.getElementById(id +'-total' ).innerText = newvalue * price;
   calculatew();

}
function upadateshoes1Number(id){
    let productInput =document.getElementById(id +'-number');
    let productoutput = parseInt(productInput.value);
    return productoutput;
}

function calculatew(){
    let Shoesamout=upadateshoes1Number('Shoes') * 80;

   let Shoes5amout=upadateshoes1Number('Shoes5') * 50;

   let totalPrice=Shoesamout+Shoes5amout;

   let mot=totalPrice/5;

   let subtotal = totalPrice + mot;
   document.getElementById('sub-total').innerText=totalPrice;
   document.getElementById('total-price').innerText=subtotal;
  

}


document.getElementById('Shoes-p').addEventListener("click", ()=>{
   
    upadateshoesNumber('Shoes',true,80);
});

document.getElementById('Shoes-m').addEventListener("click", ()=>{
   
    upadateshoesNumber('Shoes',false,50);
});
document.getElementById('Shoes5-p1').addEventListener("click", ()=>{
   
    upadateshoesNumber('Shoes5',true,80);
    
});

document.getElementById('Shoes5-m1').addEventListener("click", ()=>{
   
    upadateshoesNumber('Shoes5',false,50);
});



















// function upadateCaseNumber(product, price, isIncreasing){
//     const caseInput = document.getElementById(product + '-number');
//     let caseNumber = caseInput.value;
//             if(isIncreasing){
//                 caseNumber = parseInt(caseNumber) + 1;
//             }
            
//     else if(caseNumber > 0){
//            caseNumber = parseInt(caseNumber) - 1;
//          }
        
//         caseInput.value = caseNumber;
//     // update case total 
//     const caseTotal = document.getElementById(product + '-total');
//     caseTotal.innerText = caseNumber * price;
//     calculateTotal();
//     }


//     function getInputvalue(product){
//         const productInput = document.getElementById(product + '-number');
//         const productNumber = parseInt(productInput.value);
//         return productNumber;
//     }
//     function calculateTotal(){
//         const phoneTotal = getInputvalue('phone') * 1219;
//         const caseTotal = getInputvalue('case') * 59;
//         const subTotal = phoneTotal + caseTotal;
//         const tax = subTotal / 10;
//         const totalPrice = subTotal + tax;

//         // update on the html 
//         document.getElementById('sub-total').innerText = subTotal;
//         document.getElementById('tax-amount').innerText = tax;
//         document.getElementById('total-price').innerText = totalPrice;

//     }





// document.getElementById('case-plus').addEventListener('click',function(){
//         // const caseInput = document.getElementById('case-number');
//         // const caseNumber = caseInput.value;
//         // caseInput.value = parseInt(caseNumber) + 1;
//    upadateCaseNumber('case', 59 ,true);
// });

// document.getElementById('case-minus').addEventListener('click',function(){
//     // const caseInput = document.getElementById('case-number');
// //     const caseNumber = caseInput.value;
// //    if(caseInput.value > 1){
// //         caseInput.value = parseInt(caseNumber) - 1;
// //    }
// upadateCaseNumber('case', 59, false);
// });

// // phone prcie update using add event linstner 
// document.getElementById('phone-plus').addEventListener('click',function(){
//     upadateCaseNumber('phone',1219, true);
// });


// document.getElementById('phone-minus').addEventListener('click',function(){
//     upadateCaseNumber('phone',1219 , false);
// });