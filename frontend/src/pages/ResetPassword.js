import React, { useState, useEffect } from 'react';

/* CSS Imports */
import 'styles/pages/Login.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormInput.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';

function ResetPassword() {

    return (
        <main className='resetpwd'>
            <div className='resetpwd_form_container'>
                <div className='resetpwd_form'>
                    <div className='form_header'>
                        <h2>Reset Password</h2>
                    </div>
                    <div className='form_input'>
                        <input type='password' required='required' />
                        <span>Enter New Password</span>
                        <hr />
                    </div>
                    <div className='form_input'>
                        <input type='password' required='required' />
                        <span>Confirm Password</span>
                        <hr />
                    </div>
                    <div className='form_button'>Submit</div>
                </div>
            </div>
        </main>
    );
}

export default ResetPassword;