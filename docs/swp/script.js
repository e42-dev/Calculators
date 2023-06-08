var slider = document.getElementById('total_investment_slider');
slider.value = 500000;
var slider = document.getElementById('withdrawl_per_month_slider');
slider.value = 10000;
var slider = document.getElementById('expected_rate_of_return_slider');
slider.value = 8;
var slider = document.getElementById('time_period_slider');
slider.value = 5;

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

function calculateCompund(amount) {
    //A = P(1 + r/n) ^ (nt)
    var P = amount;
    var r = document.getElementById('expected_rate_of_return_slider').value / 100;
    var A = P * (1 + r * 0.083344) ** (0.9996); // Here, r/n => r/12 => r * (1/12) => r * (0.083344) && nt => 12 * (1/12), WHich should not be 1. if we need precise answer. So, nt => 0.9996. 
    return A;
}

function calculateResult() {
    var total_investment = document.getElementById('total_investment_value').value;
    var withdrawl_per_month = document.getElementById('withdrawl_per_month_slider').value;
    var expected_rate_of_return = document.getElementById('expected_rate_of_return_slider').value;
    var time_period = document.getElementById('time_period_slider').value;

    var total_investment_result = document.getElementById('total_investment_result');
    var total_investment_result_formatted = Number(total_investment).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_investment_result.value = total_investment_result_formatted;

    var total_withdrawl = document.getElementById('total_withdrawl');
    var total_withdrawl_unformatted = withdrawl_per_month * 12 * time_period;
    var total_withdrawl_formatted = Number(total_withdrawl_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_withdrawl.value = total_withdrawl_formatted;

    var final_value = document.getElementById('final_value');
    var i = 0;
    var final_value_unformatted = total_investment;
    for (i = 0; i < 12 * Number(time_period); i++) {
        final_value_unformatted -= withdrawl_per_month;
        final_value_unformatted = calculateCompund(final_value_unformatted);
    }
    var final_value_formatted = Number(final_value_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    final_value.value = final_value_formatted;
}