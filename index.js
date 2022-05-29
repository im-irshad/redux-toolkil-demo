const { cakeActions } = require("./app/features/cake/cakeSlice");
const { iceCreamActions } = require("./app/features/icecream/iceCreamSlice");
const { fetchUsers } = require("./app/features/user/userSlice");

const store = require("./app/store");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restoked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restoked(1));

// unsubscribe();
