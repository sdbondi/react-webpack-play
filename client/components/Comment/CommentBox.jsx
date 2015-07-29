import React from 'react';
import Reflux from 'reflux';
import request from 'superagent';

import CommentActions from './Actions';
import CommentStore from './Store';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default React.createClass({
  mixins: [Reflux.connect(CommentStore, 'items')],

  propTypes: {
    items: React.PropTypes.array
  },

  getInitialState() {
    return {
      items: [],
      errors: []
    };
  },

  getDefaultProps() {
    return {};
  },

  handleCommentSubmit(data) {
    CommentActions.addItem(data)

    request
      .post('/comments')
      .type('json')
      .accept('json')
      .send(data)
      .end((err, res) => {
        if (!res.ok) {
          console.error(err, res);
        }
      });
  },

  componentDidMount() {
    this.loadComments()
    if (this.props.pollInterval) {
      setInterval(this.loadComments, this.props.pollInterval);
    }
  },

  loadComments() {
    request
      .get(this.props.url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (res.ok) {
          CommentActions.setItems(res.body)
        } else {
          console.log(err, res)
        }
      });
  },

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList items={this.state.items} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
