import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import useLayout from '../../../../common_hook/layout_hook';
import useListOrder from './hook/listOrder.hook';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const description = (address, phoneNumner, total) => {
    return `Address: ${address} - phone: ${phoneNumner} - total: ${total}`
}

const listColor = ["#f56a00", "#87d068", "#1890ff", '#36cfc9']
export default function ListOrder() {

    useLayout({ code: "Order", label: "Order" })
    const { listOrder } = useListOrder();

    console.log(listOrder)

    return (
        <List
            itemLayout="horizontal"
            dataSource={listOrder.data}
            renderItem={(item, index) => (
                <Link to={`/admin/order/detail/${item.id}`}>
                    <List.Item key={item.id}>

                        <List.Item.Meta
                            className='item'
                            avatar={<Avatar style={{ backgroundColor: listColor[index % 4] }}>{item.name[0]}</Avatar>}
                            title={<span>{item.name}</span>}
                            description={description(item.address, item.phonenumber, item.total)}
                        />
                    </List.Item>
                </Link>

            )}
        />);
}