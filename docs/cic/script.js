windows.onload = function() {
    updateSlidertoValuebox('princial_amount_slider', 'principal_amount_value');
    updateSlidertoValuebox('rate_of_interest_slider', 'rate_of_interest_value');
    updateSlidertoValuebox('time_period_slider', 'time_period_value');
    calculateResult();
}

function getFrequency() {
    var frequency;
    compound_frequency = document.getElementById('compound_frequency');
    if (compound_frequency.value == 'Half-Yearly') {
        frequency = 2;
    }
    else if (compound_frequency.value == 'Quarterly') {
        frequency = 4;
    }
    else if (compound_frequency.value == 'Monthly') {
        frequency = 12;
    }
    else {
        frequency = 1;
    }
    return frequency;
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

function calculateResult() {
    var frequency = getFrequency();
    var principal_amount = document.getElementById('principal_amount_slider').value;
    var time_period = document.getElementById('time_period_slider').value;
    var rate_of_interest = document.getElementById('rate_of_interest_slider').value;
    var principal_amount_result = document.getElementById('principal_amount_result');
    var total_interest_result = document.getElementById('total_interest_result');
    var total_amount_result = document.getElementById('total_amount_result');

    let principal_amount_result_formatted = Number(principal_amount).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    principal_amount_result.value = principal_amount_result_formatted;

    var total_amount_result_unformatted = principal_amount * ((1 + (rate_of_interest / (100 * frequency))) ** (frequency * time_period));
    var total_amount_result_formatted = Number(parseInt(total_amount_result_unformatted) + 1).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_amount_result.value = total_amount_result_formatted;

    var total_interest_result_formatted = Number(parseInt(total_amount_result_unformatted) + 1 - principal_amount).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
    total_interest_result.value = total_interest_result_formatted;
}