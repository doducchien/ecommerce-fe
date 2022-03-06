import { Col, Row, Spin } from "antd";
import CarouselSection from "../common_ui/CarouselSection";
import FooterSection from "../common_ui/FooterSection";
import HeaderSection from "../common_ui/HeaderSection";
import MenuSection from "../common_ui/MenuSection";
import AllProduct from "./AllProduct";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";


function HomePublic() {

    const listPending = useSelector(state => state.loading.listPending)
    const fetchProductMode = useSelector(state => state?.fetchProductMode?.mode)
    const productRef = useRef();
    useEffect(()=>{
        const [mode, content] = fetchProductMode.split("-");

        if(mode !== 'ALL'){
            productRef.current.scrollIntoView();
        }
    }, [fetchProductMode])

    return (

        <Spin spinning={listPending.length > 0}>
            <main className="home-page">
                <HeaderSection />
                <div className="content">
                    <Row wrap={false}>
                        <Col flex="none">
                            <MenuSection />
                        </Col>
                        <Col flex="auto">
                            <CarouselSection />
                        </Col>
                    </Row>
                    <Row ref={productRef} className="content-product">
                        <AllProduct />
                    </Row>
                </div>

                <FooterSection />
            </main>
        </Spin>
    )
}

export default HomePublic;