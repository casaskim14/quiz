const asyncHandler = require('express-async-handler');

const Quiz = require('../models/quizModel');

const getQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.find();
  res.status(200).json(quiz);
});

const setQuiz = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('add text');
  }
  const quiz = await Quiz.create({
    text: req.body.text,
  });
  res.status(200).json(quiz);
});

const updateQuiz = asyncHandler(
  async (req, res) => {
    res.status(200).json({
      message: `Update quiz ${req.params.id}`,
    });
  },
);

const deleteQuiz = asyncHandler(
  async (req, res) => {
    res.status(200).json({
      message: `Update quiz ${req.params.id}`,
    });
  },
);

module.exports = {
  getQuiz,
  setQuiz,
  updateQuiz,
  deleteQuiz,
};
