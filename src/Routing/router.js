import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../components/AppLayout/AppLayout";
import App from "../App";
import UsersContainer from "../components/UsersContainer/UsersContainer";
import Comments from "../components/UsersContainer/Comments/Comments";
import {AppRoutes} from "./AppRoutes";
import LoginPage from "../components/LoginPage/LoginPage";
import Main from "../components/Main/Main";
import {PrivateRoute, PublicRoute} from "../components/HOC/PrivateRoute";
import UserId from "../components/UsersContainer/Users/UserId/UserId";

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Ooopps, wrong route</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <Main/>
            },
            {
                path: AppRoutes.LOGIN,
                element: <PublicRoute Component={LoginPage}/>
            },
            {
                path: AppRoutes.CARS,
                element: <PrivateRoute Component={App}/>
            },
            {
                path: AppRoutes.USERS,
                element: <PrivateRoute Component={UsersContainer}/>,
                children: [
                    {
                        path: AppRoutes.USERID,
                        element: <UserId/>
                    },
                ]
            },
            {
                path: AppRoutes.COMMENTS,
                element: <PrivateRoute Component={Comments}/>

            }
        ]

    },
])

export default router;