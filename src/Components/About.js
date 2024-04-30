import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    return (
      <>
        {console.log("Parent Render")}
        <h1>About</h1>
        <div>This is a Namaste React Web Series</div>
        {/* <User name="Devang1" location="Mumbai" contact="@devangnpatil"></User> */}
        <UserClass
          name="Devang2 (class)"
          location="Delhi"
          contact="@devangnpatil"
        ></UserClass>
      </>
    );
  }
}

export default About;
