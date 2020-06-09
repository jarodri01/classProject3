import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'


const { Header } = Layout;

function Navbar (){
    return(
        <div>
        <Layout>
        <Header className="header">
          <div className="logo" />
          
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><NavLink exaxt to="/"></NavLink>About</Menu.Item>
            <Menu.Item key="2"><NavLink to="/Contact"></NavLink>Contact</Menu.Item>
            <Menu.Item key="3"><NavLink to="/TableList"></NavLink>TableList</Menu.Item>

          </Menu>
        </Header>
        </Layout>
       </div>
    );
}
export default Navbar