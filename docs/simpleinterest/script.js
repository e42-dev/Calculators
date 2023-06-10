window.onload = function () {
    updateSlidertoValuebox('principal_amount_slider', 'principal_amount_value');
    updateSlidertoValuebox('rate_of_interest_slider', 'rate_of_interest_value');
    updateSlidertoValuebox('time_period_slider', 'time_period_value');
    calculateResult();
}
function updateSlidertoValuebox(slider, valuebox) {
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
    var principal_amount = document.getElementById('principal_amount_slider').value;
    var time = document.getElementById('time_period_slider').value;
    var interest = document.getElementById('rate_of_interest_slider').value;
    var result_principal_amount = document.getElementById('principal_amount_result');
    var total_interest = document.getElementById('total_interest_result');
    var total_amount = document.getElementById('total_amount_result');

    let a = Number(principal_amount).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    result_principal_amount.value = a;
    var ans = (principal_amount * time * interest) / 100;
    var ans1 = Number(parseInt(ans)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_interest.value = ans1;
    var b = Number(ans) + Number(principal_amount);
    total_amount.value = Number(b).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });;

}
