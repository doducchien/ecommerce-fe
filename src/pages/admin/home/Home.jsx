import React from 'react';
import { Layout, Menu, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useLayout from '../../../common_hook/layout_hook';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { listTitle } from '../../../constants/list_menu';
import useHome from './home.hook';
import Category from './category/Category';
import { listRoute } from '../../../constants/list_route';
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const { Header, Footer, Sider, Content } = Layout;




function Home() {
    const history = useHistory();

    const { path, url } = useRouteMatch()
    const { layoutPage, selectedMenuItem } = useHome();
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    console.log(path)





    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );
    const genMenu = () =>

        listTitle.map(title => {

            return (
                <SubMenu key={title.key} icon={title.icon} title={title.title}>{title.sub.map(item => {
                    return <Menu.Item onClick={() => history.push(`/admin/${title.key}/${item.code}`)} key={item.code}>{item.label}</Menu.Item>
                })}
                </SubMenu>
            )
        })


    return (

        <Layout className='home-admin'>
            <Sider
                className='menu-sider'

                trigger={true}
            >
                <Header className='header-menu-sider'>
                    <img src="/assets/icon/logo-admin.png" />
                    <span>Admin</span>
                </Header>
                <Menu mode="inline" openKeys={listTitle.map(title => title.key)} onOpenChange={onOpenChange}>
                    {genMenu()}
                </Menu>
            </Sider>
            <Layout>
                <Header className='header-layout'>
                    <p className='header-title' >{layoutPage.label}</p>
                    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                        Chien Thit Cho
                    </Dropdown.Button>
                </Header>
                <Content className='content-page'>
                    <Switch>
                        <Route path={listRoute.DASHBOARD_ADMIN} >
                            <div>this is dashboard page</div>
                        </Route>
                        <Route path={listRoute.CATEGORY_ADMIN}>
                            <Category />
                        </Route>
                    </Switch>



                </Content>
            </Layout>
        </Layout>

    );

}

export default Home;