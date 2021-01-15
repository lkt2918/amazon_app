import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            /*find if the item is already in the cart ITEMS */
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    /* Use map to update the changed item*/ 
                    cartItems: state.cartItems.map(x => 
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {...state, cartItems: [...state.cartItems, item]};
            }
        default:
            return state;
    }
}