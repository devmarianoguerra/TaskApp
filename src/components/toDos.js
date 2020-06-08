import React from "react";
import _ from "lodash";
import Card from "./card";
import Input from "./input";
import Patch from "./patchPost";

class ToDos extends React.Component {
  state = {
    posts: [],
  };

  getPost = () => {
    fetch("https://todo-checkpoint-api.herokuapp.com/api/todos/mariano")
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }));
  };

  removePost = (id) => {
    console.log("id:", id);
    fetch(`https://todo-checkpoint-api.herokuapp.com/api/todos/${id}/mariano`, {
      method: "DELETE",
    }).then((response) => this.getPost());
  };

  renderPost = () => {
    const { posts } = this.state;
    const listOfPosts = posts.map((post) => (
      <div>
        <Card
          id={post._id}
          title={post.title}
          checked={post.checked}
          removePost={this.removePost}
        />
      </div>
    ));
    return listOfPosts;
  };

  render() {
    const { posts } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="md-6">
            <h3>Click para obtener los To Do's</h3>
            <button class="btn btn-outline-success" onClick={this.getPost}>
              Click aquí
            </button>
          </div>
          <br />
          <div class="container">
            <div className="row">
              <div className="md-6">
                <h3>Insertar un To do nuevo:</h3>
                <Input />
              </div>
            </div>
          </div>
          <div class="container">
            <div className="row">
              <div className="md-6">
                <h3>Corregir un To do:</h3>
                <Patch getPost={this.getPost} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div>
            <h3>To do's :</h3>
            <div>{!_.isEmpty(posts) && this.renderPost()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDos;
