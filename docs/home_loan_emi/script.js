window.onload = function () {
    updateSlidertoValuebox('loan_amount_slider', 'loan_amount_value');
    updateSlidertoValuebox('rate_of_interest_slider', 'rate_of_interest_value');
    updateSlidertoValuebox('tenure_slider', 'tenure_value');
    calculateResult();
}

function updateSliderToValuebox(slider, valuebox) {
    var slider = document.getElementById(slider);
    var valuebox = document.getElementById(valuebox);
    valuebox.value = slider.value;
}

function updateValueboxToSlider(valuebox, slider) {
    var valuebox = document.getElementById(valuebox);
    var slider = document.getElementById(slider);
    slider.value = valuebox.value;
}

function calculateResult() {
    var loan_amount = document.getElementById('loan_amount_value').value;
    var rate_of_interest = (document.getElementById('rate_of_interest_value').value);
    var tenure = document.getElementById('tenure_value').value;
    var monthly_emi = document.getElementById('monthly_emi');
    var principal_amount_result = document.getElementById('principal_amount_result');
    var total_interest_result = document.getElementById('total_interest_result');
    var total_amount_result = document.getElementById('total_amount_result');

    //EMI = [P x R x (1+R) ^N]/ [(1+R) ^ (N-1)]
    var monthly_emi_unformatted = [loan_amount * (rate_of_interest / 12 / 100) * [(1 + (rate_of_interest / 12 / 100)) ** (12 * tenure)]] / [(((1 + (rate_of_interest / 12 / 100)) ** (12 * tenure))) - 1];
    var monthly_emi_formatted = Number(monthly_emi_unformatted).toLocaleString("en-In", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    monthly_emi.value = monthly_emi_formatted;

    var principal_amount_formatted = Number(loan_amount).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    principal_amount_result.value = principal_amount_formatted;

    var total_amount_unformatted = monthly_emi_unformatted * 12 * tenure;
    var total_amount_formatted = Number(total_amount_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_amount_result.value = total_amount_formatted;

    var total_interest_unformatted = total_amount_unformatted - loan_amount;
    var total_interest_formatted = Number(total_interest_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_interest_result.value = total_interest_formatted;
}