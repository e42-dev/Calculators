var slider = document.getElementById('yearly_investment_slider');
slider.value = 10000;
var slider = document.getElementById('time_period_slider');
slider.value = 15;

function updateSliderValue(slider, valuebox) {
    var pa = document.getElementById(slider);
    var val = document.getElementById(valuebox);
    val.value = pa.value;
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