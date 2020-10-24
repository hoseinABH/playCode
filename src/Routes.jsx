import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Starwars from './Pages/Starwars/Starwars';
import CountProvider from './Providers/CountProvider';
import { ReactQueryDevtools } from 'react-query-devtools';
const Routes = () => {
  return (
    <CountProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/starwars" component={Starwars} />
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools />
    </CountProvider>
  );
};

export default Routes;
