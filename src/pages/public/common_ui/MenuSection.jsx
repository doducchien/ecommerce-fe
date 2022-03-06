import { Menu, Avatar } from 'antd';
import { useState } from 'react';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
    DatabaseOutlined
} from '@ant-design/icons';
import { useMenuSection } from './hook/menuSection.hook';
import { listRoute } from '../../../constants/list_route';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../slice/menu.slice';
import { changeFetchProductMode } from '../slice/fetchProductMode.slice';

const { SubMenu } = Menu;

function MenuSection() {
    const dispatch = useDispatch()
    const { listCategory } = useMenuSection();
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');

    const currentMenuItem = useSelector(state => state.menu)

    const onSelectMenu = ({ id, name }) => {
        if (id !== "ALL") {
            dispatch(changeFetchProductMode(`CATEGORY-${name}`))

        }
        dispatch(changeMenu({ id, name }))
    }

    // const fetchProductMode = useSelector(state => state.fetchProductMode);
    // console.log(fetchProductMode);

    const genMenu = () => {


        let final = (listCategory?.data || []).map(item => {
            const { id, name } = item;
            return (
                <Menu.Item

                    onClick={() => onSelectMenu({ id, name })}
                    style={{ height: '60px' }} key={item.id}
                    icon={<Avatar src={listRoute.UPLOAD_URL + item.image} />}
                >
                    {item.name}
                </Menu.Item>
            )
        })
        let list = [
            <Menu.Item
                onClick={() => onSelectMenu({ id: "ALL", name: "ALL" })}
                style={{ height: '60px' }} key="ALL"
                icon={<Avatar icon={<DatabaseOutlined />} />}
            >
                All products
            </Menu.Item>
        ]
        return list.concat(final)

    }

    return (
        <>
            <Menu
                className='menu-section'
                defaultSelectedKeys={currentMenuItem.id}
                mode={mode}
                theme={theme}
            >
                {genMenu()}

            </Menu>
        </>
    );
}

export default MenuSection;