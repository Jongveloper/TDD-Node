const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then((_) => {
  console.log('데이터베이스 연결!');
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
});
