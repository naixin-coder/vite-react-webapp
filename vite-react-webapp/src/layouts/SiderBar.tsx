import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import './SiderBar.less';

/*
 * @Author: 刘林
 * @Date: 2021-11-27 14:46:42
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 14:49:49
 */
const { Sider } = Layout;

const SiderBar = () => {
  return (
    <Sider trigger={null} collapsible >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/app">App</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderBar;