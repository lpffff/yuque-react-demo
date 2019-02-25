//为什么是value = ？，只写value不好吗
const MyInput = ({ value = "", onChange }) => (
  <input value={value} onChange={onChange} />
);
//如果不加value，非受控组件
class Change extends React.Component {
  state = {
    value: ""
  };
  onTextChange = event => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  };
  onTextReset = event => {
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <MyInput value={this.state.value} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>reset</button>
      </div>
    );
  }
}

export default Change;
