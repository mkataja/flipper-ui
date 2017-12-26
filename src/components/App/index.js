import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomeScene from '../../scenes/Home';
import MemoScene from '../../scenes/Memo';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/memo'>Memo</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeScene} />
      <Route path='/memo' component={MemoScene} />
    </Switch>
  </main>
)

const App = () => (
  <div>
    <h1>Flipper-ui</h1>
    <Header />
    <Main />
  </div>
)

export default App;
