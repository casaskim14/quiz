import React from 'react';
import PropTypes from 'prop-types';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import QuizHome from '../../components/QuizHome/quizHome';
// import Header from '../../components/Header';

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div data-testid="main-wrapper">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div className="w-full xxl:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          {/* <Header /> */}
          {/* <QuizHome /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
