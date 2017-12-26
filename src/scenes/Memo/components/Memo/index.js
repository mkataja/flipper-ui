import React from 'react';

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
        <h3>{this.state.name}</h3>
        <div>{this.state.created_on} ({this.state.created_by})</div>
        <ul>
          {this.state.lines.map(line => {
            return (<MemoLine line={line} />);
          })}
        </ul>
      </div>
    )
  }
}

export default Memo;
