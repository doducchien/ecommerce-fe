import { Form, Input, Button, Checkbox, Row, Avatar, Tag } from 'antd';
import {
    UserOutlined, MailOutlined, PhoneOutlined,
    HomeOutlined, DollarCircleOutlined, PlusSquareOutlined, SettingOutlined,
     QuestionCircleOutlined, ExclamationCircleOutlined, PayCircleOutlined, ScanOutlined
} from '@ant-design/icons';
import useDetailOder from './hook/detailOrder.hook';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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



export default function DetailOrder() {
    const history = useHistory();
    const { detailOrder } = useDetailOder();
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
                    style={{backgroundColor: listColor[index%4]}}
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
                if(key == "payment_type"){
                    switch(data[key]){
                        case 1:{
                            value = "On COD";
                            break;
                        }
                        case 2:{
                            value = "On banking";
                            break;
                        }

                        case 3:{
                            value = "On store";
                            break;
                        }
                        default:{
                            value = "";
                        }
                        
                    }
                }
                else if(key === "status"){
                    switch(data[key]){
                        case 0:{
                            value = "Cancel";
                            break;
                        }
                        case 1:{
                            value = "Unpaid";
                            break;
                        }

                        case 2:{
                            value = "Paid";
                            break;
                        }
                        default:{
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
        <div className="detail-order">
            <div className="info">
                {listInfo().map(item => {
                    const { key, value } = item;
                    return genItem(key, value)
                })}

            </div>
            <div className="list-product">
                {(data?.products || []).map(item => {
                    const {product_id, name, price, quantity } = item;
                    console.log(item)
                    return (
                        <Link to={"/admin/product/detail/" + product_id} key={product_id} className='item-product'>
                            
                            <div className='key-item'><span className='label'><Tag color="magenta">Product name</Tag></span>{name}</div>
                            <div className='key-item'><span className='label'><Tag color="cyan">Price</Tag></span>{price}</div>
                            <div className='key-item'><span className='label'><Tag color="geekblue">Quantity</Tag></span>{quantity}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}