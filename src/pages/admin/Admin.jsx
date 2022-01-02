import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { listRoute } from '../../constants/list_route';
import Login from "./authentication/Login";
import Signup from './authentication/Signup';
function Admin() {

    const authen = useSelector(state => state.authen)

    const { path, url } = useRouteMatch()

    return (


        <Switch>
            {/* <Route path={listRoute.ADMIN}>
                {authen?.isSuccess ?
                    <Home />
                    :
                    <Redirect to={listRoute.LOGIN_ADMIN} />
                }
            </Route> */}
            <Route path={listRoute.LOGIN_AUTHEN} exact>

                {!authen?.isSuccess ?
                    <Login />
                    :
                    <Redirect to={listRoute.DASHBOARD_ADMIN} />
                }
            </Route>

            <Route path={listRoute.SIGNUP_AUTHEN} exact>

                {!authen?.isSuccess ?
                    <Signup />
                    :
                    <Redirect to={listRoute.DASHBOARD_ADMIN} />
                }
            </Route>

        </Switch >


    )
}

export default Admin;