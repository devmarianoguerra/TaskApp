import React from "react";

class Input extends React.Component {
  state = {
    title: "",
    checked: "",
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
    console.log("title: ", this.state.title);
  };

  handleChecked = (event) => {
    this.setState({ checked: event.target.checked });
    console.log("checked? ", this.state.checked);
  };

  sendPost = () => {
    fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/mariano", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        checked: this.state.checked,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  render() {
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Title and checked status</span>
        </div>
        <input
          type="text"
          class="form-control"
          onChange={this.handleTitle}
          placeholder="Title"
        />

        <div>
          <input
            type="checkbox"
            class="form-control sm"
            onChange={this.handleChecked}
          />
          Check si es "True"
        </div>

        <button class="btn btn-outline-info" onClick={this.sendPost}>
          Insertar To do
        </button>
      </div>
    );
  }
}

export default Input;
