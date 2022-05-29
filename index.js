const { cakeActions } = require("./app/features/cake/cakeSlice");
const store = require("./app/store");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restoked(3));

unsubscribe();
