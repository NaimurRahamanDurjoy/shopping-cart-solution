// using function to reduce the code
function updateProducts(product, price, isIncrease){
    // get product input field
    const productInput = document.getElementById(product + '-input');
    const productInputValue = productInput.value;
    let productInputNumber = parseInt(productInputValue);
    // increase product input value
    if(isIncrease == true){
        // update product input field
        productInputNumber = productInputNumber + 1;
    }
    else if(productInputNumber > 0){
        // update product input field
        productInputNumber = productInputNumber - 1;
    }

    // update product input value
    productInput.value = productInputNumber;

    // get total balance field
    const balancefield = document.getElementById(product + '-balance');
    balancefield.innerText = price * productInputNumber;
    
    
    
}
//=================FOR CASING======================
// Apply Add Event Listener on case-plus-btn
document.getElementById('case-plus-btn').addEventListener('click', function(){
    
    updateProducts('case', 60, true);
});

// Apply Add Event Listener on case-minus-btn
document.getElementById('case-minus-btn').addEventListener('click', function(){
    
    updateProducts('case', 60, false);
});

// ==================FOR PHONE========================
// Apply Add Event Listener on phone-plus-btn
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    
    updateProducts('phone', 1250, true);
});
// Apply Add Event Listener on phone-plus-btn
document.getElementById('phone-minus-btn').addEventListener('click', function(){
    updateProducts('phone', 1250, false);
})