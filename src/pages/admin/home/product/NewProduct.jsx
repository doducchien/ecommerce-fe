import { Form, Select, Row, Col, Spin, Input, Space, Button, Upload, Tag } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNewProduct } from './hook/newProduct.hook';

const { Option } = Select;
function NewProduct() {

    const { initState, onFinish, propsUpload, fileList, listCategoryUse } = useNewProduct();



    return (
        <div className="new-product-page">
            <Spin spinning={false}>
                <Form
                    initialValues={initState}
                    onFinish={onFinish}
                    name='basic'
                    labelAlign='left'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    colon={false}
                >
                    <Row>
                        <Col span={8}>


                            <Form.Item
                                label={<Tag color='blue'>Category</Tag>}
                                name="category_id"
                                rules={[{ required: true, message: 'Please select category!' }]}
                            >
                                <Select placeholder="select category">
                                    {listCategoryUse.map(item => {
                                        return <Option value={item.id} key={item.key}>{item.name}</Option>
                                    })}

                                </Select>
                            </Form.Item>


                            <Form.Item
                                label={<Tag color="magenta">Product name</Tag>}
                                name="name"
                                rules={[{ required: true, message: 'Please type name!' }]}
                            >
                                <Input placeholder='Product name'></Input>
                            </Form.Item>
                            <Form.List name='specifications'>
                                {(fields) => (
                                    <>
                                        <Form.Item
                                            label={<Tag color='cyan'>Display</Tag>}
                                            name="display"
                                            rules={[{ required: true, message: 'Please type display!' }]}
                                        >
                                            <Input placeholder='Display'></Input>
                                        </Form.Item>

                                        <Form.Item
                                            label={<Tag color='geekblue'>Cpu</Tag>}
                                            name="cpu"
                                            rules={[{ required: true, message: 'Please type cpu!' }]}
                                        >
                                            <Input placeholder='Cpu'></Input>
                                        </Form.Item>

                                        <Form.Item
                                            label={<Tag color='gold'>Ram</Tag>}
                                            name="RAM"
                                            rules={[{ required: true, message: 'Please type ram!' }]}
                                        >
                                            <Input placeholder='Ram'></Input>
                                        </Form.Item>

                                        <Form.Item
                                            label={<Tag color='green'>Memory</Tag>}
                                            name="memory"
                                            rules={[{ required: true, message: 'Please type memory!' }]}
                                        >
                                            <Input placeholder='Memory'></Input>
                                        </Form.Item>
                                    </>
                                )}

                            </Form.List>


                            <Form.Item
                                name={'describle'}
                                label={<Tag color='lime'>Describle</Tag>}
                                rules={[{ required: true, message: 'Please type memory!' }]}
                            >
                                <Input.TextArea placeholder='Description' rows={15} />
                            </Form.Item>




                        </Col>
                        <Col span={8}>
                            <Form.Item wrapperCol={24} name='images'>
                                <Upload
                                    {...propsUpload}
                                >
                                    {fileList.length < 15 && '+ Upload'}
                                </Upload>
                            </Form.Item>


                        </Col>
                        <Col span={8}>
                            <Form.List style={{ width: '100%' }} name="options">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'price']}
                                                    wrapperCol={24}
                                                    rules={[{ required: true, message: 'Missing price' }]}
                                                >
                                                    <Input prefix='VND' placeholder="Price" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'quantity']}
                                                    wrapperCol={24}
                                                    rules={[{ required: true, message: 'Missing quantity' }]}
                                                >
                                                    <Input placeholder="Quantity" />
                                                </Form.Item>
                                                <Form.List name={[name, 'option_names']}>
                                                    {(fields) => (
                                                        <>
                                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, 'color']}
                                                                    wrapperCol={24}
                                                                    rules={[{ required: true, message: 'Missing color' }]}
                                                                >
                                                                    <Input placeholder="Color" />
                                                                </Form.Item>
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, 'disk']}
                                                                    wrapperCol={24}
                                                                    rules={[{ required: true, message: 'Missing disk' }]}
                                                                >
                                                                    <Input placeholder="Disk" prefix='GB' />

                                                                </Form.Item>
                                                            </Space>

                                                        </>
                                                    )}
                                                </Form.List>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add option
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Button htmlType='submit' type='primary' style={{ width: '100%', height: '60px' }} danger onClick={null}>
                                ADD THIS PRODUCT
                            </Button>
                        </Col>

                    </Row>


                </Form>
            </Spin>


        </div>
    )
}

export default NewProduct;