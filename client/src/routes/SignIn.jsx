import { React, useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import { UserContext } from "../contexts/UserContext";

import "./styles/SignIn.css";

const SignIn = () => {
  const { signIn } = useContext(UserContext);

  const inputFields = {
    Email: { type: "email", required: true },
    Password: { type: "password", required: true },
  };

  const onSignIn = (event) => {
    const login = event.target[0].value;
    const password = event.target[1].value;

    signIn(login, password);
  };

  return (
    <div className="sign-in-page-container">
      <Form
        inputs={inputFields}
        formTitle="Welcome"
        className="sign-in-form"
        buttonName="Sign In"
        onSubmit={onSignIn}
      />
      <Link to="/sign-up" className="create-an-account-link">
        <span>Don't have an account?</span>
      </Link>
    </div>
  );
};

export default SignIn;
