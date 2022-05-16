import { ADD_FAVORITE } from "../actionconstants/ActionCn"

export const AddFavoriteProduct = (product) => (dispatch)=> {


    dispatch({type:ADD_FAVORITE,payload:product})
  
}