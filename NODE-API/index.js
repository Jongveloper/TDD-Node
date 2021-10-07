// const math = require('./math.js'); // 생성한 모듈을 사용
// const result = math.sum(1, 2);
// console.log(result);
const fs = require('fs');
// const data = fs.readFileSync('./data.txt', 'utf-8');
// console.log(data)
const data = fs.readFile('./data.txt', 'utf-8', function (err, data) {
  console.log(data);
});
