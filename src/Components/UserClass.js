import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("User constructor");
  }

  componentDidMount() {
    console.log("User componentDidMount");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        {console.log("User render")}
        <h2>Count class: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>Add</button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
