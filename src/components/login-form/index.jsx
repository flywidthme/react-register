import React, {Component} from 'react';
import {Button, Form, Icon, Input ,message} from "antd";
const Item = Form.Item;
 class LoginForm extends Component {
   //自定义校验规则
   checkPassword=(rule,value,callback)=>{
     if (!value) {
       callback('必须输入密码');
     }else if(value.length<4){
       callback('密码长度必须超过4位')
     }else if(value.length>12){
       callback('密码长度不能超过12位')
     }else if(!(/^[a-zA-Z0-9_]$/.test(value))){
       callback('密码必须是大小写、英文、数字或者下划线')
     }else{
       //代表校验通过
       callback()

     }
   }
   handleSubmit=(e)=>{
      e.preventDefault();
     // 检查当前表单项目是否通过验证
     const {validateFields,resetFields} = this.props.form;
     validateFields((err, values) => {
       if (!err) {
       //   校验成功
         console.log(values)
       //  ************************发送ajax请求
       }else{
         resetFields(['password'])
       //  收集错误信息
        const errMessage = Object.values(err).reduce((pre,cur)=>{
           return pre+cur.errors[0].message+''
         },'')
         console.log(e)
       //  提示错误
         message.error(errMessage);
       }
     });
   }
  render () {
    const {getFieldDecorator,getFieldValue} = this.props.form;
    console.log(getFieldValue('username'));
    return (
      <Form className='login-form-container' onSubmit={this.handleSubmit}>
        <Item>
          {
            getFieldDecorator('username',{
              rules: [{
                required: true, message: 'Please input your username!',
              },{
                min:4,message:'用户名必须大于等于4位'
              },{
                pattern:/^[a-zA-Z0-9+]$/,message:'用户名必须是大小写、英文、数字或者下划线'
              }

              ]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )
          }
        </Item>
        <Item>
          {getFieldDecorator('password',{
            rules:[
              {
                validator:this.checkPassword
            }]
          })(<Input  placeholder='密码' type='password' prefix={<Icon type="safety"/>}/>)}

        </Item>
        <Item>
          <Button type='primary' htmlType="submit" className='login-form-button'>登录</Button>
        </Item>
      </Form>
    )
  }
}
const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;