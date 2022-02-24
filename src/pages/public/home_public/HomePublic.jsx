import { Col, Row } from "antd";
import CarouselSection from "../common_ui/CarouselSection";
import HeaderSection from "../common_ui/HeaderSection";
import MenuSection from "../common_ui/MenuSection";
function HomePublic() {


    return (
        <main className="home-page">
            <HeaderSection />
            <Row wrap={false}>
                <Col flex="none">
                    <MenuSection />
                </Col>
                <Col flex="auto">
                    <CarouselSection />
                </Col>


            </Row>
        </main>
    )
}

export default HomePublic;