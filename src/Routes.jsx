import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
