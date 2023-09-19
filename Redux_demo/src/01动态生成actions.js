// 导入actionCreator
const {nameChangeAction, addAgeAction} = require('./store/actionCreator')

const store = require('./store/index')

console.log('原始数据:', store.getState())

store.subscribe(() => {
  console.log('订阅数据变化:', store.getState())
})

// 当有多个相同type时，可以通过封装，动态生成action
store.dispatch(nameChangeAction('Leon'))
store.dispatch(nameChangeAction('KASHIN'))

store.dispatch(addAgeAction(10))
store.dispatch(addAgeAction(35))
