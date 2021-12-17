import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";
//creta store
const store = createStore(reducer, devToolsEnhancer({ trace: true })); // return store element

export default store;
