
let stateTax = null;
let productCost = null;
let productQuantity = null;
let shippingCost = null;

function testFunction(){

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let shippingAddress = document.getElementById("shipping-address").value;
    let zipCode = document.getElementById("zip-code").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let shippingTypes = document.querySelector('input[name="shippingtypes"]:checked');
    let product = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;

    //To dofind a way to validate values

    return false;

}

function updateStateTax(){
    stateTax= document.querySelector(("#"+document.getElementById("state").value)).getAttribute("data-tax");
    updateTotalCost();
    return false;
}

function updateShipPrice(){
    shippingCost = document.querySelector('input[name="shippingtypes"]:checked').value;
    document.getElementById("shipping-cost").innerHTML = ("shipping: $" + shippingCost);
    updateTotalCost();
    return false;
}

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

function updateTotalCost(){
    if( (stateTax != null && stateTax != "") && (productCost != null && productCost != "") 
    && (productQuantity != null && productQuantity != "") && (shippingCost != null && shippingCost != "")  ){
        let subtotal =   (Number(productCost) * Number(productQuantity))  + Number(shippingCost) ; 
        let tax = subtotal * stateTax;
        document.getElementById("tax-cost").innerHTML = ("tax: $" + tax.toFixed(2) );
        document.getElementById("total-cost").innerHTML = ( ("total: $" + (Number(subtotal) + Number(tax)))); 
    }
}

