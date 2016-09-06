/**
 * Created by daiyingheng on 16/9/1.
 */
import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    return (
      <header>
        <nav className='navbar navbar-default navbar-static-top animated header--fixed'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            <span className={'triangles animated ' + this.state.ajaxAnimationClass}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            DYH
            <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animate clearfix' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <input type='text' className='form-control' placeholder='搜索' value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>主页</Link></li>
            <li className='dropdown'>
              <Link to='/frontend' className='dropdown-toggle' data-toggle='dropdown'>前端<span className='caret'></span></Link>
              <ul className='dropdown-menu'>
                <li><Link to='/frontend/css'>CSS</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/frontend/javascript'>Javascript</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/frontend/javascript/plain'>Plain</Link></li>
                    <li><Link to='/frontend/javascript/node'>Node</Link></li>
                    <li><Link to='/frontend/javascript/react'>React</Link></li>
                  </ul>
                </li>
                <li><Link to='/frontend/html'>HTML</Link></li>
                <li className='divider'></li>
                <li><Link to='/frontend/other'>其他</Link></li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>游戏<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/game/talk'>DYH游戏谈</Link></li>
                <li className='divider'></li>
                <li><Link to='/game/library'>游戏资料库</Link></li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>动漫<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/anime/talk'>DYH动漫谈</Link></li>
                <li className='divider'></li>
                <li><Link to='/anime/library'>动漫资料库</Link></li>
              </ul>
            </li>
            <li><Link to='/add'>关于</Link></li>
          </ul>
        </div>
      </nav>

        </header>
    );
  }
}

export default Navbar;