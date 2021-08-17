
// function checkPhoneNumber(test8,digits){
//      if(test8.length != 10){
//          return(false);
//      }
//      for(let i = 0; i < test8.length; i++){
//         if(test8[i] in digits){
//              //pass do nothing
//          }
//          else{
//              return(false);
//          }
//     }
//     return true;
// }

// function checkZipCode(test4,digits){
//      if(test4.length != 5){
//          return(false);
//      }
//      for(let i = 0; i < test4.length; i++){
//         if(test4[i] in digits){
//              //pass do nothing
//          }
//          else{
//              return(false);
//          }
//     }
//     return true;
// }

// function checkShipType(test9){
//     if(!test9){
//         return(false);
//     }
//     else{
//         test9 = test9.value;
//         return(true);
//     }
// }

function testFunction(){

    const digits = ["0","1","2","3","4","5","6","7","8","9"];

    let test1 = document.getElementById("first-name").value;
    let test2 = document.getElementById("last-name").value;
    let test3 = document.getElementById("shipping-address").value;
    let test4 = document.getElementById("zip-code").value;
    let test5 = document.getElementById("city").value;
    let test6 = document.getElementById("state").value;
    let test7 = document.getElementById("email").value;
    let test8 = document.getElementById("phone-number").value;
    let test9 = document.querySelector('input[name="shippingtypes"]:checked');
    let test10 = document.getElementById("item").value;
    let test11 = document.getElementById("quantity").value;

    alert("testing 123 values");

    // if( !(test1 == "")){ 
    //     alert("Have a good day " + test1 +" thank you for shopping at chipza!");
    // }
}

