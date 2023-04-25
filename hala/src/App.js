
import SupervisorHeader from "./shared/SupervisorHeader";
import Footer from "./shared/Footer";
import './style/App.css';
import { Outlet } from "react-router-dom";
import AdminHeader from "./shared/AdminHeader";


const App = () => {
  return (
    <>
    {/* admin */}
      {/* <AdminHeader/>  */}

     {/* supervisor          */}
      <SupervisorHeader />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App;
