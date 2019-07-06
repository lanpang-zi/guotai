import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd'
import './optional.less';


export default class Opactional extends Component {
  constructor(props){
    super(props);
    this.state={
      todolist:[],
      time: ''
    }
  }

  componentDidMount() {
    this.setState({
      time:new Date().toLocaleString('chinese', { hour12: false })
    })
    fetch('https://i.gtja.com/Default.aspx?action=inSide_JOSN&token=LJH23LKJHssdUIs231LJLJ&stock_code=000001&market=SH&_=1562058285297'
    ).then(response => response.text())
    .then(res =>{
      var str=res.slice(6)
      this.setState({
        todolist:JSON.parse(str)
      })
    }) 
  }

  render() {
    return (
      <div className="optional">
        <div className="center">
          <NavLink to="/stock">
            <div className="panel-1">
              {this.state.todolist.map(item => {
                return (
                  <div key={item.classID}>
                  <p className="index-1" >{item.stkName}</p>
                  <p className="index-2" >{item.price}</p>
                  <p className="index-3" >-0.96  -0.03%</p> 
                </div>) 
              })}
            </div>
          </NavLink>
          <NavLink to="/stock">
          <div className="panel-1">
              <p className="index-1">深证指数</p>
              <p className="index-2">9545.52</p>
              <p className="index-3">15.0 +0.16%</p>
            </div>
          </NavLink>
          <NavLink to="/stock">
          <div className="panel-1">
              <p className="index-1">创业板指</p>
              <p className="index-2">1570.51</p>
              <p className="index-3">2.35 +0.23%</p>
            </div>
          </NavLink>
        </div>
        <div className="grid">
          <div className="grid-header">
            <ul>
              <li>名称</li>
              <li>现价</li>
              <li>涨跌幅</li>
              <li>涨跌额</li>
              <li>诊断标签</li>
            </ul>
          </div>
          <div className="time">更新: {this.state.time}</div>
          <div className="grid-content">
            <div className="content-box">
              <NavLink to="/stock">
                <ul>
                  <li className="li-1">
                    <span className="guotai">国泰君安</span>
                    <span className="guotai-number">601211</span>
                    </li>
                  <li className="li-2">18.22</li>
                  <li className="li-3">-1.57%</li>
                  <li className="li-4"><span className="li-4-number">-0.36</span></li>
                  <li className="li-5"><Icon type="caret-up" className="li-5-icon" /></li>
                  <li className="li-6"><span className="li-6-buy">买</span></li>
                  <li className="li-7"><span className="li-7-sell">卖</span></li>
                </ul>
              </NavLink>
            </div>
          </div>
          <div className="grid-bottom">
            <div className="bottom-box">
              <NavLink to="#" className="add"><Icon type="pound-circle" theme="filled" style={{color:'#ccc'}} /><span>添加自选股</span></NavLink>
              <NavLink to="#" className="updata"><Icon type="cloud-sync" style={{color:'#ccc'}} /><span>同步自选股</span></NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



