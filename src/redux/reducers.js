import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
});

export default rootReducer;