import React from 'react';
import { Layout, Menu, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import useLayout from '../../../common_hook/layout_hook';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { listTitle } from '../../../constants/list_menu';
import useHome from './home.hook';
import Category from './category/Category';
import { listRoute } from '../../../constants/list_route';
import Product from './product/Product';
import Order from './order/Order';
import { resetAuthenInformation } from '../authentication/auth.slice';
import { localSpace } from '../../../services/local/local_space';
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const { Header, Footer, Sider, Content } = Layout;




function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { path, url } = useRouteMatch()
    const { layoutPage, selectedMenuItem } = useHome();
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const username = useSelector(state => state.authen?.information?.data?.username);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const logout = ()=>{
        dispatch(resetAuthenInformation());
        localSpace.clearData();
    }







    const menu = (
        <Menu>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
        </Menu>

    );
    const genMenu = () =>

        listTitle.map(item => {
            return (
                <>

                    <Menu.Item
                        icon={item.icon} key={item.key}
                    >
                        <Link to={`/admin/${item.key}`}>{item.title}</Link>
                    </Menu.Item>
                </>
            )
        })


    return (

        <Layout style={{ position: 'relative', overflow: 'auto' }} className='home-admin'>
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
                        {username}
                    </Dropdown.Button>
                </Header>
                <Content className='content-page'>
                    <Switch>
                        <Route key={listRoute.DASHBOARD_ADMIN} path={listRoute.DASHBOARD_ADMIN} >
                            <div>this is dashboard page</div>
                        </Route>
                        <Route key={listRoute.CATEGORY_ADMIN} path={listRoute.CATEGORY_ADMIN}>
                            <Category />
                        </Route>

                        <Route key={listRoute.PRODUCT_ADMIN} path={listRoute.PRODUCT_ADMIN}>
                            <Product />
                        </Route>

                        <Route key={listRoute.ORDER_ADMIN} path={listRoute.ORDER_ADMIN}>
                            <Order />
                        </Route>
                    </Switch>



                </Content>
            </Layout>
        </Layout>

    );

}

export default Home;