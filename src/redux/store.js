import { thunk } from "redux-thunk";
import authReducer from "./auth/reducer";
import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

const composerEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancers(applyMiddleware(thunk))
);

export default store;
