window.onload = function () {
    updateSlidertoValuebox('current_cost_slider', 'current_cost_value');
    updateSlidertoValuebox('rate_of_inflation_slider', 'rate_of_inflation_value');
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
    var current_cost = document.getElementById('current_cost_slider').value;
    var time = document.getElementById('time_period_slider').value;
    var rate = document.getElementById('rate_of_inflation_slider').value;
    var cost_result = document.getElementById('current_cost_result');
    var cost_increase = document.getElementById('cost_increase_result');
    var future_cost = document.getElementById('future_cost_result');

    cost_result.value = current_cost;
    var ans = current_cost * (1 + (rate / 100)) ** time;
    future_cost.value = parseInt(ans);
    cost_increase.value = future_cost.value - current_cost;
}