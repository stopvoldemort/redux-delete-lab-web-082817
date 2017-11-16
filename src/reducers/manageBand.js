let id = 0

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const newBand = {text: action.band.text, id: id}
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      const newBands = state.bands.filter(band => {
        return band.id !== parseInt(action.id, 10)
      })
      return {bands: newBands}
    default:
      return state;
  }
};
