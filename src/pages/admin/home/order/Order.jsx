import { Route, Switch } from "react-router-dom";
import useLayout from "../../../../common_hook/layout_hook";
import { listRoute } from "../../../../constants/list_route";
import DetailOrder from "./DetailOrder";
import ListOrder from "./ListOrder";


export default function Order() {

    useLayout({ code: "Order", label: "Order" })

    return (
        <div className="order-page">
            <Switch>
                <Route path={listRoute.ORDER_ADMIN_LIST} exact>
                    <ListOrder />
                </Route>
                <Route path={listRoute.ORDER_ADMIN_DETAIL}>
                    <DetailOrder/>
                </Route>
            </Switch>
        </div>

    );
}