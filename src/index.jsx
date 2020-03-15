import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false }; // defines initial state
  }

  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <h1 className={this.state.clicked ? "clicked" : ""}
          onClick={this.handleClick}>
        Hello,
        {this.props.name}
      </h1>
    );
  }
}


// const Hello = ({ name }) => {
//   return (
//     <div className="container">
//       Hello,
//       {name}
//     </div>
//   );
// };

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name=" Morgan" />, root);
}
