import React, { Component } from 'react';
import { Form, Input, Button, Icon, Tooltip, message } from 'antd';
import { InputWrap, BtnWrap } from './style';

function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      show: 'none',
      number : random(1000,10000),
      btn: '',
      inputVal: '',
      prev: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    // 表单校验
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 校验成功，没有毛病
        console.log('Received values of form: ', values);
      }
    });
  };


  render() {
    console.log(this.state.show);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrapper">
        <div className="main-login">
          <img className="img-login" src="https://i.gtja.com/evercos/assets/image/app/wechatMobile/login/gtja-login.png" alt="" />
          <p>亲爱的 您好！欢迎进入手机验证页面</p>
        </div>

        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
          {getFieldDecorator('phone', {
              rules: [
                { required: true, message: 'Please input phone' },
                {
                  pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
                  message: 'Please sure phone'
                }
              ]
            })(<Input
              onFocus={() =>{this.setState({
                show: 'block'
              })}}
              onBlur={() =>{this.setState({
                show: 'none'
              })}}
              prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入您的手机号码"
              suffix={
                <Tooltip title="Extra information">
                  <Icon type="close-circle" style={{ color: 'rgba(0,0,0,.45)', display: this.state.show }} />
                </Tooltip>
              }
            />)}
          </Form.Item>
          <Form.Item>
              <InputWrap value={this.state.inputVal} onChange={this.onChg} placeholder='请输入验证码'></InputWrap>
              <BtnWrap className="btn" onClick={this.fn1}>{this.state.number}</BtnWrap>
          </Form.Item>
          <Form.Item style={{textAlign: 'center'}}>
            为了您的交易账号安全，请输入您的手机号码进行验证
          </Form.Item>
          
          <Form.Item>
          <Button block type="primary" htmlType="submit" onClick={this.fn2}>
            立即验证
          </Button>
        </Form.Item>
        </Form>
      </div>
    )
  }

  onChg = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  fn1 = (e) => {
    console.log(e.target.innerHTML);
    this.setState({
      number : random(1000,10000),
      btn: e.target.innerHTML
    })
  }

  fn2 = () => {
    var value = document.querySelector('.btn').innerHTML;
      this.state.prev = value;
    if (this.state.inputVal === this.state.prev) {
      message.info('验证成功');
      
    }else {
      message.info('验证失败');
    }
  }
  
}

export default Form.create({})(Login);

