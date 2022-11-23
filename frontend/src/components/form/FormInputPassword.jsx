import React, { forwardRef, useState } from 'react';

/* CSS Imports */
import 'styles/components/FormInputPassword.css';

/* MUI Imports */
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

const FormInputPassword = forwardRef((props, ref) => {

    /* useState */
    const [viewPassword, setViewPassword] = useState(false);

    return (
        <div
            className='form_input_password'>
            <input
                type={viewPassword ? 'text' : 'password'}
                required='required'
                ref={ref}
                {...props} />
            <span id='label'>{props.label}</span>
            <span id='eye'>
                {
                    !viewPassword
                        ? <VisibilityRoundedIcon onClick={() => setViewPassword(true)} />
                        : <VisibilityOffRoundedIcon onClick={() => setViewPassword(false)} />
                }
            </span>
            <hr />
        </div>
    );
});

export default FormInputPassword;