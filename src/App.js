import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
