import { ADD_TO_CART } from "../actionconstants/ActionCn";

export const Cart = (cart = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const { id } = payload;
      const { Price, Photo, Title } = payload.data();
      const cartItem = cart.find((item) => item.id === id);
      const Product = { id, Title, Price, Photo, Amount: 1, SubTotal: Price };
      console.log(cartItem);
      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              Amount: item.Amount + 1,
              SubTotal: item.Amount * Price,
            };
          }
          return item;
        });
        // debugger ;
        return [...newCart];
      }

      return [...cart, Product];

    default:
      return cart;
  }
};
