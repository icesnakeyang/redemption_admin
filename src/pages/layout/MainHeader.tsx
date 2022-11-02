import { Badge, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined, GlobalOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {clearAdmin, saveLoginName} from "../../store/adminSlice";

const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminName =
    useSelector((state: any) => state.adminSlice.loginName) || null;
  const { t } = useTranslation();

  const onMenu = (e: any) => {
    if (e.key === "menuSignOut") {
      localStorage.removeItem("redemption_admin_token");
      dispatch(clearAdmin());
      navigate("/", {replace: true});
    }
    if (e.key === "menuSignIn") {
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Menu
        style={{
          width: "100%",
          justifyContent: "flex-end",
        }}
        theme="dark"
        mode="horizontal"
        items={[
          {
            key: "2",
            icon: <UserOutlined />,
            label: adminName ? adminName : "Unsigned",
            children: [
              adminName
                ? {
                    key: "menuSignOut",
                    label: t("nav.signOut"),
                  }
                : {
                    key: "menuSignIn",
                    label: t("nav.signIn"),
                  },
            ],
          },
          {
            key: "1",
            label: t("nav.language"),
            icon: <GlobalOutlined />,
            children: [
              {
                label: "English",
                key: "menuLanEn",
              },
            ],
          },
        ]}
        onClick={(e) => {
          onMenu(e);
        }}
      />
    </div>
  );
};
export default MainHeader;
