var express = require('express');
var router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/retort', function(req, res, next) {
  const fs = require('fs');
  const json = JSON.parse(fs.readFileSync('./json/retort.json','utf8'));
  res.header('Content-Type', 'application/json; charset=utf-8')
  // res.send(param);
  res.json({json});
  console.log(json);
});

/* サンプルAPI② 
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

router.post('/retort', function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')
  console.log("post");
  console.log(req.body);
});

router.options('/', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8')
  console.log("options");
  // console.log(res)
  console.log(req.body)
  console.log(res.body)
});

module.exports = router;