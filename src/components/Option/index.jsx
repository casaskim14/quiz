import React from 'react';
import PropTypes from 'prop-types';

export default function RadioOption({
  field: { name, value }, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  questionId,
  choices,
  ...props
}) {
  return (
    <div className="flex flex-col">
      {choices.map((choice, index) => (
        <label
          key={choice.id}
          htmlFor={`${questionId}_${choice.id}`}
          className={`flex justify-start btn-rounded my-3 py-4 px-8 text-left ml-4 rounded-full border-2 ${
            value === choice.id
              ? 'bg-green-400 text-white font-black '
              : 'bg-white '
          }hover:bg-green-200 focus:ring-green-300 `}
          style={
            {
              // color: 'black',
              // cursor: 'pointer',
              // width: '300px',
            }
          }
        >
          {value === choice.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-400 "
              style={{
                backgroundColor: '#EDE8E3',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                marginRight: '1rem',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <p className="text-center font-black text-3xl text-gray-700 rounded-full bg-white flex items-center justify-center font-mono h-8 w-8 text-md bg-gray-300">
              {index + 1}
            </p>
          )}

          <p className="ml-4 text-xl">
            {choice.value}
          </p>
          <input
            type="radio"
            id={`${questionId}_${choice.id}`}
            name={name}
            className="hidden"
            onChange={() => {
              setFieldValue(name, choice.id);
              setFieldTouched(name, true);

              try {
                document.getElementById(
                  'btnFinish',
                ).disabled = false;
              } catch (e) {}
            }}
          />
        </label>
      ))}
    </div>
  );
}

RadioOption.propTypes = {
  field: PropTypes.shape({}).isRequired,
  form: PropTypes.shape({}).isRequired,
  // questionId: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.shape({}))
    .isRequired,
};
