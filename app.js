// using function to reduce the code
function updateCaseInput(isIncrease){
    // get Silicone Case input field
    const caseInput = document.getElementById('case-input');
    const caseInputText = caseInput.value;
    let caseInputNumber = parseInt(caseInputText);
    // increase silicone input value
    if(isIncrease == true){
        // update silicone input field
        caseInputNumber = caseInputNumber + 1;
    }
    else if(caseInputNumber > 0){
        // update silicone input field
        caseInputNumber = caseInputNumber - 1;
    }

    // update case input value
    caseInput.value = caseInputNumber;

    // get case total balance field
    const balancefield = document.getElementById('case-balance');
    balancefield.innerText = 59 * caseInputNumber;
    
    
    
}

// Apply Add Event Listener on case-plus-btn
document.getElementById('case-plus-btn').addEventListener('click', function(){
    
    updateCaseInput(true);
})

// Apply Add Event Listener on case-minus-btn
document.getElementById('case-minus-btn').addEventListener('click', function(){
    
    updateCaseInput(false);
})