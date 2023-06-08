var slider = document.getElementById('current_cost_slider');
slider.value = 100000;
var slider = document.getElementById('rate_of_inflation_slider');
slider.value = 6.0;
var slider = document.getElementById('time_period_slider');
slider.value = 5;

function updateSliderValue(slider, valuebox) {
    var pa = document.getElementById(slider);
    var val = document.getElementById(valuebox);
    val.value = pa.value;
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