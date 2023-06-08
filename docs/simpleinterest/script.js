var slider = document.getElementById('principal_amount_slider');
slider.value = 100000;
var slider = document.getElementById('rate_of_interest_slider');
slider.value = 6.0;
var slider = document.getElementById('time_period_slider');
slider.value = 5;

function updateSliderValue(slider, valuebox) {
    var pa = document.getElementById(slider);
    var val = document.getElementById(valuebox);
    val.value = pa.value;
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
