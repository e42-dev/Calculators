window.onload = function () {
    updateSliderToValuebox('total_amount_slider', 'total_amount_value'); 
    updateSliderToValuebox('tax_slab_slider', 'tax_slab_value'); 
    calculateResult();
}

function updateToPost() {
    document.getElementById('pre_post_title').innerHTML = "Post-GST amount"
}

function updateToPre() {
    document.getElementById('pre_post_title').innerHTML = "Pre-GST amount"
}

function isInclusive() {
    Inclusive = document.getElementById('Inclusive');
    if (Inclusive.checked) {
        return true;
    }
    return false;
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
    total_amount = document.getElementById('total_amount_value');
    tax_slab = document.getElementById('tax_slab_value');
    total_gst = document.getElementById('total_gst');
    pre_post_gst_amount = document.getElementById('pre_post_gst_amount');
    var total_gst_unformatted, pre_post_gst_amount_unformatted, pre_post_gst_amount_formatted, total_gst_formatted;
    if (isInclusive()) {
        pre_post_gst_amount_unformatted = Number(total_amount.value) * (100 / (100 + Number(tax_slab.value)));
        pre_post_gst_amount_formatted = Number(pre_post_gst_amount_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
        pre_post_gst_amount.value = pre_post_gst_amount_formatted;
        total_gst_unformatted = Number(total_amount.value - pre_post_gst_amount_unformatted);
        total_gst_formatted = Number(total_gst_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
        total_gst.value = total_gst_formatted;
    }
    else {
        total_gst_unformatted = (total_amount.value * tax_slab.value) / 100;
        total_gst_formatted = Number(total_gst_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
        total_gst.value = total_gst_formatted;
        pre_post_gst_amount_unformatted = Number(total_gst_unformatted) + Number(total_amount.value);
        pre_post_gst_amount_formatted = Number(pre_post_gst_amount_unformatted).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 });
        pre_post_gst_amount.value = pre_post_gst_amount_formatted;
    }
}