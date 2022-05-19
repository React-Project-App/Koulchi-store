import {
  ADD_TO_CART,
  CLEAR_CART,
  DICRESAMOUNT,
  INCRESAMOUNT,
  REMOVE_FROM_CART,
} from "../actionconstants/ActionCn";
export const Cart = (cart = localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[], { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // const { id } = payloa
      
      console.log(payload);
      const cartItem = cart.find((item) => item.id === payload.id);

      console.log(cartItem);
      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === payload.id) {
            console.log(item.Amount)
            return {
              ...item,
              Amount: item.Amount + 1,
              SubTotal: (item.Amount+1) * item.Curprice,
            };
          }
          return item;
        });

        return [...newCart];
      }

      return [...cart, payload];
    case REMOVE_FROM_CART:
      const cartItemm = cart.filter((item) => {
        return item.id !== payload;
      });
      return [...cartItemm];
    case CLEAR_CART:
      return [];
    case INCRESAMOUNT:
      const ID = payload;
      const newCart = cart.map((item) => {
        if (item.id === ID) {
          return {
            ...item,
            Amount: item.Amount + 1,
            SubTotal: (item.Amount + 1) * item.Curprice,
          };
        }
        return item;
      });
      return [...newCart];
    case DICRESAMOUNT:
      

      const newCartt = cart.map((item) => {
        if (item.id === payload) {
          if (item.Amount > 1) {
            return {
              ...item,
              Amount: item.Amount - 1,
              SubTotal: (item.Amount - 1) * item.Curprice,
            };
          }
          else{
            console.log(item.Curprice)
            return {
              ...item,
              Amount: 1,
              SubTotal: item.Curprice,
            };
          }
        }
        
        return item;
        
      });
      return [...newCartt];

    default:
      return cart;
  }
};
