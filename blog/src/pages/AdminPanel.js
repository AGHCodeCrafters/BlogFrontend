import { Outlet } from "react-router-dom";
import Menu from "../components/AdminPanel/Menu";

const AdminPanel = () => {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
};

export default AdminPanel;
