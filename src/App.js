import React, { Component } from 'react';
//1.引入路由
import {HashRouter as Router,Route,Switch} from 'react-router-dom';

//2. 引入路由页面组件
import Index from '@/views/index';
// import Markiet from '@/views/market';
import Login from '@/views/login';
import Finance from '@/views/finance'
// import Center from '@/views/center';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/finance" component={Finance}/>

          {/* <Route path ="/center" component={Center}/>
          <Route path ="/market" component={Markiet}/> */}
          <Route path="/" component={Index}/>
        </Switch>
      </Router>
    );
  }
}
