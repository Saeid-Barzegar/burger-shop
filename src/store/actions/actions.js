import * as actionTypes from './actionTypes'

const loadShops = payload =>{
    return{
        type: actionTypes.LOAD_SHOP_LIST,
        payload
    }
}


export const fetchShopList = ()=>{
    return async dispatch =>{
        await fetch('https://burgervergleich.autoteile.check24.de/api/comparison.json')
        .then(response=> response.json())
        .then(data=> dispatch(loadShops(data)))
        .catch(error => console.log(error))
    }
}