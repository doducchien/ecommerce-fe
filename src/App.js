import React, { Suspense } from 'react'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Signup from './pages/admin/authentication/Signup';
import useInit from './common_hook/init_hook';
import { Redirect } from 'react-router-dom';
import HomePublic from './pages/public/home_public/HomePublic';
import { listRoute } from './constants/list_route';


const AuthenPage = React.lazy(() => import("./pages/admin/Admin"))
const Login = React.lazy(() => import("./pages/admin/authentication/Login"))
const Home = React.lazy(() => import("./pages/admin/home/Home"))

function App() {
  const { authen } = useInit();

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePublic />
          </Route>

          <Route path={listRoute.AUTHEN}>
            <Suspense fallback={<div>Loading...</div>}>
              {!authen?.isSuccess ? <AuthenPage /> : <Redirect to={listRoute.DASHBOARD_ADMIN} />}
            </Suspense>
          </Route>
          <Route path={listRoute.ADMIN} >
            <Suspense fallback={<div>Loading...</div>}>
              {authen?.isSuccess ? <Home /> : <Redirect to={listRoute.LOGIN_AUTHEN} />}
            </Suspense>

          </Route>
          {/* <Route path="/admin" exact>
            
              <Suspense fallback={<div>Loading...</div>}>
                <HomeAdmin />
              </Suspense> :
              <Redirect to="/" />
            }

          </Route>

          <Route path="/admin/login">
            {!authen?.isSuccess ?
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense> :
              <Redirect to="/admin" />
            }

          </Route>
          <Route path="/admin/signup">

            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>

          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
