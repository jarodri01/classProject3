import React from 'react'
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: 'is required!',
  types: {
    email: 'is not validate email!',
    number: 'is not a validate number!',
  },
  number: {
    range: 'must be between min and max',
  },
};

const Contact = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div className='form-container'>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'firstname']}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='First Name'/>
      </Form.Item>
      <Form.Item
        name={['user', 'lastname']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Last Name'/>
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input placeholder='Email'/>
      </Form.Item>
     
      <Form.Item name={['user', 'website']} label="Website">
        <Input placeholder='@Website'/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea placeholder='What would you like to say?'/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Contact