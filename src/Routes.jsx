import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import CountProvider from './Providers/CountProvider';

const Routes = () => {
  return (
    <CountProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </CountProvider>
  );
};

export default Routes;
