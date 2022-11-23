import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS Imports */
import 'styles/pages/RegisterSuccess.css';
import 'styles/components/FormHeader.css';
import 'styles/components/FormButton.css';
import 'styles/components/FormLink.css';

function Dashboard() {

    /* useNavigate */
    const navigate = useNavigate();

    return (
        <main className='dashboard'>
            <div className='dashboard_form'>
                <div className='dashboard_form_container'>
                    <div className='form_header'>
                        <h2>Login Successful</h2>
                    </div>
                    <div className='form_text'>
                        You have successfully logged in
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;