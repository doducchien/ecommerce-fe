import { Switch, Route } from 'react-router-dom';
import { listRoute } from '../../../../constants/list_route';
import AddCategory from './AddCategory';
import ListCategory from './ListCategory';
import UpdateCategory from './UpdateCategory';

function Category() {


    return (
        <Switch>
            <Route path={listRoute.CATEGORY_ADMIN_LIST} exact>
                <ListCategory />
            </Route>
            <Route path={listRoute.CATEGORY_ADMIN_UPDATE} >
                <UpdateCategory />
            </Route>
            {/* <Route path={listRoute.CATEGORY_ADMIN_ADD} >
                <AddCategory />
            </Route> */}
        </Switch>
    )
}

export default Category;