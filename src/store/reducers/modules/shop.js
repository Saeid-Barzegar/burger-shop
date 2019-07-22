
const initState = {
    shopList: []
}

const shop = (state = initState, action)=>{
    switch (action.type) {
        case 'LOAD_SHOP_LIST':
            return {
                ...state,
                shopList: action.payload
            }
    
        default:
            return state
    }
}

export default shop