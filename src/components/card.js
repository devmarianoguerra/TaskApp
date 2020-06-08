import React from "react";

class Card extends React.Component {
  render() {
    const { id, title, checked, removePost } = this.props;
    return (
      <div class="card bg-info mb-3">
        <div class="card-body">
          {id} {title} {checked}
          <button class="btn btn-danger btn-sm" onClick={() => removePost(id)}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
