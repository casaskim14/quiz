import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  loginFields,
  loginInitialValues,
} from './loginFields';
import CustomForm from '../../components/CustomForm';

function Login({ login }) {
  return (
    <>
      <CustomForm
        initialValues={loginInitialValues}
        onSubmit={login}
        fields={loginFields}
        btnText="Sign in"
      />
      <div className="">
        <div className="mt-4 text-sm">
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
