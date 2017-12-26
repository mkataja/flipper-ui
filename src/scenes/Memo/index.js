import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MemoList from './components/MemoList';
import Memo from './components/Memo';

class MemoScene extends React.Component {
  render() {
    return (
      <div>
        <h2>Memo</h2>
        <Switch>
          <Route exact path='/memo' component={MemoList} />
          <Route path='/memo/:memo_name' component={Memo} />
        </Switch>
      </div>
    );
  }
}

export default MemoScene;
