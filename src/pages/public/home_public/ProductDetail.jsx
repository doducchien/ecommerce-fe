import { useEffect } from "react";
import { useProductDetail } from "../hooks/productDetail.hook";
import { Drawer, Row, Divider, Rate, Col, Typography, Image, Tag, Timeline, Alert, Button, Table, Comment, Form, Input, Avatar } from 'antd';
import { listRoute } from '../../../constants/list_route';
import Order from "./Order";
const { TextArea } = Input;

const columns = [
    {
        title: 'Ram',
        dataIndex: 'RAM',
        key: 'RAM',
        //   render: text => <a>{text}</a>,
    },
    {
        title: 'CPU',
        dataIndex: 'cpu',
        key: 'cpu',
    },

    {
        title: 'Display',
        key: 'display',
        dataIndex: 'display',

    },
    {
        title: 'Memory',
        key: 'memory',
        dataIndex: 'memory'

    },
];

const defaultImage = 'https://digitalcomrade.co.ke/articles/wp-content/uploads/2021/08/cgartenberg_201105_4276_004.0.jpg';


function ProductDetail() {

    const {
        data, params, meanRate, onSelectOption,
        activeOption, comments, onFinish, initDateCmt,
        visible, showDrawer, onClose
    } = useProductDetail();
    const handleChange = () => {

    }
    const listImage = data?.images;
    const options = data?.options;



    return (
        <div className="product-detail-public">
            <Row justify="space-between">
                <Col>
                    <Typography.Title level={3}>{data?.name?.toUpperCase()}</Typography.Title>

                </Col>
                <Col>
                    <span>
                        <Rate allowHalf defaultValue={0} onChange={handleChange} value={meanRate.toFixed(1)} />
                        &nbsp;
                        {meanRate.toFixed(1)}
                    </span>

                </Col>


            </Row>

            <Row>
                <Col span={12}>
                    <Image
                        onLoad
                        height={500}
                        src={Array.isArray(listImage) ? `${listRoute.UPLOAD_URL}/${listImage[0]}` : ''}
                        fallback={defaultImage}
                    />
                </Col>
                <Col span={12}>
                    <Row>
                        {(options || []).map((item, index) => {
                            const { price, option_names } = item;
                            const color = option_names?.color;
                            const disk = option_names?.disk;
                            const className = activeOption == index ? "active" : "";
                            return (
                                <Col key={index} onClick={() => onSelectOption(index)}>
                                    <div className={`each-option ${className}`}>
                                        <Tag className="options" color="magenta">color: {color}</Tag>
                                        <Tag className="options" color="cyan">disk: {disk}GB</Tag>
                                        <Tag className="options" color="gold">price: {price}VND</Tag>
                                    </div>

                                </Col>
                            );
                        })}

                    </Row>
                    <Divider />
                    <Row>
                        <Timeline>
                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Nhận ngay khuyến mại đặc biệt" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Giảm ngay 300k áp dụng đến 13/03/2025" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Ưu đãi dành cho khách hàng sinh nhật trong Tháng 3: Tặng bảo hành thêm 1 năm" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Cơ hội trúng Jackpot đến 2 tỷ" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Tặng phần mềm học tập online trị giá 300.000đ" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Bảo hành 18 tháng" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Giảm thêm 10% khi mua Tai nghe Xiaomi Earphones 2 Basic" type='info' />
                            </Timeline.Item>

                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Cơ hội trúng Jackpot đến 2 tỷ" type='info' />
                            </Timeline.Item>
                            <Timeline.Item style={{ textAlign: 'left' }}>
                                <Alert message="Thu cũ đổi mới trợ giá 15% Xem chi tiết" type='info' />
                            </Timeline.Item>

                        </Timeline>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={24}><Button onClick={showDrawer} style={{ width: '100%' }} size="large" danger type="primary">Order now</Button></Col>

                    </Row>

                </Col>
            </Row>
            <Divider />

            <Row>
                <Col span={12}><Typography.Paragraph italic>{data.describle}</Typography.Paragraph></Col>
                <Col span={12}>
                    <Table columns={columns} dataSource={[data?.specifications]} />
                </Col>
            </Row>
            <Divider orientation="left" >Comments</Divider>
            <Row>
                <Col span={24}>
                    <Form
                        labelAlign='left'
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 21 }}
                        initialValues={initDateCmt}
                        onFinish={onFinish}
                    >
                        <Form.Item label='Email' name='email' style={{ textAlign: 'left' }} rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input size="large" style={{ width: '50%' }} placeholder="Input your email to comment "></Input>
                        </Form.Item>

                        <Form.Item label='Your name' name='name' style={{ textAlign: 'left' }} rules={[{ required: true, message: 'Please input your name!' }]}>
                            <Input size="large" style={{ width: '50%' }} placeholder="Input your name "></Input>
                        </Form.Item>

                        <Form.Item label='Comment' name='content' rules={[{ required: true, message: 'Please input your comment!' }]}>
                            <TextArea rows={4} placeholder="Input your comment on this product" />

                        </Form.Item>
                        <Form.Item label='Rate' name='star' style={{ textAlign: 'left' }}>
                            <Rate defaultValue={0} onChange={handleChange} />

                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                            <Button size="large" style={{ width: '100%' }} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    {comments.map(item => {
                        return (
                            <div key={item.id}>
                                <Comment
                                    style={{ textAlign: 'left' }}
                                    author={<a>{item.name}</a>}
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                    content={
                                        <p>
                                            {item.content}
                                        </p>
                                    }

                                />
                            </div>
                        );
                    })}
                </Col>


            </Row>
            <Drawer size="large" title={`Create new order for ${data?.name?.toUpperCase()}`} placement="right" onClose={onClose} visible={visible}>
                <Order data={data} param={param}/>
            </Drawer>

        </div>
    )
}

export default ProductDetail;