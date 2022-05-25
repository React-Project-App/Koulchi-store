import { combineReducers } from "redux";

import products from "./products";
import {Cart} from "./Cart";
import Auth from "./Auth";
import Filter from "./Filter"
import Categories from "./Categories"
import FilterCategorie from "./FilterCategorie"
import ListUsers from "./ListUsers";

export const   Red = combineReducers({products,Cart,Auth,Filter,Categories,FilterCategorie,ListUsers});