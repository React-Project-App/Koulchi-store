import { combineReducers } from "redux";

import products from "./products";
import {Cart} from "./Cart";
import Auth from "./Auth";

export const   Red = combineReducers({products,Cart,Auth});