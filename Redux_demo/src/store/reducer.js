const {CHANGE_NAME, ADD_AGE} = require('./constants')
// 定义初始化state
const initialState = {
  name: 'david',
  age: 35
}
// reducer是一个纯函数，返回处理过后的state
// reducer有2个参数 1.store中保存的state 2.需要更新的action(dispatch中传入的action)
// 返回值：reducer的返回值会作为store之后储存的state
// 第一次执行时传进来的state肯定是undefined,所以必须给state一个初始值
function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_NAME:
      // 必须返回一个新对象，否则页面不会更新，类似pureComponent中的浅层比较
      return {...state, name: action.name} // name属性会被覆盖，从而被更新
    case ADD_AGE:
      return {...state, age: state.age + action.add}
    // 没有变化时(第一次执行时)返回默认值
    default: 
      return state
  }
}

module.exports = reducer