import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/mainLayout';
import QuizHome from './components/QuizHome/quizHome';
import QuizTemplate from './components/QuizTemplate/quizTemplate';
import Results from './components/Results';
import QuizLayout from './layouts/quizLayout';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route
        path="dashboard"
        element={<MainLayout />}
      >
        <Route index element={<Home />} />
        <Route
          path="quiz"
          element={<QuizLayout />}
        />
        <Route
          path="results"
          element={<Results />}
        />
      </Route>
      <Route path="quiz" element={<QuizLayout />}>
        <Route index element={<Quiz />} />
      </Route>
      <Route
        path="login"
        element={<AuthLayout />}
      >
        <Route index element={<Login />} />
      </Route>
      <Route
        path="register"
        element={<AuthLayout />}
      >
        <Route index element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
