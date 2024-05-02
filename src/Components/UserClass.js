import React from "react";
import { GITHUB_USER_API } from "../utils/constants";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Jone Doe",
        location: "Default",
        company: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
    };
    console.log(this.props.name, "User constructor");
  }

  componentDidMount() {
    this.fetchData(GITHUB_USER_API);
  }

  async fetchData(GITHUB_USER_API) {
    const data = await fetch(GITHUB_USER_API);
    const userInfo = await data.json();
    this.setState({
      ...this.state,
      userInfo,
    });
    console.log(userInfo);
  }

  render() {
    const { count } = this.props;
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {console.log(this.props.name, "User render")}
        <h2>Count class: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>Add</button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Company: {company}</h3>
        <img src={avatar_url} alt="url" />
        {/* <h4>Contact: {contact}</h4> */}
      </div>
    );
  }
}

export default UserClass;
