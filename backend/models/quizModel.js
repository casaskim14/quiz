const mongoose = require('mongoose');

const quizSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  'Quiz',
  quizSchema,
);
