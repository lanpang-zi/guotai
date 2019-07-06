import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';
import './list.less'

export default class List extends Component {
  constructor(props){
    super(props);
    this.state={
      sailingList:[]

    }
  }

  componentDidMount(){
    fetch('/Default.aspx?action=AInSide_&sort=zhangf_desc&pageSize=15&page=1&type=400128903&token=LJH23LKJHssdUIs231LJLJ&_=1562248666062'
    ).then(response => response.json())
    .then(res =>{
      console.log(res.TableInfo);
      
       this.setState(()=>{
       return {
        sailingList:res.TableInfo
       }
          
      },() =>{
        console.log(this.state.sailingList.filter((item,index )=> {
          return index<6;
        }));
      })
    })

  }
  render() {
    return (
      <div className="list">
        <div className="header">
            <div className="title">航空装备</div>
            <NavLink to={`/home`} className="header-home"><Icon type="home" style={{color:'#ccc'}} /></NavLink>
            <NavLink to='#' className="header-search"><Icon type="search" style={{color:'#ccc'}} /></NavLink>
            <NavLink to='#' className="header-ellipais"><Icon type="appstore" style={{color:'#ccc'}} /></NavLink>
          </div>

          <div className="list-center">
            <div className="sailing">
              <ul>
                {this.state.sailingList.map(item=> {
                  return (
                    <div key={item.stkName}>
                      <li>
                      <NavLink to="#">
                        <span className="span-1"><p>{item.stkName}</p><div>{item.stkCode}</div></span>
                        <span className="span-2">{item.high}</span>
                        <span className="span-3">{item.zd}</span>
                        <span className="span-4">+{Math.floor(item.zhangf*100*100)/100}%</span>
                      </NavLink>
                    </li>
                    </div>
                  )
                })}
              </ul>
            </div>

          </div>
      </div>
      
    )
  }
}
