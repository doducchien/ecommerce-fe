import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import useLayout from "../../../../common_hook/layout_hook";
import { listRoute } from "../../../../constants/list_route";
import ListProduct from "./ListProduct";
import ProductDetail from "./ProductDetail";

function Product() {

    useLayout({ code: 'product', label: "Product" })
    return (
        <Switch>
            <Route path={listRoute.PRODUCT_ADMIN} exact>
                <ListProduct />
            </Route>

            <Route path={listRoute.PRODUCT_ADMIN_DETAIL} >
                <ProductDetail />
            </Route>
        </Switch>
    )
}

export default Product;