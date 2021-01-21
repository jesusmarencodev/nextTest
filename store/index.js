import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "../reducers";

const makeStore = () => {
  // Create store
  const storeWrapper = createStore(reducers, composeWithDevTools());

  // Return store
  return storeWrapper;
};

// export an assembled wrapper
export const store = createWrapper(makeStore, { debug: false });