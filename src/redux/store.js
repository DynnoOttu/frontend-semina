import authReducer from "./auth/reducer";
const {
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} = require("redux");
const { thunk } = require("redux-thunk");

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
