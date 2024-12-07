import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  console.log("previousAuth", previousAuth);

  currentAuth = store.getState().auth;

  console.log("currentAuth", currentAuth);

  if (currentAuth !== previousAuth) {
    localStorage.getItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
