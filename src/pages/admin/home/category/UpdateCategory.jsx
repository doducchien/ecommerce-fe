import useUpdateCategory from "./hook/udpate_category_hook"
import { Row, Col } from 'antd'
function UpdateCategory() {
    const { categoryDetail } = useUpdateCategory();

    console.log(categoryDetail)

    return (
        <div className="update-category-page">
            <Row>
                <Col>
                    <Col>Category Icon</Col>
                    <Col></Col>
                </Col>
            </Row>
        </div>
    )
}

export default UpdateCategory