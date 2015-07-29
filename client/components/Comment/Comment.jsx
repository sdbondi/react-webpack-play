import React from 'react';
import marked from 'marked';

export default React.createClass({
  render() {
    var rawHtml = marked(this.props.children, {sanitize: true});

    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        <span dangerouslySetInnerHTML={{ __html: rawHtml }} />
      </div>
    );
  }
});
