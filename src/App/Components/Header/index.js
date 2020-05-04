import React from "react";

// compomentes ant
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

// assets
import logo from "../../../assets/logo.png";

import "./styles.css";

const { Header } = Layout;

export default function HeaderTemplate({ ...props }) {
  return (
    <Layout className="layout">
      <Header style={{ background: "#fff" }}>
        <div className="logo">
          <img src={logo} alt="SecurityApp" />
        </div>
        <Menu
          style={{ textAlign: "right" }}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Sobre</Menu.Item>
          <Menu.Item key="3">Serviços</Menu.Item>
          <Menu.Item key="4">Portifólio</Menu.Item>
          <Menu.Item key="5">Blog</Menu.Item>
          <Menu.Item key="6">Contato</Menu.Item>
          <Menu.Item key="7">{<InstagramOutlined />}</Menu.Item>
          <Menu.Item key="8">{<FacebookOutlined />}</Menu.Item>
          <Menu.Item key="9">{<LinkedinOutlined />}</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
