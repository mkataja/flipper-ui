import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

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
        <Header as='h2'>Kaikki memot</Header>
        <List size='large'>
          {this.state.memos.map(memo => {
            return (
              <List.Item key={memo.name}>
                <List.Content>
                  <List.Header>
                    <Link to={{ pathname: `/memo/${memo.name}` }}>
                      {memo.name}
                    </Link>
                  </List.Header>
                  <List.Description>
                    {memo.created_on} ({memo.created_by})
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </div>
    )
  }
}

export default MemoList;
