import { Col, Row } from "antd";

export default function FooterSection() {
    return (
        <footer className="footer-section">


            <Row justify="center">
                <address>

                    <div>
                        © 2021 <b>Hust Ecommerce System</b>
                        . All Rights Reserved. Powered by <b>Pham Dinh Huy</b> .<br />
                        <b>Hanoi University of Science & Technology (HUST)</b>.
                    </div>

                </address>
            </Row>



            <Row justify="center">
                <img src="//cdn.shopify.com/s/files/1/0064/4435/1539/files/1_x37.png?v=1615514832" alt="" />

            </Row>


        </footer>
    )
}