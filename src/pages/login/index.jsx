import React, {Component} from 'react';
import logo from './logo.png';
import './index.less';
import {
  Form, Icon, Input, Button
} from 'antd';
const Item = Form.Item;

export default class Login extends Component {
  render () {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className='login-form'>
          <h2>用户登录</h2>
          <Form className='login-form-container'>
            <Item>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            </Item>
            <Item>
              <Input  placeholder='密码' prefix={<Icon type="safety" />}/>
            </Item>
            <Item>
              <Button type='primary' className='login-form-button'>登录</Button>
            </Item>
          </Form>
        </section>
      </div>


    )
  }
}
