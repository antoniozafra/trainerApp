import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";

import thunk, { ThunkMiddleware } from "redux-thunk";
import { authReducer } from "../reducers/authReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(

    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk))

)


