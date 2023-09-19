const {createStore} = require('redux')

// 导入reducer
const reducer = require('./reducer')

// 传入的reducer会被自动执行
const store = createStore(reducer)
module.exports = store