import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Icon, Tabs} from 'antd';
import './market.less';
import Opactional from '../../market/optional';
import Price from '../../market/price';

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export default class Market extends Component {
  

  render() {
    return (
      <div className="market">
           <div className="header">
             <div className="title">我的自评</div>
             <NavLink to={`/home`} className="header-home"><Icon type="home" style={{color:'#ccc'}} /></NavLink>
             <NavLink to='#' className="header-search"><Icon type="search" style={{color:'#ccc'}} /></NavLink>
             <NavLink to='#' className="header-ellipais"><Icon type="ellipsis" style={{color:'#ccc'}} /></NavLink>
           </div>
           <div className='market-tabs'>
           <Tabs defaultActiveKey="1" onChange={callback} tabBarStyle={{width:'100%'}}>
            <TabPane tab="自选" key="1">
             <Opactional/>
            </TabPane>
            <TabPane tab="行情" key="2">
             <Price/>
            </TabPane>
          </Tabs>
          </div>
      </div>
    )
  }
}
