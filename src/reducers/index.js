import { combineReducers } from "redux";

import products from "./products";
import {Cart} from "./Cart";
import Auth from "./Auth";
import Filter from "./Filter"
export const   Red = combineReducers({products,Cart,Auth,Filter});