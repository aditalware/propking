import item from '../data/lands';
const items = (state = item, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    area: action.area,
                    city: action.city,
                    state:action.state,
                    country:action.country
                }
            ]
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, name: action.name } : item
            )
        default:
            return state
    }
}

export default items;