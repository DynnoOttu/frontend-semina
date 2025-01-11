import { thunk } from "redux-thunk";
import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import notifReducer from "./notif/reducer";

const composerEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancers(applyMiddleware(thunk))
);

export default store;
