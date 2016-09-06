/**
 * Created by daiyingheng on 16/9/5.
 */
import React from 'react';
import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';

class Post extends React.Component {
  //constructor(props) {
  //  super(props);
  //  this.state = PostStore.getState();
  //  this.onChange = this.onChange.bind(this);
  //}
  //
  //componentDidMount() {
  //  PostStore.listen(this.onChange);
  //}
  //
  //componentWillUnmount() {
  //  PostStore.unlisten(this.onChange);
  //}
  //
  //onChange(state) {
  //  this.setState(state);
  //}

  render() {
    return (
        <div className="admin_right col-md-10 col-xs-10 col-sm-10">
          <form method="post">
            <div id="div1" name="content"></div>
            <input type="submit" value="发表"/>
            </form>
        </div>


    );
  }
}

export default Post;