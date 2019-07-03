import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './index.less';
import { Carousel, WingBlank } from 'antd-mobile';
import'../../../../node_modules/swiper/dist/css/swiper.css';
import Swiper from  '../../../../node_modules/swiper/dist/js/swiper.js';


export default class Home extends Component {
  render() {
    return (
      <div className="over">
        <NavLink to=""><input type="text" placeholder="股票,基金,理财产品"/></NavLink>
        <Aswiper/>
        <Box/>
        <List/>
        <Section/>
        <Hswiper/>
      </div>
    )
  }
}

class Aswiper extends React.Component{
  state = {
    data: ['1', '2'],
    imgHeight: 160,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['0ed0147b-23bc-4d60-b6e7-45a920706cf4690-300-2', '37750085-cc3e-423e-8c9d-319caa4a7fa5kv-690x300'],
      });
    }, 100);
  }

  render(){
    return(
      <div>
        <WingBlank>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="https://dl.app.gtja.com/public/jrsc/linkage/newexclusive/index.html"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={` https://apicdn.app.gtja.com/public/jrsc/newMall/img/v1_${val}.jpg` }
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
      </div>
    )
  }
}


class Box extends React.Component{
  constructor(){
    super();
    this.state = {
      img:[
        'c8e89f4f-0926-4bd1-914e-b81e70ba7ac5icon-menu-2',
        '14c65361-8073-4803-8bf6-57615f387bc2icon-menu-7',
        'cd28dd6f-3cf9-4f8f-b337-0639a25677fficon-menu-1',
        'c8e89f4f-0926-4bd1-914e-b81e70ba7ac5icon-menu-2',
        '14c65361-8073-4803-8bf6-57615f387bc2icon-menu-7',
        'cd28dd6f-3cf9-4f8f-b337-0639a25677fficon-menu-1',
        'c8e89f4f-0926-4bd1-914e-b81e70ba7ac5icon-menu-2',
        '14c65361-8073-4803-8bf6-57615f387bc2icon-menu-7',
        'cd28dd6f-3cf9-4f8f-b337-0639a25677fficon-menu-1',
        'c8e89f4f-0926-4bd1-914e-b81e70ba7ac5icon-menu-2',
        '14c65361-8073-4803-8bf6-57615f387bc2icon-menu-7',]
      ,
      list:['收益凭证','我要融资','收益凭证']
  }
  }
  
  render(){   
    return(
      <div>
        <ul className="Box-list">
          {this.state.img.map((item)=>{
            return(
            <li key={item} className="list" >
              <img src={`https://apicdn.app.gtja.com/public/jrsc/newMall/img/v1_${item}.png`} alt="" />
              <p>收益凭证</p>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

class List extends React.Component{
  render(){
    return(
      <div className="list-nav">
        <div className="list-left">
          <WingBlank>
            <Carousel className="my-carousel"
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay
              infinite
            >
              <div className="v-item">
                <div className="v-font">宏观经济</div>
              </div>
              <div className="v-item">
                <div className="v-font">今日新股</div>
              </div>
              <div className="v-item">
                <div className="v-font">沪深指数</div>
              </div>
            </Carousel>
            
          </WingBlank>
        </div>
      </div>
    )
  }
}

class Section extends React.Component{
  render(){
    return(
      <div>
        <div className="card">
          {/* 当然股神 */}
          <div className="card-1">
            <i></i>
            <p>当然股神</p>
            <span>k线对决</span>
          </div>
          <div className="card-1"> 
          <i className="bg"></i>
          <p>新手福利</p>
          <span>固定收益</span>
        </div>
        {/* 热门理财模块 */}
        </div>
        
        {/* nav */}
        <div className="hot-nav">
          <p>热门理财</p>
          <div className="icon"></div>
          <span className="span-2">更多</span> 
        </div>
        
        {/* 内容 */}
        <div>
          {/* 上 */}
          <div className="hot-box">
            <div className="hot-left">
              <p>+6.66%</p>
              <span>最高年化收益率</span>
            </div>
            <div className="hot-right">
              <h3>新客理财</h3>
              <span>热门理财</span>
            </div>
          </div>
          {/* 下 */}
          <div className="hot-box">
            <div className="hot-left">
              <p>+2.64%</p>
              <span>七日年化收益率</span>
            </div>
            <div className="hot-right">
              <h3>工银货币</h3>
              <span>热门理财</span>
            </div>
          </div>
        </div> 
        
        {/* 精选咨询 */}
        {/* nav */}
        <div className="hot-nav">
          <p>精选资讯</p>
          <div className="icon"></div>
          <span className="span-2">更多</span> 
        </div>
        {/* 精选咨询内容 */}
        <div>
          <div className="new-box">
            <div className="new-img"><img src="https://apicdn.app.gtja.com/baishitong/ZXZX/201905/fwb_images/da311964c0e74cf9bbbe8897258e9b5f.jpg" alt="" style={{height:"68px" ,width:"89px"}} /></div>
            <div className="new-content">
              <p>美国主线须知的十件事</p>
              <div><span>07-03 08:58</span></div>
            </div>
          </div>
          <div className="new-box">
            <div className="new-img"><img src="https://apicdn.app.gtja.com/baishitong/ZXZX/fwb_images/tagPicture/201610/20161018163402_5817.png" alt="" style={{height:"68px" ,width:"89px"}} /></div>
            <div className="new-content">
              <p>消费升级：过往，当下与未来</p>
              <div><span>07-03 08:58</span></div>
            </div>
          </div>
          <div className="new-box">
            <div className="new-img"><img src="https://apicdn.app.gtja.com/baishitong/ZXZX/fwb_images/tagPicture/201704/20170405135945_1788.png" alt="" style={{height:"68px" ,width:"89px"}} /></div>
            <div className="new-content">
              <p>【石油】国家管网公司成立, PTA价格快速反弹</p>
              <div><span>07-03 08:58</span></div>
            </div>
          </div>
        </div>
      </div>
    )
      
  }
}

class Hswiper extends React.Component{
  constructor(props){
    super(props);  
    
  }
  
  componentDidMount(){
    new Swiper (".swiper-container", {
      loop: true, // 循环模式选项
      freeMode : true,
      slidesPerView : 3,
      spaceBetween : 20,
    });
  }
  render(){
    
    return(
      <div className="Hswiper">
        <div className="swiper-container" >
          <div className="swiper-wrapper" >
            <div className="swiper-slide" ><img className="link-img" src="https://i.gtja.com/evercos/assets/mall/images/background-dark01.png" alt="" /></div>
              <div className="swiper-slide"><img className="link-img" src="https://i.gtja.com/evercos/assets/mall/images/background-dark02.png" alt="" /></div>
              <div className="swiper-slide"><img className="link-img" src="https://i.gtja.com/evercos/assets/mall/images/background-dark03.png" alt="" /></div>
          </div>
        </div>
      </div>
    )
  }
}
 
class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div>
          
        </div>
      </div>
    )
  }
}
