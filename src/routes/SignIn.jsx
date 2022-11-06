import './styles/SignIn.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const SignIn = () => {
  const inputFields = {
    Email: { type: 'email', required: true },
    Password: { type: 'password', required: true },
  };

  const onSignIn = () => {
    console.log('sign in');
  };

  return (
    <div className='sign-in-page-container'>
      <Form
        inputs={inputFields}
        formTitle='Welcome'
        className='sign-in-form'
        buttonName='Sign In'
        onSubmit={onSignIn}
      />
      <Link to='/sign-up' className='create-an-account-link'>
        <span>Doesn't have an account?</span>
      </Link>
    </div>
  );
};

export default SignIn;
