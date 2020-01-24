export const formula = (state = [], action) => {
  switch (action.type) {
    case 'FORMULA':
      return {
        formula: action.formula
      }
    default:
      return state
  }
}