import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count_1: 0,
      count_2: 0,
      user: {},
    };
    console.log("child constructer " + this.props.count);
  }
  async componentDidMount() {
    console.log("child componentDidMount 1 " + this.props.count);
    let res = await fetch("https://api.github.com/users/bhushank-noit");
    res = await res.json();
    console.log(res);
    this.setState({
      user: res,
    });
    console.log("child componentDidMount 2 " + this.props.count);
    this.timer = setInterval(() => {
      console.log("timer 1 on");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count_1 !== prevState.count_1) {
      console.log("count_1 changed ");
    }
    if (this.state.count_2 !== prevState.count_2) {
      console.log("count_2 changed ");
    }
    // this if and else condition will grow more, unmanagable in functional component ther is useEffect
    console.log("child componentDidUpdate " + this.props.count);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("child render " + this.props.count);
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
