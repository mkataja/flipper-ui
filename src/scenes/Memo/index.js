import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import MemoList from './components/MemoList';
import Memo from './components/Memo';

class MemoScene extends React.Component {
  render() {
    return (
      <div>
        <Header as='h1' dividing>Memo</Header>
        <Switch>
          <Route exact path='/memo' component={MemoList} />
          <Route path='/memo/:memo_name' component={Memo} />
        </Switch>
      </div>
    );
  }
}

export default MemoScene;
