import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Imports */
import 'styles/pages/RegisterSuccess.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';

function RegisterSuccess() {

    /* useNavigate */
    const navigate = useNavigate();

    return (
        <main className='regsuccess'>
            <div className='regsuccess_form'>
                <div className='regsuccess_form_container'>
                    <div className='form_header'>
                        <h2>Registration Successful</h2>
                    </div>
                    <div className='form_text'>
                        Your account 'stephenphyo@gmail.com' has been created successfully
                    </div>
                    <div className='form_button'
                        onClick={() => navigate('/login')}>
                        Go to Login
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegisterSuccess;