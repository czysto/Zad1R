class Draw extends React.Component {
  state = {
    options: ["first", "second", "third"],
    option: null,
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("Wpisz Cos");

    const options = this.state.options.concat(this.state.value);
    this.setState({
      options,
      value: "",
    });
    alert(`Wróżba dodana. Aktualne wróżby: ${options}`);
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * 3);
    this.setState({
      option: this.state.options[index],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
