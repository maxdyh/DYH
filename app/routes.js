/**
 * Created by daiyingheng on 16/9/1.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Admin from './components/Admin';
import Post from './components/Post';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/frontend' component={Home} />
    <Route path='/game' component={Home} />
    <Route path='/anime' component={Home} />
    <Route path='admin' component={Admin} >
      <Route path='post' component={Post} />
    </Route>

  </Route>


);