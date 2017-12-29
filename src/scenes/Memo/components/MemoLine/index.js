import React from 'react';
import { List } from 'semantic-ui-react';
import Ago from 'react-ago-component';

function MemoLine(props) {
  return (
    <List.Item>
      <List.Icon color='orange' size='large' style={{ fontWeight: 'bold' }}>></List.Icon>
      <List.Content>
        <List.Header>
          {props.line.content}
        </List.Header>
        <List.Description>
          <Ago date={props.line.created_on} /> ({props.line.created_by})
      </List.Description>
      </List.Content>
    </List.Item>
  );
}

export default MemoLine;
