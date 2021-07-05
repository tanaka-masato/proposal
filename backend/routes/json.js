var express = require('express');
const app = require('../app');
var router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/retort', function (req, res, next) {
  const fs = require('fs');
  const json = JSON.parse(fs.readFileSync('./json/retort.json', 'utf8'));
  res.header('Content-Type', 'application/json; charset=utf-8')
  // res.send(param);
  res.json({
    json
  });
  console.log(json);
});

/* サンプルAPI② 
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', function (req, res, next) {
  var param = {
    "result": "Hello World !"
  };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

router.post('/retort', function (req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')
  console.log("post");
  console.log(req.body);
  console.log(req.body.height)


  let desirable_weight = desirable_weight_calculation(req.body.height);
  console.log(desirable_weight)


  let bmr = bmr_calculation(req.body.height, req.body.weight, req.body.age, req.body.sex);
  console.log(bmr)

  let tdee = tdee_calculation(bmr, req.body.work_level)
  console.log(tdee)

  let pfc_balance = pfc_balance_calculation(tdee, desirable_weight, req.body.weight)
  console.log(pfc_balance)
  
});

// 適正体重の計算
function desirable_weight_calculation(height) {
  height /= 100
  let appropriate_weight = height * height * 22
  return appropriate_weight
}

// 基礎代謝の計算
function bmr_calculation(height, weight, age, sex) {
  let basal_metabolism_rate = 0
  if (sex == "男") {
    basal_metabolism_rate = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
  } else if (sex == "女") {
    basal_metabolism_rate = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593
  }
  return basal_metabolism_rate
}

// １日の総カロリーの計算
function tdee_calculation(bmr, work_level) {
  return tdee = bmr * work_level
}

function pfc_balance_calculation(tdee, desirable_weight, weight) {
  let pfc_balance = new Array(3)

  if (desirable_weight < weight){
    tdee -= 500
    pfc_balance[0] = tdee * 0.2 / 4
    pfc_balance[1] = tdee * 0.2 / 9
    pfc_balance[2] = tdee * 0.6 / 4
  } else{
    tdee += 500
    pfc_balance[0] = tdee * 0.2 / 4
    pfc_balance[1] = tdee * 0.2 / 9
    pfc_balance[2] = tdee * 0.6 / 4
  }


  return pfc_balance
}
module.exports = router;