/**
 * Created by daiyingheng on 16/9/5.
 */
import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
        <div className="admin_left col-md-2 col-sm-2 col-xs-2 ">
          <ul className="post">
            <h4>个人</h4>
            <li>发表文章</li>
            <li>添加(游戏/动漫)资料</li>
          </ul>
          <ul className="settings">
            <h4>设置</h4>
            <li>用户</li>
            <li>文章</li>
            <li>动漫</li>
            <li>游戏</li>
          </ul>
        </div>


    );
  }
}

export default Sidebar;