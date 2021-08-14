
function checkPhoneNumber(test8,digit){

     if(test8.length != 10){
         return(false);
     }

     for(let i = 0; i < test8.length; i++){
        if(test8[i] in digit){
             //pass do nothing
         }
         else{
             return(false);
         }
    }
    return true;
}

function checkZipCode(test4,digit){

     if(test4.length != 5){
         return(false);
     }

     for(let i = 0; i < test4.length; i++){
        if(test4[i] in digit){
             //pass do nothing
         }
         else{
             return(false);
         }
    }
    return true;
}

function checkShipType(test9){
    if(!test9){
        alert("please select a shipping speed");
    }
    else{
        test9 = test9.value;
        alert(test9);
    }
}

function testFunction(){

    const digit = ["0","1","2","3","4","5","6","7","8","9"];

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

    alert(test11);

    



    // TO DO: finish shipping types function and implemnt in the conditoinal statements below
    // finish implementing a function with item values and check
    //finish implementing a function for quantity and update tag and values for the order summary


    // if(test1 == "" || test2 == "" || test3 =="" || test4 =="" || test5=="" || test6 == "" || test7 =="" ||test8 ==""){
    //     alert("Please fill out the form completely before placing your order.");
    // }
    // else if (!(checkPhoneNumber(test8,digit))){
    //     alert("Please enter a valid phone number.");
    // }
    // else if(!(checkZipCode(test4,digit))){
    //     alert("Please enter a valid zip code.")
    // }
    // else{
    //     alert("Thank you for shopping at Chipza " + test1 + ", have a good day!");
    // }
    
}

