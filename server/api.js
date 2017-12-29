// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
const models = require('./db')
const express = require('express')
const router = express.Router()

/** ************ 创建(create) 读取(get) 更新(update) 删除(delete) ************ **/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  })
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('createAccount successed')
    }
  })
})
// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
  console.log(req.query)
  console.log('===============')
  // 通过模型去查找数据库
  models.Login.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// 测试
router.get('/api/test', (req, res) => {
  let testData = {code: 200, data: ['Hello World!'], msg: 'success'}
  res.send(testData)
})

module.exports = router