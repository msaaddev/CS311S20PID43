import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='hp_sign_up'>
            <p>
                <span role='img'>👨🏻‍💻</span> Create An Account
            </p>
            <div className='hp_sign_up_inputs'>
                <div className='hp_align_name'>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' id='hp_signup_name' />
                </div>
                <div className='hp_align_email'>
                    <label htmlFor='Email'>Email</label>
                    <input type='email' id='hp_signup_email' />
                </div>
                <div className='hp_align_password'>
                    <label htmlFor='Password'>Password</label>
                    <input type='password' id='hp_signup_password' />
                </div>
            </div>
            <div className='hp_signup_btn'>
                <button>Sign Up!</button>
            </div>
            <div className='hp_signin'>
                <h5>
                    Already have an account? <Link to='/login'> Sign In</Link>
                </h5>
            </div>
        </div>
    );
};

export default SignUp;