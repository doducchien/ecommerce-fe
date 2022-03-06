import { useAllProduct } from "../hooks/allProduct.hook";
import { Card, Col, Row, Pagination, Typography } from "antd";
import { listRoute } from "../../../constants/list_route";
const { Meta } = Card;
const { Text, Title } = Typography;

function AllProduct() {
    const { productFetch, onChangePage, page, labelFetch } = useAllProduct();

    return (
        <section className="all-product-section">
            <Row>
                <Title level={3}>{labelFetch}</Title>
            </Row>
            <Row justify='space-between'>
                {(productFetch?.data || []).map(item => {
                    const { specifications, price } = item;
                    const { ram, memory } = specifications;
                    return (

                        <Card
                            className="cart-product"
                            key={item.id}
                            hoverable
                            cover={<img className="img-cover" src={`${listRoute.UPLOAD}/${item.images[0]}`} />}
                        >
                            <Meta title={item.name} description={`RAM: ${ram} - Memory: ${memory}`} />
                            <h3>{price}</h3>
                        </Card>

                    )
                })}
            </Row>
            <Row justify="end">
                <Pagination onChange={onChangePage} defaultCurrent={page} current={page} total={productFetch?.total || 0} />
            </Row>

        </section>
    );
}

export default AllProduct;