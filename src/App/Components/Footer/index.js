import React from "react";

// compomentes ant
import { Layout } from "antd";

const { Footer } = Layout;

export default function FooterTemplate({ ...props }) {
  return (
    <Layout className="layout">
      <Footer style={{ textAlign: "center" }}>© Copyright 2020. </Footer>
    </Layout>
  );
}
