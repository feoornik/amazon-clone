export const initialState = {
    basket: [],
    user: null,
};

{/* complies items in the basket and adds up the amount*/}
export const getBasketTotal = (basket) =>   basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':

            //Logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket

            //clone basket
            let newBasket = { ...state }.basket;

            //checked to see if the product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {

                //Item exist in basket remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as it is not in basket'
                );
            }
            return { ...state, basket: newBasket, };
            break;
          default:
            return state;
    }
}

export default reducer;