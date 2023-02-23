import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import Option from '../Option';

function Question({ question }) {
  const props = {
    component: Option,
    name: question.id,
    id: question.id,
    questionId: question.id,
    choices: question.choices,
    value: '',
  };

  document.getElementById(
    'currentWeight',
  ).innerHTML = question?.score;

  return (
    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    //   <div className="w-full md:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      <p
        className="text-sm font-semibold sm:text-3xl text-center"
        style={{ color: '#191D63' }}
      >
        {question?.question}
      </p>
      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10">
        <Field {...props} />
      </div>
    </div>
    //   </div>
    // </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // type: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    // choices: PropTypes.arrayOf().isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
