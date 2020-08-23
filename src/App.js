import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Collar from "./Product/Collar";
import Cuffs from "./Product/Cuff";
import Back from "./Product/Back";
import Front from "./Product/Front";
import Pocket from "./Product/Pocket";
import Itempage from './itemPage/Itempage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/Collar" component={Collar} />
          <Route path="/Cuffs" component={Cuffs} />
          <Route path="/Back" component={Back} />
          <Route path="/Front" component={Front} />
          <Route path="/Pocket" component={Pocket} />
          <Route path="/:item_id" component={Itempage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
