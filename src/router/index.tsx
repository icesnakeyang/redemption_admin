import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/layout/MainLayout";
import LoginIn from "../pages/LoginIn";
import UserDetail from "../pages/UserDetail";
import SurveyList from "../pages/survey/SurveyList";
import SurveyEdit from "../pages/survey/SurveyEdit";

const ProtectRouter = ({ children }: any) => {
  let token = localStorage.getItem("redemption_admin_token") || null;
  console.log("token:" + token);
  return token ? children : <Navigate to="/login" />;
};

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginIn />} />
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <ProtectRouter>
              <Dashboard />
            </ProtectRouter>
          }
        />
        <Route
          path="/userDetail"
          element={
            <ProtectRouter>
              <UserDetail />
            </ProtectRouter>
          }
        />
          <Route
          path="/SurveyList"
          element={
            <ProtectRouter>
              <SurveyList />
            </ProtectRouter>
          }
        />
          <Route
          path="/SurveyEdit"
          element={
            <ProtectRouter>
              <SurveyEdit />
            </ProtectRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routers;
