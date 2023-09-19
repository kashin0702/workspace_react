const {CHANGE_NAME, ADD_AGE} = require('./constants')

// 对action进行封装
const nameChangeAction = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
}
const addAgeAction = (add) => {
  return {
    type: ADD_AGE,
    add
  }
}

module.exports = {
  nameChangeAction,
  addAgeAction
}