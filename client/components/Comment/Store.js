import Reflux from 'reflux';
import CommentActions from './Actions';

export default Reflux.createStore({
  listenables: [CommentActions],

  onSetItems(items) {
    this.updateCommentsList(items);
  },

  onAddItem(item) {
    this.updateCommentsList(this.items.concat([item]));
  },

  updateCommentsList(items) {
    this.items = items;
    this.trigger(items);
  }
});
