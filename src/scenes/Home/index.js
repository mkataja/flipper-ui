import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

class HomeScene extends React.Component {
  render() {
    return (
      <div>
        <Segment inverted>
          <Header as='h1' dividing>flipperUI</Header>
          <p>
            Herzlich Willkommen
          </p>
        </Segment>
      </div>
    );
  }
}

export default HomeScene;
