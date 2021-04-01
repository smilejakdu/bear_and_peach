import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Mypage from "./pages/Mypage/Mypage";
import Products from "./pages/Products/Products";
import Today from "./pages/Today/Today";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route
              exact="exact"
              path={["/", "/today"]}
              component={Today}/>
            <Route
              exact="exact"
              path="/products"
              component={Products}/>
            <Route
              exact="exact"
              path="/mypage"
              component={Mypage}/>
            <Route
              render={({ location }) => (
                <div>
                  <h2>존재하지 않는 페이지 입니다.</h2>
                  <p>{location.pathname}</p>
                </div>
              )}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};
export default App;
