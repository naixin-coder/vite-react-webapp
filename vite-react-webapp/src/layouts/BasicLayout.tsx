import { Layout, } from "antd";
import { Outlet } from "react-router-dom";
import SiderBar from "./SiderBar";

/*
 * @Author: 刘林
 * @Date: 2021-11-27 14:12:43
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 16:29:48
 */

const { Header, Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderBar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;