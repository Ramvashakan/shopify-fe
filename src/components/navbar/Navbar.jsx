import React from 'react';
import { Image, Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Header } = Layout;
const { Search } = Input;
const navBarItems = [
  {
    key: 1,
    label: `Profile`,
  },
  {
    key: 2,
    label: `Cart`,
    icon: <ShoppingCartOutlined />,
  },
];
const Navbar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <div style={{ width: 100, height: 100, marginTop: 20 }} className="demo-logo">
        <Image src="/Images/Shopify-logo-white.png" />
      </div>
      <Search
        placeholder="Search Products"
        style={{
          width: 400,
          height: 40,
        }}
      />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navBarItems} />
    </Header>
  );
};
export default Navbar;
