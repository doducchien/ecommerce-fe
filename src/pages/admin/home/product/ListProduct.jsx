import { Spin, Card, Input, Row, Col, Button } from "antd";
import useListProduct from "./hook/listProduct.hook";
import { Image } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Meta } = Card;

function ListProduct() {
    const { isLoading, data, onChangeKeyword, onSearch, keyword, onClear, routeToNewProduct } = useListProduct();
    return (
        <div className="list-product-page">
            <Spin spinning={isLoading}>

                <Row justify="end">
                    <Col>
                        <Button icon={<PlusOutlined />} onClick={routeToNewProduct} style={{ height: '100%' }} type="primary" danger>
                            New product
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Input.Search
                            value={keyword}
                            onChange={onChangeKeyword}
                            placeholder="Type your keyword"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}

                        />
                    </Col>
                    <Col>
                        <Button onClick={onClear} style={{ height: '100%' }} type="primary" danger>
                            Reset
                        </Button>
                    </Col>
                </Row>

                <div className="list-data">

                    {
                        data.map((item) => {
                            const price = item.price || "9000" + "VND";
                            return (

                                <Link
                                    key={item.id}
                                    to={`/admin/product/detail/${item.id}`}
                                >
                                    <Card

                                        className="product-item"
                                        hoverable
                                        cover={
                                            <Image
                                                src={item.images[0]}
                                                fallback="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs="
                                            />
                                        }
                                    >
                                        <Meta title={item.name} description={price} />
                                    </Card>
                                </Link>

                            )
                        })
                    }

                </div>
            </Spin >
        </div>
    )
}

export default ListProduct