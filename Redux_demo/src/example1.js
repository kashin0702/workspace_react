const store = require('./store/index')

// getState方法获取store的state数据
console.log('原始数据:', store.getState())

// 订阅数据 当state发生改变时，自动执行suscribe内的回调函数, 订阅会返回一个函数，执行这个函数就能取消订阅
const unSubscribe = store.subscribe(() => {
  console.log('订阅数据变化:', store.getState())
})

// 修改数据操作 定义要执行的action
const action1 = {type: 'change_name', name: 'Leon'}
// 派发事件
store.dispatch(action1)

unSubscribe() // 取消订阅，下面这个action就不会被监听到

const action2 = {type: 'add_age', add: 10}
store.dispatch(action2)

