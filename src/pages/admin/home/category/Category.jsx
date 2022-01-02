import { Switch, Route } from 'react-router-dom';
import { listRoute } from '../../../../constants/list_route';
import ListCategory from './ListCategory';

function Category() {


    return (
        <Switch>
            <Route path={listRoute.CATEGORY_ADMIN_LIST} exact>
                <ListCategory />
            </Route>
        </Switch>
    )
}

export default Category;