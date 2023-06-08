var slider = document.getElementById('loan_amount_slider');
slider.value = 1000000;
var slider = document.getElementById('rate_of_interest_slider');
slider.value = 6.5;
var slider = document.getElementById('loan_tenure_slider');
slider.value = 5;
        
function updateSliderValue(slider, valuebox) {
    var pa = document.getElementById(slider);
    var val = document.getElementById(valuebox);
    val.value = pa.value;
}
        
function calculateResult() {
    var loan_amount = Number(document.getElementById('loan_amount_slider').value);
    var loan_tenure = Number(document.getElementById('loan_tenure_slider').value);
    var interest = Number(document.getElementById('rate_of_interest_slider').value);
    var monthly_emi = document.getElementById('monthly_emi_result');
    var principal_amount = document.getElementById('principal_amount_result');
    var total_interest = document.getElementById('total_interest_result');
    var total_amount = document.getElementById('total_amount_result');
            
    //E= P. R. (1+R)^n/[(1+R)^n-1]
    var ans = ( loan_amount * (interest/1200) * ( ( 1 + ( interest/1200 ) ) ** ( loan_tenure*12 ) ) ) / ( ( ( 1 + (interest/1200)) ** ( loan_tenure*12 ) - 1 ) );
    monthly_emi.value = Number(parseInt(ans)+1).toLocaleString("en-IN", {style:"currency", currency:"INR", minimumFractionDigits: 0})

    principal_amount.value = Number(loan_amount).toLocaleString("en-IN", {style:"currency", currency:"INR", minimumFractionDigits: 0});

    var b = ans * (loan_tenure * 12);
    total_amount.value = Number(parseInt(b)).toLocaleString("en-IN", {style:"currency", currency:"INR", minimumFractionDigits: 0});

    total_interest.value = Number(parseInt(b-loan_amount)).toLocaleString("en-IN", {style:"currency", currency:"INR", minimumFractionDigits: 0});
            
}