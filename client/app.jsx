'use strict';

import 'styles/main.scss';

import React from 'react/addons';
import CommentBox from 'components/Comment/CommentBox.jsx';

React.render(
  <CommentBox url="/comments" pollInterval="1000" />,
  document.body
);
