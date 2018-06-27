import React from 'react';
import ReactDOM from 'react-dom';
import './styles/appStyles.scss';

console.log('hello');
const Index = () => {
  return <div className="demo">
      <h1 className="example">Demo</h1>Hello React!
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));