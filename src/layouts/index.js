import React from 'react'
import {Layout, Menu} from 'antd'
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'umi'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        collapsed: false,
        }
    }

    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)',margin: '16px'}}/>
                    <Menu
                        defaultSelectedKeys={['2']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <SubMenu key="sub2" icon={<UserOutlined />} title="User Management">
                            <Menu.Item key="9"><Link to="/user/UserAdd">Add New User</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/user/UserList">User List</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Backend System ©2021 Created by JG</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;