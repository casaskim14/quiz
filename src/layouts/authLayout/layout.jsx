import React from 'react';
import {
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../../components/Title';

function AuthLayout({ user }) {
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    // <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="w-full max-w-md space-y-8 text-center">

    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg text-center">
        <Title />
        <Outlet />
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;
