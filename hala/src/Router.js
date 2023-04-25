import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login" ;
import Register from "./pages/Register" ;
import App from "./App";
import { Children } from "react";
import NotFound from "./shared/NotFound";
import SecondProductList from "./pages/second_warehouse/WilliamSupervisorProductList" ;
import ThirdProductList from "./pages/third_warehouse/CharlesSupervisorProductList";
import ThreeProductList from "./pages/admin-three/CharlesDickensAdminProductList";
import StephenKingAdminProductList from "./pages/admin_one/StephenKingAdminProductList";
import WilliamShakespeareAddButton from "./pages/admin-two/WilliamShakespeareAddButton";
import WilliamShakespeareAdminProductCard from "./pages/admin-two/william_shakespeare_components/WilliamShakespeareAdminProductCard";
import WilliamShakespeareAdminProductList from "./pages/admin-two/WilliamShakespeareAdminProductList";
import CharlesDickensAdminProductCard from "./pages/admin-three/charles_dickens_components/CharlesDeckinsAdminProductCard";
import CharlesDickensAdminProductList from "./pages/admin-three/CharlesDickensAdminProductList";
import StephenSupervisorProductList from "./pages/first_warehouse/StephenSupervisorProductList";
import WilliamSupervisorProductList from "./pages/second_warehouse/WilliamSupervisorProductList";
import CharlesSupervisorProductList from "./pages/third_warehouse/CharlesSupervisorProductList";
import History from "./pages/History/History";
import AdminHome from "./pages/AdminHome";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        //nesting routes
        children: [
            {
                path: "/",
                //changes

                // element: <CharlesDickensAdminProductList/>
                // element: <WilliamShakespeareAdminProductList/>
                // element: <StephenKingAdminProductList/>

                // element: <WilliamSupervisorProductList/>
                element: <CharlesSupervisorProductList/>
                // element: <StephenSupervisorProductList/>
                
            },
            

            
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            
            {
                //wild card route
                path:"*",
                element: <NotFound/>
            },
            
            {
                path: "/history",
                element: <History/>
            },
            {
                path: "/home",
                element: <AdminHome/>
            },
            {
                path: "/add",
                element: <AddProduct/>
            },
            {
                path: "/edit",
                element: <EditProduct/>
            },
            
            
        ],
}  ,


]);

