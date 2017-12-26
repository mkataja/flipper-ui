import React from 'react';
import { Link } from 'react-router-dom'

class MemoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memos: [],
    };
  }

  componentDidMount() {
    fetch('/api/memo')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        const memos = data;
        console.log(memos);
        this.setState(memos);
      });
  }

  render() {
    return (
      <div className='memo'>
        <h3>Kaikki memot</h3>
        <ul>
          {this.state.memos.map(memo => {
            return (
              <li key={memo.name}>
                <Link to={{ pathname: `/memo/${memo.name}` }}>
                  {memo.name}
                </Link> (
                {memo.created_on} by {memo.created_by})
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default MemoList;
