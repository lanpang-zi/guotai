import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar, Icon,List  } from 'antd-mobile';
import Imgurl from '../index/home/images/01.png';
import './index.less';

export default class Finance extends Component {
  render() {
    return (
      <div className="over">
        {/* nav */}
        <div>
          <NavBar
            mode="light"
            icon={<NavLink to="./index" >返回</NavLink>}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={
              <Icon key="1" type="ellipsis" />
            }
          >融资融券
          </NavBar>
        </div>
        <Box/>
        <Lista/>
        <Footer/>
      </div>
    )
  }
}

class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:['融资买入','融资买入','融资买入','融资买入','融资买入','融资买入','融资买入','融资买入','融资买入','融资买入']
    }
  }
  render(){   
    return(
      <div>
        <ul className="Box-list">
          {
          this.state.list.map((item,index)=>{
            return(
            <NavLink to="" key={index}>
            <li className="list" >
              <img src={Imgurl} alt=""/>
              <p>{item}</p>
            </li>
            </NavLink> 
            )
          })
          }
        </ul>
      </div>
    )
  }
}

class Lista extends React.Component{

  
  render(){
    const Item = List.Item;
    // const Brief = Item.Brief;
    return(
      <div>
        <List>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >资金管理</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
         我的持仓
        </Item>
        </List>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <NavLink to={`/home`}><Icon type="check-circle" /><span>首页</span></NavLink>
        <NavLink to={`/market`}><Icon type="check-circle" /><span>行情</span></NavLink>
        <NavLink to={`/center`}><Icon type="check-circle" /><span>我的</span></NavLink>
      </div>
    )
  }
}