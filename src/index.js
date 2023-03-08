import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import  globalReducer  from "./store/reducers/globalSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./store/rtk.service";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});

setupListeners(store.dispatch)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
