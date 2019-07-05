import React, { Component } from 'react';
import { LoginHeaderWrap } from './style';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import TopBox from './topbox'


export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginHeaderWrap>
          <NavLink to="/">
            <Icon type="home" style={{ fontSize: '24px', color: '#fff' }} />
          </NavLink>
          <span>我的</span>
          <Icon type="menu-unfold" />
        </LoginHeaderWrap>

        <div className="main">
          <div className="conatainer">
            <TopBox />
          </div>
        </div>

      </div>
    )
  }
}

