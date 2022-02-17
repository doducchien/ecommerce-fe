import { Form, Input, Button, Checkbox, Row, Avatar, Tag, Table, Spin } from 'antd';
import {
    UserOutlined, MailOutlined, PhoneOutlined,
    HomeOutlined, DollarCircleOutlined, PlusSquareOutlined, SettingOutlined,
    QuestionCircleOutlined, ExclamationCircleOutlined, PayCircleOutlined, ScanOutlined
} from '@ant-design/icons';
import useDetailOder from './hook/detailOrder.hook';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUpdateDetailOrder } from './hook/updateDetailOrder.hook';
const listColor = ["#f56a00", "#87d068", "#1890ff", '#36cfc9']

const listType = [
    {
        key: "name",
        label: "Name",
        icon: <UserOutlined />
    },
    {
        key: "email",
        label: "Email",
        icon: <MailOutlined />
    },
    {
        key: "phonenumber",
        label: "Phone number",
        icon: <PhoneOutlined />
    },
    {
        key: "address",
        label: "Address",
        icon: <HomeOutlined />
    },
    {
        key: "total",
        label: "Total money",
        icon: <DollarCircleOutlined />
    },
    {
        key: "createdAt",
        label: "Created at",
        icon: <PlusSquareOutlined />
    },
    {
        key: "updatedAt",
        label: "Updated at",
        icon: <SettingOutlined />
    },
    {
        key: "id",
        label: "Id",
        icon: <ExclamationCircleOutlined />
    },
    {
        key: "payment_type",
        label: "Payment type",
        icon: <PayCircleOutlined />
    },
    {
        key: "status",
        label: "Status",
        icon: <ScanOutlined />
    },

]


const columns = [
    {
        title: 'Product name',
        dataIndex: 'name',
        key: 'name',
        render: (name, records) => {
            const { product_id } = records;
            return (
                <Link to={"/admin/product/detail/" + product_id} key={product_id}>
                    {name}
                </Link>
            )
        }
    },
    {
        title: 'Price(VND)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: "Options",
        dataIndex: "options",
        key: "options",
        render: options => {
            const { color, RAM: ram } = options;
            return (
                <div>
                    <Tag color={color}>{color}</Tag>
                    <Tag color='volcano'>{ram}GB</Tag>
                </div>
            )
        }
    }
]





export default function DetailOrder() {
    const history = useHistory();
    const { detailOrder } = useDetailOder();
    const { updateStatus, updateDetailOrder } = useUpdateDetailOrder();
    const data = detailOrder?.data[0] || {};



    const genItem = (type, content) => {
        let index = listType.findIndex(item => type == item.key);
        let icon = <QuestionCircleOutlined />
        let label = "Undefined";
        if (index >= 0) {
            icon = listType[index].icon
            label = listType[index].label
        }
        return (
            <div key={type} className='item-property'>
                <Avatar
                    icon={icon}
                    style={{ backgroundColor: listColor[index % 4] }}
                />
                &nbsp;
                <span className='label'>{label}</span>
                &nbsp;&nbsp;
                <span className='content'>{content}</span>
            </div>
        );

    }

    console.log(data)

    const listInfo = () => {
        const inforValue = [];
        for (let key in data) {
            if (data.hasOwnProperty(key) && !Array.isArray(data[key])) {
                let value = "";
                if (key == "payment_type") {
                    switch (data[key]) {
                        case 1: {
                            value = "On COD";
                            break;
                        }
                        case 2: {
                            value = "On banking";
                            break;
                        }

                        case 3: {
                            value = "On store";
                            break;
                        }
                        default: {
                            value = "";
                        }

                    }
                }
                else if (key === "status") {
                    switch (data[key]) {
                        case 0: {
                            value = "Cancel";
                            break;
                        }
                        case 1: {
                            value = "Not payment";
                            break;
                        }

                        case 2: {
                            value = "Done";
                            break;
                        }
                        default: {
                            value = "";
                        }

                    }
                }
                else value = data[key]
                const item = {
                    key: key,
                    value: value,
                }

                inforValue.push(item);
            }
        }

        return inforValue;
    }

    console.log(data)


    return (
        <Spin spinning={updateDetailOrder.isLoading}>
            <div className="detail-order">
                <div className='content-detail'>
                    <div className="info">
                        {listInfo().map(item => {
                            const { key, value } = item;
                            return genItem(key, value)
                        })}

                    </div>
                    <div className="list-product">


                        <Table columns={columns} dataSource={data?.products || []} />
                    </div>
                </div>

                <div className='btn-action'>
                    <Button onClick={() => updateStatus("finish", data.id)} size='large' type="primary" danger>DONE</Button>
                    <Button onClick={() => updateStatus("cancel", data.id)} size='large'>Cancel</Button>

                </div>

            </div>
        </Spin>

    )
}