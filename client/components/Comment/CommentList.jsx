import React from 'react';
import Comment from './Comment.jsx';

export default React.createClass({
  render() {
    var commentNodes = this.props.items.map((comment) => {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
