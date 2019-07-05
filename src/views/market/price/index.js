import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Radio } from 'antd';
import './price.less';

export default class Price extends Component {
  constructor(props){
    super(props);
    this.state={
      todolist:[],
      productsList:[],
      merchent:[],
      time: ''
    }
  }

  componentDidMount() {
    this.setState({
      time:new Date().toLocaleString('chinese', { hour12: false })
    });
    fetch('https://i.gtja.com/Default.aspx?action=inSide_JOSN&token=LJH23LKJHssdUIs231LJLJ&stock_code=000001&market=SH&_=1562058285297'
    ).then(response => response.text())
    .then(res =>{
      var str=res.slice(6)
      console.log(JSON.parse(str))
      this.setState({
        todolist:JSON.parse(str)
      })
    });

    fetch('https://i.gtja.com/Default.aspx?action=bkpz&code=&bkfl=14&token=LJH23LKJHssdUIs231LJLJ&_=1562152040524'
    ).then(response => response.json())
    .then(res =>{
      console.log(res.TableInfo);
       this.setState(()=>{
       return {
         productsList:res.TableInfo
       }
          
      },() =>{
        console.log(this.state.productsList.filter((item,index )=> {
          return index<6;
        }));
      })
    });

    fetch('/quotes/api/quotes/ranking.json?type=60&pageSize=10&page=1&sort=zhangf_desc&_=1562226633779'
    ).then(response => response.json())
    .then(res =>{
      console.log(res.TableInfo);
       this.setState(()=>{
       return {
        merchent:res.TableInfo
       }    
      },() =>{
        console.log(this.state.merchent.filter((item,index )=> {
          return index<6;
        }));
      })
    })       
  }

  show1 =() =>{
    fetch('/quotes/api/quotes/ranking.json?type=60&pageSize=10&page=1&sort=zhangf_desc&_=1562226633779'
    ).then(response => response.json())
    .then(res =>{
      // console.log(res.TableInfo);
       this.setState(()=>{
       return {
        merchent:res.TableInfo
       }   
      })
    })
  }
  show2 =() =>{
    fetch('/quotes/api/quotes/ranking.json?type=60&pageSize=10&page=1&sort=zhangf_asc&_=1562303700668'
    ).then(response => response.json())
    .then(res =>{
      // console.log(res.TableInfo);
       this.setState(()=>{
       return {
        merchent:res.TableInfo
       }   
      })
    })
  }
  show3 =() =>{
    
    fetch('/quotes/api/quotes/ranking.json?type=60&pageSize=10&page=1&sort=hs_desc&_=1562304152418'
    ).then(response => response.json())
    .then(res =>{
      // console.log(res.TableInfo);
       this.setState(()=>{
       return {
        merchent:res.TableInfo
       }   
      })
    })
  }

  render() {
    return (
      <div className="price">
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
        <div className="price-h2">领涨板块</div>
        <div className="price-list">
          <NavLink to="/list">
          {this.state.productsList.filter((item,index) =>{return index<6}).map(item => {
                return (
                  <div key={item.name}>
                  <li>
                  <p className="p-title">{item.name}</p>
                  <p className="p-jia">+3.6%</p>
                  <p className="p-number">{item.match}</p>
                  </li>  
                </div>)   
              })}
          </NavLink>
        </div>
        <div className="price-bottom">
             <div className="price-nav">
              <Radio.Group defaultValue="1" buttonStyle="solid">
                <Radio.Button value="1" className="performer" onClick={this.show1}>涨幅榜</Radio.Button>
                <Radio.Button value="2" className="drop" onClick={this.show2}>跌幅榜</Radio.Button>
                <Radio.Button value="3" className="rate" onClick={this.show3}>换手率榜</Radio.Button>
              </Radio.Group>
             </div>

             <div className="bottom-list">
               <div className="performer-list">
                 <ul>
                  {this.state.merchent.map(item=> {
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
               <div className="drop-list">
                 <p></p>
               </div>
               <div className="rate-list">
                 <p></p>
               </div>
             </div>
        </div>
      </div>
    )
  }
}
