import React, { forwardRef } from 'react';

/* CSS Imports */
import 'styles/components/FormInputText.css';

const FormInputText = forwardRef((props, ref) => {
    return (
        <div
            className='form_input_text'>
            <input
                type='text'
                required='required'
                ref={ref}
                {...props} />
            <span id='label'>{props.label}</span>
            <hr />
        </div>
    );
});

export default FormInputText;