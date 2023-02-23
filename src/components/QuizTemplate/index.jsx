import React, {
  useState,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Questions from './quizTemplate';
import Results from '../Results';

function Quiz({ getQuestions, questionReducer }) {
  const navigate = useNavigate();
  const [initialQuestions, setInitialQuestions] =
    useState(0);
  const [valueInitial, setInitialValue] =
    useState(0);
  const [answer, setAnswer] = useState({});
  const [resultArray, setResultArray] = useState(
    [],
  );
  const [viewResult, setViewResult] =
    useState(false);
  const questionList =
    questionReducer[initialQuestions];

  console.log('answer', questionReducer);
  const handleChange = value => {
    console.log(value);
    setAnswer(value);
  };

  const handeNext = () => {
    setResultArray([
      { id: questionList?.id, answer },
      ...resultArray,
    ]);
    if (initialQuestions < questionReducer.length)
      return setInitialQuestions(
        state => state + 1,
      );
  };

  const handleFinish = () => {
    setResultArray([
      { id: questionList?.id, answer },
      ...resultArray,
    ]);
    setViewResult(state => !state);
  };

  console.log('result', resultArray);

  useEffect(() => {
    getQuestions();
    handeNext();
  }, []);

  return (
    <div className="p-[30px] bg-slate-100 h-screen">
      {/*Upper Section  */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <span>Icon</span>
          <p>200</p>
        </div>
        <div className="flex flex-row">
          <p>Fantasy Quiz #156</p>
        </div>
        <div className="flex flex-row">
          <p>Close Button</p>
        </div>
      </div>

      {viewResult ? (
        <Results />
      ) : (
        <Questions
          valueInitial={valueInitial}
          questionList={questionList}
          initialQuestions={initialQuestions}
          questionReducer={questionReducer}
          handleChange={handleChange}
          handeNext={handeNext}
          handleFinish={handleFinish}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({
  questionReducer,
}) => ({
  questionReducer,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () =>
    dispatch({
      type: 'LOAD_QUESTION_REQUEST',
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);
