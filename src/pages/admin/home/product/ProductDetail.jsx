import useProductDetail from "./hook/productDetail.hook"
import { Image, Typography, Rate, Row, Col, Spin, Tag, Dropdown, Menu, Button, Table, Space } from "antd";
import DownOutlined from '@ant-design/icons';
import { utils } from "../../../../ultil/ultil";
import CommentProduct from "../comment/CommentProduct";
const { Title, Text } = Typography
export default function ProductDetail() {
    const { data, rateAvg, isLoading, id } = useProductDetail();
    const { display, cpu, ram, memory } = data?.specifications || {};
    console.log(data)
    const genContent = (key, value, tagOption = { isTag: false, colorTag: 'greekblue' }) => {
        const { isTag, colorTag } = tagOption;
        return (
            <Row align="middle" style={{ marginTop: '10px' }}>
                <Col span={6}>
                    <Title italic style={{ margin: 0 }} level={4}>{key}</Title>
                </Col>
                <Col span={18}>
                    {isTag ?
                        <Tag color={colorTag}>{value}</Tag>
                        :
                        <Text strong type="secondary">{value}</Text>
                    }
                </Col>
            </Row>
        )
    }


    const genDropdownMenu = () => (
        <Menu>
            {data?.options?.map((item, index) => {
                return (
                    <Menu.Item key={index}>
                        <Row align="middle" style={{ marginTop: '10px' }}>

                            {item.optionNames.getName()}

                        </Row>
                    </Menu.Item>
                )
            })}
        </Menu>
    )



    const columns = [
        {
            title: 'Display',
            dataIndex: 'display',
            key: 'display',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'CPU',
            dataIndex: 'cpu',
            key: 'cpu',
        },
        {
            title: 'RAM',
            dataIndex: 'ram',
            key: 'ram',
        },
        {
            title: 'Memory',
            key: 'memory',
            dataIndex: 'memory',

        },

    ];

    const data_ = [
        {
            key: '1',
            display: display || "",
            cpu: cpu || "",
            ram: ram || "",
            memory: memory || "",
        },

    ];


    return (
        <Spin spinning={isLoading}>
            <div className="product-detail-page">

                <div className="left">
                    <Image
                        preview={false}
                        src="https://image.made-in-china.com/202f0j00rCYRLWzSvcqt/A-Grade-Unlocked-Mobile-Phone-for-iPhone-Mobile-Phone-First-Hand-Supply-New-Media-Mobile-Phone-Smartphone-Box-Accessories.jpg"
                    >

                    </Image>
                </div>
                <div className="right">
                    <Typography.Title level={2} style={{ margin: 0 }}>{data?.name?.toUpperCase()}</Typography.Title>
                    {
                        rateAvg != null && <span>
                            <Rate disabled allowHalf value={rateAvg} />
                            &nbsp;({rateAvg}/5)
                        </span>
                    }
                    {genContent("Quantity", data.quantity || 0, { isTag: true, colorTag: 'magenta' })}
                    {genContent("Price", utils.currencyFormat(data.price || 12000000), { isTag: true, colorTag: 'geekblue' })}
                    {genContent("Tags", data.tags || "Not found tags", { isTag: true, colorTag: 'purple' })}
                    {genContent("Discount", data.discount || "No discount", { isTag: true, colorTag: 'lime' })}
                    {genContent("Status", data.status, { isTag: true, colorTag: 'green' })}
                    {genContent("Created At", utils.convertDateTo_ddMMyyyy(data.createdAt))}
                    {genContent("Updated At", utils.convertDateTo_ddMMyyyy(data.updatedAt))}
                    {genContent("Describle", data.describle)}

                    {
                        data?.options?.[0] && <Row align="middle" style={{ marginTop: '10px' }}>
                            <Col span={6}>
                                <Title italic style={{ margin: 0 }} level={4}>Options</Title>
                            </Col>
                            <Col span={18}>
                                <Dropdown overlay={genDropdownMenu}>
                                    <Button>
                                        {data?.options?.[0]?.optionNames?.getName()} <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    }
                    <Row style={{ marginBottom: '10px' }}>
                        <Col span={6}>
                            <Title italic style={{ margin: 0 }} level={4}>Specifications</Title>
                        </Col>
                    </Row>
                    <Table pagination={false} columns={columns} dataSource={data_} />

                    <Row style={{ marginBottom: '10px', marginTop: '20px' }}>
                        <Col span={6}>
                            <Title italic style={{ margin: 0 }} level={4}>Comment</Title>
                        </Col>
                    </Row>
                    <CommentProduct productId={id} />
                </div>


            </div >
        </Spin>
    )
}

