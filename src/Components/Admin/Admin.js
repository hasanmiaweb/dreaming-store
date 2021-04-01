import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct/AddProduct";
import "./Admin.css";
import ManageProduct from "./ManageProduct/ManageProduct";
import Sidebar from "./SideBar/Sidebar";
const Admin = () => {
  return (
    <div>
      <Router>
        <Sidebar></Sidebar>
        <Switch>
         
          <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
          </Route>
          <Route path="/addProduct">
              <AddProduct></AddProduct>
          </Route>
          <Route path="/">
              <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Admin;
