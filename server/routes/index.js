module.exports = function (app) {
  const API_ENDPOINT = '/api';
  const API_VERSION = 'v1';

  app.use(
    `${API_ENDPOINT}/${API_VERSION}/exercises`,
    require('./exercises.routes'),
  );
  require('./exercises.routes');

  app.all('*', (req, res) => {
    res.sendStatus(404);
  });
};
