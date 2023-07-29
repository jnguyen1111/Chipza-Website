let stateTax = null;
let productCost = null;
let productQuantity = null;
let shippingCost = null;
let finalCost = null;
let firstName = null;
let lastName = null;
let shippingAddress = null;
let zipCode = null;
let city = null;
let state = null;
let email = null;
let phoneNumber = null;
let shippingTypes = null;
let product = null;
let quantity = null;

// checks to see if the whole form is filled if so submit and show the information that the user inputed
function validateForm(){
     firstName = document.getElementById("first-name").value;
     lastName = document.getElementById("last-name").value;
     shippingAddress = document.getElementById("shipping-address").value;
     zipCode = document.getElementById("zip-code").value;
     city = document.getElementById("city").value;
     state = document.getElementById("state").value;
     email = document.getElementById("email").value;
     phoneNumber = document.getElementById("phone-number").value;
     shippingTypes = document.querySelector('input[name="shippingtypes"]:checked');
     product = document.getElementById("item").value;
     quantity = document.getElementById("quantity").value;

    if(firstName != "" && lastName != "" && shippingAddress != "" && zipCode != "" && city != ""
    && state != "" && email != "" && phoneNumber != "" && product != "" && quantity != "" && shippingTypes != null){

        alert("Thank you for shopping at Chipza " + firstName + ", have a good day!");
        
        alert("first name: " + firstName + "\nlastName: " + lastName + "\nshipping address: " + shippingAddress +
        "\nzip code: " + zipCode + "\ncity: " + city + "\nstate: " +state + "\nemail: " + email + "\nphone number: "+ phoneNumber +
        "\nshipping option: " + shippingTypes.value + "\nproduct: " + product + "\nquantity: " + quantity + "\ntotal cost: " + finalCost);
        window.location.reload();

    }
    else{
        // pass do nothing
    }

    return false;
}

// if the state tax is obtained  and shipping speed and product and quantity update the tax cost and the final total cost
function updateTotalCost(){
    if( (stateTax != null && stateTax != "") && (productCost != null && productCost != "") 
    && (productQuantity != null && productQuantity != "") && (shippingCost != null && shippingCost != "")  ){
        let subtotal =   (Number(productCost) * Number(productQuantity))  + Number(shippingCost) ; 
        let tax = subtotal * stateTax;
        document.getElementById("tax-cost").innerHTML = ("tax: $" + tax.toFixed(2) );
        document.getElementById("total-cost").innerHTML = ( ("total: $" + (Number(subtotal) + Number(tax)))); 
        finalCost = (Number(subtotal) + Number(tax));
    }
}

//check if the product name has been selected if so update the price of product and the model number
function updateProductPrice(){
    productName = document.getElementById("item").value;
    if(productName == ""){
        productCost = 0.00;
        document.getElementById("product-cost").innerHTML = ("subtotal: $" + productCost);
        document.getElementById("model-number").innerHTML = ("Item #: ");
    }
    else{
        productCost = document.querySelector(("#"+productName)).getAttribute("data-price")
        document.getElementById("product-cost").innerHTML = ("subtotal: $" + productCost);
        document.getElementById("model-number").innerHTML = ("Item #: " + document.querySelector(("#"+ productName)).getAttribute("data-model"));
    }
    updateTotalCost();

    return false;
}

// get the tax value from the  state input and call the function update totalcost
function updateStateTax(){
    stateTax= document.querySelector(("#"+document.getElementById("state").value)).getAttribute("data-tax");
    updateTotalCost();
    return false;
}

//grabs value of shipping speed and update the shipping cost
function updateShipPrice(){
    shippingCost = document.querySelector('input[name="shippingtypes"]:checked').value;
    document.getElementById("shipping-cost").innerHTML = ("shipping: $" + shippingCost);
    updateTotalCost();
    return false;
}

//if the product has been chosen and quantity has been chosen multiply and update the subtotal
function updateQuantity(){
    if(productCost == "" || productCost == null){
        alert("Please select the product you wish to buy.");
    }
    else{
        productQuantity = document.getElementById("quantity").value;
        document.getElementById("product-cost").innerHTML = ("subtotal: $" + (Number(productCost) * Number(productQuantity)));
    }
    updateTotalCost();
    return false;
}


