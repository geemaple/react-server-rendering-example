var Index = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  handleClick: function () {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>
        Click {this.props.name.name}! Number of clicks: {this.state.count}
      </button>
    );
  }
});
