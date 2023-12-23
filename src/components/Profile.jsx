import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count_1: 0,
      count_2: 0,
    };
    console.log("child constructer");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    console.log("child render");
    return (
      <>
        <h2>
          This is profile Class Component {this.props.name} count_1 ={" "}
          {this.state.count_1} count_2 = {this.state.count_2}
        </h2>
        <button
          onClick={() => {
            // WE DON'T MUTATE STATE DIRECTLY NEVER DO this.state = something; Just modify only portion of object that you have passed
            this.setState({
              count_1: this.state.count_1 + 1,
            });
          }}
        >
          count_1++
        </button>
      </>
    );
  }
}
export default Profile;
