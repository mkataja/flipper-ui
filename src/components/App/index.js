import React from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

import HomeScene from '../../scenes/Home';
import MemoScene from '../../scenes/Memo';

const TopMenu = () => (
  <Menu fixed='top' borderless size='massive' color='orange'>
    <Container>
      <Menu.Item header>
        flipper<sub>UI</sub>
      </Menu.Item>
      <Menu.Item as={NavLink} exact to='/'>Koti</Menu.Item>
      <Menu.Item as={NavLink} to='/memo'>Memo</Menu.Item>
    </Container>
  </Menu>
)

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Ei löytyny :(</p>
    <p>Mene <Link to='/'>kotiin</Link>?</p>
  </div>
);

const Main = () => (
  <main>
    <Segment style={{ padding: '5em 0em' }}>
      <Container>
        <Switch>
          <Route exact path='/' component={HomeScene} />
          <Route path='/memo' component={MemoScene} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Segment>
  </main>
)

const App = () => (
  <div>
    <Segment vertical>
      <TopMenu />
      <Main />
    </Segment>
  </div>
)

export default App;
