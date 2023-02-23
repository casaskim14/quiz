// const express = require('express')
// const router = express.Router()
// const {
//     getQuiz,
//     setQuiz,
//     updateQuiz,
//     deleteQuiz
// } = require('../controllers/quizController')

// router.route('/').get(getQuiz).post(setQuiz)
// router.route('/:id').put(updateQuiz).delete(deleteQuiz)

// module.exports = router
// ***************************************************************************

const express = require('express');
const {
  JsonDB,
  Config,
} = require('node-json-db');

const db = new JsonDB(
  new Config('db', true, false, '/'),
);

const quizRouter = express.Router();

quizRouter.post('/submit', async (req, res) => {
  const ObjectId = (
    m = Math,
    d = Date,
    h = 16,
    s = s => m.floor(s).toString(h),
  ) =>
    s(d.now() / 1000) +
    ' '
      .repeat(h)
      .replace(/./g, () => s(m.random() * h));

  const answers = [];
  let userId = 0;

  console.log(Object.entries(req.body));

  for (const key in req.body) {
    if (key === 'userId') {
      userId = req.body[key];
    } else {
      answers.push({
        questionId: key,
        answer: req.body[key],
      });
    }
  }

  try {
    const data = await db.getData('/questions');

    const score = data.reduce(
      (p, c) => {
        const ans = answers.find(
          a => Number(a.questionId) === c.id,
        );

        if (c.answer === ans.answer) {
          return {
            correct: p.correct + 1,
            points: p.points + c.score,
          };
        }

        return p;
      },
      {
        correct: 0,
        points: 0,
      },
    );

    db.push(
      '/results',
      [
        {
          id: ObjectId(),
          user_id: userId,
          answers,
          correct: score.correct,
          score: score.points,
          datetime: new Date(),
        },
      ],
      false,
    );

    res.send(JSON.stringify(score));
  } catch (error) {
    console.error(error);
  }
});

export default quizRouter;
