import './styles/SignUp.css';
import React from 'react';
import Form from '../components/Form';

const SignUp = () => {
  const inputFields = {
    Email: { type: 'email', required: true },
    Password: { type: 'password', required: true },
    'Confirm Password': { type: 'password', required: true },
  };

  const onSignUp = () => {
    console.log('sign up');
  };

  return (
    <Form
      inputs={inputFields}
      formTitle='Welcome'
      className='sign-up-form'
      buttonName='Sign Un'
      onSubmit={onSignUp}
    />
  );
};

export default SignUp;
