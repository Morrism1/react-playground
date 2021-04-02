import { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { title, onButtonClicked } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent;
