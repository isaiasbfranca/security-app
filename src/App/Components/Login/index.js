import React, { Fragment } from "react";

// styles
import { GlobalStyle } from "../../../Styles/global";
import { Container, Content, Form } from "./styles";

// assets
import logo from "../../../assets/logo.png";

// compomentes ant
import "antd/dist/antd.css";
import { Button, Input, Tooltip } from "antd";
import { Row, Col } from "antd";
import {
  MailOutlined,
  LockOutlined,
  FacebookOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const Login = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Content>
        <img src={logo} alt="SecurityApp" />
        <Form>
          <Row style={{ marginBottom: "15px" }}>
            <Input
              type="email"
              allowClear
              prefix={<MailOutlined />}
              placeholder="E-mail"
              suffix={
                <Tooltip title="Digite o email cadastrado">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Input.Password
              allowClear
              prefix={<LockOutlined />}
              placeholder="*******"
            />
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Button
              style={{
                width: "100%",
                background: "black",
                border: "black",
                borderRadius: "2px",
              }}
              type="primary"
            >
              Login
            </Button>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Button
              style={{
                width: "100%",
                borderRadius: "2px",
                background: "#0f0b87",
                border: "#0f0b87",
                color: "white",
              }}
              icon={<FacebookOutlined />}
            >
              Facebook
            </Button>
          </Row>
          <Row>
            <Col span={8}>
              <Button type="link">Esqueceu a senha?</Button>
            </Col>
            <Col span={8} offset={8}>
              <Button type="link">Cadastrar</Button>
            </Col>
          </Row>
        </Form>
      </Content>
    </Container>
  </Fragment>
);

export default Login;
