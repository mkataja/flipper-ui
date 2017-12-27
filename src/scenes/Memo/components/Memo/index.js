import React from 'react';
import { Header, List } from 'semantic-ui-react';

import MemoLine from '../MemoLine';

class Memo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.match.params.memo_name,
      lines: [],
    };
  }

  componentDidMount() {
    fetch(`/api/memo/${this.state.name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const memo = data['memo'];
        this.setState(memo);
      });
  }

  render() {
    return (
      <div className='memo'>
        <Header as='h2'>
          <Header.Content>
            {this.state.name}
          </Header.Content>
          <Header.Subheader>
            {this.state.created_on} ({this.state.created_by})
          </Header.Subheader>
        </Header>
        <List>
          {this.state.lines.map(line => {
            return (<MemoLine line={line} />);
          })}
        </List>
      </div>
    )
  }
}

export default Memo;
