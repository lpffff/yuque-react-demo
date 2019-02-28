import {Component} from 'react';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';

// Header, Footer, Sider, Content组件在Layout组件模块下
const {Header, Footer, Sider, Content} = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh'}}>
                    <div style={{height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <a href="/">
                                <Icon type="pie-chart"/>
                                <span>Helloworld</span>
                            </a>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard"/><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2"><a href="/card">Card</a></Menu.Item>
                            <Menu.Item key="3"><a href="/tree">Tree</a></Menu.Item>
                            <Menu.Item key="4"><a href="/change">Change</a></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
