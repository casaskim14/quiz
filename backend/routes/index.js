import quizRouter from './quizRoutes';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('hello world');
    });

    app.use('/api', quizRouter);
  }
}
