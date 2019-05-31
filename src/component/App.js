import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'page';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </div>
  );
}; 

export default App;