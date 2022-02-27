import { Menu, Avatar } from 'antd';
import { useState } from 'react';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import { useMenuSection } from './hook/menuSection.hook';
import { listRoute } from '../../../constants/list_route';

const { SubMenu } = Menu;

function MenuSection() {
    const { listCategory } = useMenuSection();
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');

    console.log(listCategory)

    return (
        <>
            <Menu
                className='menu-section'
                defaultSelectedKeys={listCategory?.data[0].id || ""}
                mode={mode}
                theme={theme}
            >
                {(listCategory?.data || []).map(item => {
                    return (
                        <Menu.Item style={{height: '60px'}}  key={item.id} icon={<Avatar src={listRoute.UPLOAD_URL +  item.image} />}>
                            {item.name}
                        </Menu.Item>
                    )
                })}
             
            </Menu>
        </>
    );
}

export default MenuSection;