import React from "react";

class Patch extends React.Component {
  state = {
    id: "",
    title: "",
    checked: false,
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
    console.log("title: ", this.state.title);
  };

  handleChecked = (event) => {
    this.setState({ checked: event.target.checked });
    console.log("checked? ", this.state.checked);
  };

  handleId = (event) => {
    this.setState({ id: event.target.value });
    console.log("id: ", this.state.id);
  };

  patchPost = () => {
    fetch(
      `https://todo-checkpoint-api.herokuapp.com/api/todos/${this.state.id}/mariano`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title: this.state.title,
          checked: this.state.checked,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this.props.getPost());
  };

  render() {
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Patch post</span>
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

        <input
          type="text"
          class="form-control"
          onChange={this.handleId}
          placeholder="id"
        />

        <button class="btn btn-outline-info" onClick={this.patchPost}>
          Corregir To do
        </button>
      </div>
    );
  }
}

export default Patch;
