import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./containers/NavigationContainer";
import Router from "./Router";
import { Provider } from 'react-redux'
import store from './redux/store'
import { APIProvider } from "@vis.gl/react-google-maps";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
          <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
            <Router />
        
          </APIProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;