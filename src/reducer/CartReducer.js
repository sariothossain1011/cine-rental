
const initailState ={
    cartData : []
}

const cartReducer =(state,action)=>{

    switch(action.type){
        case "ADD_TO_CART":
            return{
                cartData:[...state.cartData,action.payload]
            }
        breack
        case "REMOTE_FORT_CART":
            return {
                ...state,
                cartData:state.cartData.filter((item)=>item.id !== action.payload.id)
            }

        breack

        default:
            return state 
    }

}


export {initailState,cartReducer}