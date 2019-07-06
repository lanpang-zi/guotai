import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { LoginTopWrap, LoginTopList, LoginTopLeft, LoginTopRight, LoginTopCir, DividerLine } from './style';

export default class TopBox extends Component {
    render () {
        return (
            <LoginTopWrap>
                <LoginTopList>
                    <LoginTopLeft>
                        <NavLink to="/">
                            <LoginTopCir>
                                <Icon type="user" />
                            </LoginTopCir>
                            <h3>极速开户</h3>
                        </NavLink>
                    </LoginTopLeft>
                    <LoginTopRight>
                        <NavLink to="/login">
                            <LoginTopCir>
                                <Icon type="picture" />
                            </LoginTopCir>
                            <h3>用户画像</h3>
                        </NavLink>
                    </LoginTopRight>
                </LoginTopList>
                <DividerLine />

                <LoginTopList>
                    <LoginTopLeft>
                        <NavLink to="/">
                            <LoginTopCir>
                                <Icon type="user" />
                            </LoginTopCir>
                            <h3>我的持仓</h3>
                        </NavLink>
                    </LoginTopLeft>
                    <LoginTopRight>
                        <NavLink to="/login">
                            <LoginTopCir>
                                <Icon type="picture" />
                            </LoginTopCir>
                            <h3>交易记录</h3>
                        </NavLink>
                    </LoginTopRight>
                </LoginTopList>
                <DividerLine />

                <LoginTopList>
                    <LoginTopLeft>
                        <NavLink to="/">
                            <LoginTopCir>
                                <Icon type="user" />
                            </LoginTopCir>
                            <h3>我的账户</h3>
                        </NavLink>
                    </LoginTopLeft>
                    <LoginTopRight>
                        <NavLink to="/login">
                            <LoginTopCir>
                                <Icon type="picture" />
                            </LoginTopCir>
                            <h3>小君知道</h3>
                        </NavLink>
                    </LoginTopRight>
                </LoginTopList>
            </LoginTopWrap>
        )
    }
}