var slider = document.getElementById('monthly_investment_slider');
slider.value = 25000;
var slider = document.getElementById('expected_return_rate_slider');
slider.value = 12.0;
var slider = document.getElementById('time_period_slider');
slider.value = 10;

function updateSliderValue(slider, valuebox) {
    //console.log(slider.textContent)
    var pa = document.getElementById(slider);
    var val = document.getElementById(valuebox);
    val.value = pa.value;
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