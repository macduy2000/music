// import { createStore,applyMiddleware } from "redux";


// export default store
import { createStore,applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState={} // o day ta khai bao cho co le vi chua gan gi ca
const store= createStore(
    rootReducer,
    initialState,
   
    composeWithDevTools( applyMiddleware(thunk))
)
export default store