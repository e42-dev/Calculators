window.onload = function () {
    updateSlidertoValuebox('monthly_investment_slider', 'monthly_investment_value');
    updateSlidertoValuebox('expected_return_rate_slider', 'expected_return_rate_value');
    updateSlidertoValuebox('time_period_slider', 'time_period_value');
    calculateResult();
}
function updateSliderValue(slider, valuebox) {
    //console.log(slider.textContent)
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
    var monthly_investment = document.getElementById('monthly_investment_slider').value;
    var time = document.getElementById('time_period_slider').value;
    var rate = document.getElementById('expected_return_rate_slider').value;
    var invested_amount = document.getElementById('invested_amount_result');
    var returns = document.getElementById('esti_returns_result');
    var total = document.getElementById('total_value_result');

    var i = (rate / (100 * 12));
    let a = Number(monthly_investment * (12 * time)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    invested_amount.value = a;
    var ans = monthly_investment * ((((1 + i) ** (time * 12)) - 1) / i) * (1 + i);
    var ans1 = Number(parseInt(ans) + 1).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total.value = ans1;
    var b = Number(parseInt(ans) + 1 - (monthly_investment * 12 * time)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    returns.value = b;
}