const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}
