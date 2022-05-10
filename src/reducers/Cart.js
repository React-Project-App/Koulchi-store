import { ADD_TO_CART,CLEAR_CART,DICRESAMOUNT,INCRESAMOUNT,REMOVE_FROM_CART } from "../actionconstants/ActionCn";
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
      case REMOVE_FROM_CART:
      const cartItemm = cart.filter((item) => { return item.id !==payload} );   
        return [...cartItemm];
      case CLEAR_CART:      
        return [];
      case INCRESAMOUNT:  
        const  ID  = payload;
        console.log(payload)
        const newCart=cart.map((item) =>{
          if (item.id === ID) {
            
            return { 
              ...item,
              Amount: item.Amount + 1,
              SubTotal: (item.Amount+1) * item.Price
              
            };
           

          }
          
          return item
        })
        return [...newCart]
        case DICRESAMOUNT:  
        const newCartt=cart.map((item) =>{
        if (item.id === payload)
          {         
            if (item.Amount >1){
             return { 
                ...item,
                Amount: item.Amount- 1,
                SubTotal: (item.Amount-1) * item.Price               
              };     }
              else{
                return { 
                  ...item,
                  Amount: 1,
                  SubTotal:  item.Price
                  
                };
              }
          }   
          return item
        })
        return  [...newCartt]
        
      default:
        return cart;
  }
};
