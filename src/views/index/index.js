import React, { Component } from 'react';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom';

import Home from '../../views/index/home';
import Market from '../../views/index/market';
import Center from '../../views/index/center';
import Stock  from '../../views/stock/detail/index'
import List  from '../../views/stock/list/index'
import { Icon } from 'antd';
import './index.less'



export default class Index extends Component {
  render() {
    return (
      <div className="box">

        <Switch>
          <Route path={`/home`} component={Home}/>
          <Route path={`/market`} component={Market}/>
          <Route path={`/center`} component={Center}/>
          <Route path={`/stock`} component={Stock}/>
          <Route path={`/list`} component={List}/>
          <Redirect to="/home" />
        </Switch>
       
        
        <div className="footer">
        <NavLink to={`/home`}><Icon type="appstore" /><span>首页</span></NavLink>
        <NavLink to={`/market`}><Icon type="database" /><span>行情</span></NavLink>
        <NavLink to={`/center`}><Icon type="user" /><span>我的</span></NavLink>
        </div>

      
      </div>
    );
  }
}
