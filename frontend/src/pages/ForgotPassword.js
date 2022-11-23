import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* 3rd Party Package Imports */
import ReCAPTCHA from 'react-google-recaptcha';

/* CSS Imports */
import 'styles/pages/ForgotPassword.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormError.css';

/* Utility Imports */
import Axios from 'utils/Axios';

/* Component Imports */
import FormInputText from 'components/form/FormInputText';

/* Function Imports */
import validateEmail from 'functions/validateEmail';

function ForgotPassword() {

    /* useNavigate */
    const navigate = useNavigate();

    /* useState */
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [human, setHuman] = useState(false);

    /* useRef */
    const recaptchaRef = useRef();

    /* Functions */
    const checkEmail = () => {
        if (email.length === 0) {
            setError('Email address must not be empty')
            return false;
        }
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return false;
        }
        return true;
    };

    const checkRecaptcha = async () => {
        const recaptchaToken = recaptchaRef.current.getValue();
        // recaptchaRef.current.reset();

        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

        const result = await Axios.post(verifyURL, '_', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });

        console.log(result);
    };

    const resetPassword = () => {
        // if (checkEmail()) {
        //     setError('');
        //     Axios.post('/accounts/resetpassword', { email }, {
        //         headers: { 'Content-Type': 'application/json' }
        //     })
        //         .then(res => {
        //             if (res.status === 200) {
        //                 navigate(`/resetpassword/${res.data._id}`);
        //             }
        //         })
        //         .catch(err => {
        //             if (err.response.status === 404) {
        //                 console.log('OK')
        //                 setError('Account does not exist');
        //             }
        //         })
        // }
    };

    return (
        <main className='forgotpwd'>
            <div className='forgotpwd_form'>
                <div className='forgotpwd_form_container'>
                    <div className='form_header'>
                        <h2>Forgot Password?</h2>
                    </div>
                    <FormInputText
                        label='Enter Email Address'
                        autoFocus
                        onChange={(e) => {
                            setError('');
                            setEmail(e.target.value);
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && resetPassword()} />
                    <div className='form_error'>
                        <span>{error}&nbsp;</span>
                    </div>
                    <div className='form_captcha'>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                            onChange={() => checkRecaptcha()}
                            theme='dark' />
                    </div>
                    <div className='form_button'
                        onClick={() => resetPassword()}>
                        Reset Password
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ForgotPassword;