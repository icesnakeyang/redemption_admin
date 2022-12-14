import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/layout/MainLayout";
import LoginIn from "../pages/LoginIn";
import UserDetail from "../pages/userBase/UserDetail";
import SurveyList from "../pages/survey/SurveyList";
import SurveyEdit from "../pages/survey/SurveyEdit";
import AdminUserList from "../pages/adminUser/AdminUserList";
import AdminNew from "../pages/adminUser/AdminNew";
import UserBaseList from "../pages/userBase/UserBaseList";
import SettingPage from "../pages/setting/SettingPage";
import ParamEdit from "../pages/setting/ParamEdit";
import ParamNew from "../pages/setting/ParamNew";
import SendPhone from "../pages/sendPhone/SendPhone";

const ProtectRouter = ({children}: any) => {
    let token = localStorage.getItem("redemption_admin_token") || null;
    console.log("token:" + token);
    return token ? children : <Navigate to="/login"/>;
};

const Routers = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginIn/>}/>
            <Route path="/" element={<MainLayout/>}>
                <Route
                    path="/"
                    element={
                        <ProtectRouter>
                            <Dashboard/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/UserBaseList"
                    element={
                        <ProtectRouter>
                            <UserBaseList/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/userDetail"
                    element={
                        <ProtectRouter>
                            <UserDetail/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/SurveyList"
                    element={
                        <ProtectRouter>
                            <SurveyList/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/SurveyEdit"
                    element={
                        <ProtectRouter>
                            <SurveyEdit/>
                        </ProtectRouter>
                    }
                />
                {/*  <Route*/}
                {/*  path="/AdminUserList"*/}
                {/*  element={*/}
                {/*    <ProtectRouter>*/}
                {/*      <AdminUserList />*/}
                {/*    </ProtectRouter>*/}
                {/*  }*/}
                {/*/>*/}
                <Route
                    path="/AdminNew"
                    element={
                        <ProtectRouter>
                            <AdminNew/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/SettingPage"
                    element={
                        <ProtectRouter>
                            <SettingPage/>
                        </ProtectRouter>
                    }
                />
                <Route
                    path="/ParamEdit"
                    element={
                        <ProtectRouter>
                            <ParamEdit/>
                        </ProtectRouter>
                    }
                />
                <Route
                path="/ParamNew"
                element={
                    <ProtectRouter>
                        <ParamNew/>
                    </ProtectRouter>
                }
            />
                <Route
                path="/SendPhone"
                element={
                    <ProtectRouter>
                        <SendPhone/>
                    </ProtectRouter>
                }
            />
            </Route>
        </Routes>
    );
};

export default Routers;
