import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Imports */
import 'styles/pages/Login.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';

/* Utility Imports */
import Axios from 'utils/Axios';

/* Component Imports */
import FormInputText from 'components/form/FormInputText';
import FormInputPassword from 'components/form/FormInputPassword';

/* Firebase Imports */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, firebaseAuthProvider } from 'services/firebase/auth/firebaseAuth';

/* Asset Imports */
import Google from 'assets/logos/GOOGLE.png';
import Facebook from 'assets/logos/FACEBOOK.png';

function Login() {

    /* Initialization */
    const initData = { account: '', password: '' };
    const err = {};

    /* useNavitgate */
    const navigate = useNavigate();

    /* useState */
    const [formOptions, setFormOptions] = useState(false);

    const [data, setData] = useState(initData);
    const [error, setError] = useState({});
    const [result, setResult] = useState([]);

    /* Functions */
    const signInWithGoogle = () => {
        signInWithPopup(firebaseAuth, firebaseAuthProvider.google)
            .then(result => {
                // Generates Google Access Token which can be used to access Google API
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // Signed In User Info
                const user = result.user;
                setResult([credential, token, user]);
            }).catch((err) => {
                const errCode = err.code;
                const errMsg = err.message
                const errEmail = err.customData.email;
                const errCredentialType = GoogleAuthProvider.credentialFromError(err);
                console.log([errCode, errMsg, errEmail, errCredentialType]);
            })
    };

    const signIn = () => {
        Axios.post('accounts/login', data, {
            headers: { 'Content-Type':  'application/json'}
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.message)
                    navigate('/dashboard');
                }
            })
            .catch(err => {
                alert(`${err.response.status}: ${err.response.data.message}`);
        })
    };

    return (
        <main className='login'>
            <div className='login_form'>
                <div className='login_form_container'>
                    <div className='form_header'>
                        <h5>Stephen Phyo's</h5>
                        <h2>Authentication</h2>
                    </div>
                    <FormInputText
                        label='Enter Username or Email Address'
                        autoFocus
                        onChange={(e) => setData({ ...data, account: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && signIn()}
                    />
                    <FormInputPassword
                        label='Enter Password'
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && signIn()}
                    />
                    <div className='forgot_password'>
                        <span className='form_link'
                            onClick={() => navigate('/resetpassword')}>
                            Forgot Password?
                        </span>
                    </div>
                    <div className='form_button'
                        onClick={() => signIn()}>
                        Login
                    </div>
                    <div className='login_form_footer'>
                        <span className='label'>Don't have an account?</span>
                        <span className='form_link' onClick={() => navigate('/register')}>Register</span>
                    </div>

                    <section className={`login_form_options ${!formOptions && 'close'}`}>
                        <div className='login_form_options_button'
                            onClick={() => setFormOptions(!formOptions)}>
                            <div className='login_form_options_button_inner'>
                                OR
                            </div>
                        </div>
                        <div className='login_form_options_container'>
                            <div className='option'>
                                <div className='option_inner google'
                                    onClick={() => signInWithGoogle()}>
                                    <img className='option_logo' src={Google} alt='Google' />
                                    <div className='option_text'>Login with Google</div>
                                </div>
                            </div>
                            <div className='option'>
                                <div className='option_inner facebook'>
                                    <img className='option_logo' src={Facebook} alt='Facebook' />
                                    <div className='option_text'>Login with Facebook</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Login;