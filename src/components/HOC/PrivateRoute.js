import {Navigate} from "react-router";
import {AppRoutes} from "../../Routing/AppRoutes";

const PrivateRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser?.id ? <Component/> : <Navigate to={AppRoutes.MAIN}/>
}

const PublicRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser?.id ? <Navigate to={AppRoutes.CARS}/> : <Component/>
}

export {PrivateRoute, PublicRoute};