import React from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Imports */
import 'styles/pages/Landing.css';
import 'styles/components/FormHeader.css';

function Landing() {

    /* useNavigate */
    const navigate = useNavigate();

    return (
        <main className='landing'>
            <div className='landing_form'>
                <div className='landing_form_container'>
                    <div className='form_header'>
                        <h5>Welcome to</h5>
                        <h3>Stephen Phyo's</h3>
                        <h2>Authentication System</h2>
                    </div>
                    <div className='form_buttons'>
                        <div id='btn_login'
                            onClick={() => { navigate('/login') }}>
                            Login
                        </div>
                        <div id='btn_register'
                            onClick={() => { navigate('/register') }}>
                            Register</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Landing;