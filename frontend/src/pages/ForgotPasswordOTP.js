import React, { useState, useEffect } from 'react';

/* CSS Imports */
import 'styles/pages/ForgotPasswordOTP.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormInputText.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';
import 'styles/components/FormText.css';

function ForgotPasswordOTP() {

    return (
        <main className='forgotpwdotp'>
            <div className='forgotpwdotp_form'>
                <div className='forgotpwdotp_form_container'>
                    <div className='form_header'>
                        <h2>Verify it's you</h2>
                    </div>
                    <div className='form_text'>
                        <p>
                            Email with a 6-digit OTP for password reset has been sent to your email address:
                        </p>
                        <p id='email'>stephenphyo@gmail.com</p>
                        <p>Please check your email and enter OTP to reset your password.</p>
                    </div>
                    <div className='form_input'>
                        <input type='text' required='required' />
                        <span>Enter OTP</span>
                        <hr />
                    </div>
                    <div className='form_link'>
                        Resend OTP
                    </div>
                    <div className='form_button'>Continue</div>
                </div>
            </div>
        </main>
    );
}

export default ForgotPasswordOTP;