import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Imports */
import 'styles/pages/Register.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';
import 'styles/components/FormError.css';

/* Utility Imports */
import Axios from 'utils/Axios';

/* Component Imports */
import FormInputText from 'components/form/FormInputText';
import FormInputPassword from 'components/form/FormInputPassword';

/* Function Imports */
import validateEmail from 'functions/validateEmail';
import validatePassword from 'functions/validatePassword';

/* Asset Imports */
import avatar01 from 'assets/images/avatar01.png';
import avatar02 from 'assets/images/avatar02.png';
import avatar03 from 'assets/images/avatar03.png';
import avatar04 from 'assets/images/avatar04.png';
import avatar05 from 'assets/images/avatar05.png';

function Register() {

    /* Initialization */
    const initData = {
        firstName: '', lastName: '', username: '', email: '', password: '',
        cfmPassword: '', dob: '',
    };
    const err = {};
    const avatar_list = [avatar01, avatar02, avatar03, avatar04, avatar05];
    // Get Random Item from an Array
    const avatar = avatar_list[Math.floor(Math.random() * avatar_list.length)];

    /* useNavigate */
    const navigate = useNavigate();

    /* useState */
    const [data, setData] = useState(initData);
    const [error, setError] = useState({});

    /* Functions */
    // Data Checking & Error Handling
    const checkUsername = (username) => {
        if(username.length === 0) {
            err['username'] = 'Please choose a username';
        }
        else if (username.length < 3) {
            err['username'] = 'Username is too short';
        }
    };

    const checkEmail = (email) => {
        if (email.length === 0) {
            err['email'] = 'Email address must not be empty';
        }
        else if (!validateEmail(email)) {
            err['email'] = 'Enter a valid email address';
        }
    };

    const checkPassword = (initPwd, cfmPwd) => {
        if (initPwd.length === 0) {
            err['password'] = 'Password must not be empty';
        }
        else if (initPwd.length < 8) {
            err['password'] = 'Password length must be greater than 8';
        }
        else if (initPwd.length > 24) {
            err['password'] = 'Password length must be less than 24';
        }
        else if (!validatePassword(data['password'])) {
            err['password'] = 'Password must contain at least one uppercase, lowercase, number and special character';
        }
        else if (cfmPwd !== initPwd) {
            err['cfmPassword'] = 'Passwords do not match';
        }
    };

    const checkData = () => {
        checkUsername(data['username']);
        checkEmail(data['email']);
        checkPassword(data['password'], data['cfmPassword']);

        if (Object.keys(err).length !== 0) {
            setError(err);
            return false;
        } else {
            return true;
        }
    };

    const register = async () => {
        if (checkData()) {
            Axios.post('/accounts/register', data, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => {
                    if (res.status === 201) {
                        navigate('/register/success');
                    }
                })
                .catch(err => {
                    alert(`${err.response.status}: ${err.response.data.message}`);
                })
        }
    };

    return (
        <main className='register'>
            <div className='register_form'>
                <div className='register_form_container'>
                    <div className='form_header'>
                        <h2>Register Account</h2>
                    </div>
                    <div className='avatar'>
                        <div className='avatar_container'>
                            <div className='avatar_container_img'>
                                <img src={avatar} alt='avatar' />
                            </div>
                        </div>
                    </div>
                    <FormInputText
                        label='Enter First Name'
                        autoFocus
                        onChange={(e) => setData({ ...data, firstName: e.target.value })} />
                    <div className='form_error'>
                        <span>&nbsp;</span>
                    </div>
                    <FormInputText
                        label='Enter Last Name'
                        onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                    <div className='form_error'>
                        <span>&nbsp;</span>
                    </div>
                    <FormInputText
                        label='Enter Username'
                        onChange={(e) => setData({ ...data, username: e.target.value })} />
                    <div className='form_error'>
                        <span>{'username' in error && error['username']}&nbsp;</span>
                    </div>
                    <FormInputText
                        label='Enter Email Address'
                        onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <div className='form_error'>
                        <span>{'email' in error && error['email']}&nbsp;</span>
                    </div>
                    <FormInputPassword
                        label='Enter Password'
                        onChange={(e) => setData({ ...data, password: e.target.value })} />
                    <div className='form_error'>
                        <span>{'password' in error && error['password']}&nbsp;</span>
                    </div>
                    <FormInputPassword
                        label='Confirm Password'
                        onChange={(e) => setData({...data, cfmPassword: e.target.value})} />
                    <div className='form_error'>
                        <span>{'cfmPassword' in error && error['cfmPassword']}&nbsp;</span>
                    </div>
                    <div className='form_input_text'>
                        <input type='date' required='required'
                            onChange={(e) => setData({ ...data, dob: e.target.value })} />
                        <span>Choose your Birthday</span>
                        <hr />
                    </div>
                    <div className='form_error'>
                        <span>&nbsp;</span>
                    </div>
                    <div className='form_button'
                        onClick={() => register()}>
                        Register
                    </div>
                    <div className='register_form_footer'>
                        <span className='label'>Already have an account?</span>
                        <span className='form_link' onClick={() => navigate('/login')}>Login</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;