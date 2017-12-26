import React from 'react';

function MemoLine(props) {
  return (
    <li>
      {props.line.content} ({props.line.created_on} by {props.line.created_by})
    </li>
  );
}

export default MemoLine;
