/**
 * Created by daiyingheng on 16/9/1.
 */
import React from 'react';
import {Link} from 'react-router';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    console.log('2222222');
    HomeActions.getArticles();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var articleNodes = this.state.articles.map((character, index) => {
      return (
        <div className="bubble">
          <div className="rectangle">
            <h2>12月  17日</h2>
          </div>
          <div className="info">
            <h2><a href="">JavaScript 自定义事件</a></h2>
            <p className="pv">
              <span>日期 : 2016-8-7</span>
              <span>浏览 : 2016</span>
              <span>评论 : 2016</span>
            </p>
            <p className="summary">自定义事
              在这个过程中，createEvent 方法创建了一个空事件 evt，然后使用 initEvent 方法定义事件的类型为约定好的自定义事件，再对相应的元素进行监听，接着，就是使用 dispatchEvent 触发事件了。件就是有别于如 click, submit 等标准事件的自行定制的事件，在叙述自定义事件有何好处之前，先来看一个自定义事件的例子：</p>
            <p className="detail"><a href="#">查看详情  >></a></p>
          </div>
        </div>
      )
    })
    return (
      <div className="home">
        <div className="home_header padding-top80">
          <div className="info">
            <p className="printer">DaYinHen</p>
          </div>

        </div>
        <div className='home_left col-xs-10 col-sm-10 col-md-7 col-xs-offset-1 col-sm-offset-1 col-md-offset-1'>
          { articleNodes }
        </div>
        <div className='home_right col-xs-1 col-sm-1 col-md-3'>
          <div className="portrait" >
            <section id="container">
              <div className="thumbnail"
                   data-title="Daiyingheng"
                   data-description="浙江工业大学大四学生,前端小白,不断学习ING...">
                <img src="/img/portrait.jpg" />
              </div>
            </section>
            <div className="link">
              <a><i className="iconfont icon">&#xe735;</i></a>
              <a><i className="iconfont icon">&#xe8b1;</i></a>
              <a><i className="iconfont icon">&#xe605;</i></a>
              <a><i className="iconfont icon">&#xe600;</i></a>
            </div>

          </div>
        </div>
        </div>

    );
  }
}

export default Home;