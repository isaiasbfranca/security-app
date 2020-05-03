import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Link } from "react-router-dom";

import Routes from "../App/Components/Common/Routes";

// compomentes ant
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "./styles.css";

const { Header, Sider, Content, Footer } = Layout;

export default function LayoutTemplate({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const redirectPath = (path) => {
    console.log("antes do if - ", path);

    if (path) {
      console.log("depois do if -> ", path);
      return <Route render={() => <Redirect to={path} />} />;
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Sider
          theme="light"
          onCollapse="responsive"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo"></div>
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" prefix={<UserOutlined />}>
              <Link to="/login">login</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Button
              className="trigger"
              style={{ border: "0" }}
              onClick={() => toggle()}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
