export const formula = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'FORMULA':
      return {
        formula: action.formula
      }
    default:
      return state
  }
}