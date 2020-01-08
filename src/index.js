import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render() {
    return (
      <button onClick={() => alert("Hello World")}/>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(
  <Square />,
  App
);

export const Counter = ({ counter }) => (
  <span>
  <p>{counter}</p>
  </span>
);
export default Square;
