import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  registerFields,
  registerInitialValues,
} from './registerFields';
import CustomForm from '../../components/CustomForm';

function Register({ register }) {
  return (
    <>
      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Register"
      />
      <div className="">
        <div className="mt-4 text-sm">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
