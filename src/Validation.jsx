import React from 'react'

function Validation(modifiedFormData) {
    const errors = {}

    console.log(modifiedFormData.age);

    const age_val = modifiedFormData.age
    const capital_gain_val = modifiedFormData.capital_gain
    const capital_loss_val = modifiedFormData.capital_loss
    const hours_per_week_val = modifiedFormData.hours_per_week
    
    console.log(age_val < 16 || age_val > 70);
    console.log(age_val < 16);
    console.log(age_val > 70);
    
    if (age_val < 16 || age_val > 70 ) {
        console.log(age_val);
        errors.age = "Age must be between 16 and 60";
    }
    if (capital_gain_val < 0 || capital_gain_val > 3000 ) {
        errors.capital_gain = "Value must be between 0 and 3000";
    }
    if (capital_loss_val < 0 || capital_loss_val > 2000 ) {
        errors.capital_loss = "Value must be between 0 and 2000";
    }
    if (hours_per_week_val < 26 || hours_per_week_val > 72 ) {
        errors.hours_per_week = "Value must be between 0 and 2000";
    }

    return errors;
}

export default Validation