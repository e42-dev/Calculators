window.onload = function () {
    updateSlidertoValuebox('total_investment_slider', 'total_investment_value');
    updateSlidertoValuebox('rate_of_interest_slider', 'rate_of_interest_value');
    updateSlidertoValuebox('time_period_slider', 'time_period_value');
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

function updateTimeperiodRange() {
    frequency = document.getElementById('frequency');
    time_period_slider = document.getElementById('time_period_slider');
    if (frequency.value == 'Months') {
        time_period_slider.min = "1";
        time_period_slider.max = "11";
    }
    else if (frequency.value == 'Days') {
        time_period_slider.min = "1";
        time_period_slider.max = "31";
    }
    else {
        time_period_slider.min = "1";
        time_period_slider.max = "25";
    }
    updateSliderToValuebox('time_period_slider', 'time_period_value');
}

function getIndexForTime() {
    if (document.getElementById('frequency').value == "Years") {
        return 4;
    }
    else if (document.getElementById('frequency').value == "Months") {
        return 12;
    }
    else {
        return 365;
    }
}

function calculateResult() {
    var total_investment = document.getElementById('total_investment_value').value;
    var rate_of_interest = document.getElementById('rate_of_interest_value').value;
    var time_period = document.getElementById('time_period_value').value;
    var invested_amount = document.getElementById('invested_amount');
    var estimated_returns = document.getElementById('estimated_returns');
    var total_value = document.getElementById('total_value');

    var invested_amount_unforamtted = total_investment;
    var invested_amount_foramtted = Number(invested_amount_unforamtted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    invested_amount.value = invested_amount_foramtted;

    var index = getIndexForTime();
    //M= P + P {(1 + i/100) t – 1}
    var total_value_unformatted;
    //A = P (1+r/n) ^ (n * t)
    if (index == 4) {
        total_value_unformatted = total_investment * [(1 + rate_of_interest / 400) ** (4 * time_period)];
    }
    else {
        total_value_unformatted = total_investment * [(1 + rate_of_interest / 100 / index) ** (time_period)];
    }
    var total_value_formatted = total_value_unformatted.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    total_value.value = total_value_formatted;

    var estimated_returns_unformatted = total_value_unformatted - total_investment;
    var estimated_returns_formatted = estimated_returns_unformatted.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    estimated_returns.value = estimated_returns_formatted;
}
