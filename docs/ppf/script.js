window.onload = function () {
    updateSlidertoValuebox('yearly_investment_slider', 'yearly_investment_value');
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
    var yearly_investment = document.getElementById('yearly_investment_slider').value;
    var time = document.getElementById('time_period_slider').value;
    var interest = 0.071;
    var invested_amount = document.getElementById('invested_amount_result');
    var total_interest = document.getElementById('total_interest_result');
    var maturity_value = document.getElementById('maturity_value_result');

    invested_amount.value = Number(yearly_investment * time).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    //F = P [({(1+i) ^n}-1)/i]*(1+i)
    var ans = yearly_investment * ((((1 + interest) ** time) - 1) / interest) * (1 + interest);

    maturity_value.value = Number(parseInt(ans)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });

    var b = Number(ans) - Number(yearly_investment * time);
    total_interest.value = Number(parseInt(b)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });;

}