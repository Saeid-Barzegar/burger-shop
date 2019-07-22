import * as actionTypes from './actionTypes'

const loadShops = payload =>{
    return{
        type: actionTypes.LOAD_SHOP_LIST,
        payload
    }
}

export const fetchShopList = ()=>{
    return async dispatch =>{
        await import('../../api/comparison.json')
        .then(data=> {
            return dispatch(loadShops(data.default))
        })
        .catch(error => console.log(error))
    }
}