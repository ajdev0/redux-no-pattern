import "./App.css";
import store from "./store/store";
import { bugAdd, bugRemove, bugResolve } from "./store/actions";
import React, { Component } from "react";

// console.log(store);

const unsubscribe = store.subscribe(() =>
  console.log("Store Changed", store.getState())
);
store.dispatch(bugAdd("Bug 1"));
// store.dispatch(bugAdd("Bug 2"));
store.dispatch(bugResolve(1));
// unsubscribe();
// store.dispatch(bugRemove(1));

console.log(store.getState());

class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default App;
