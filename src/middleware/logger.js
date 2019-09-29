//Loginning in console
const logger = store => next => action => {
  console.log('The Action Is: ', action)
  const value = next(action)
  console.log('The New State Is: ', store.getState())
  return value
}
export default logger
