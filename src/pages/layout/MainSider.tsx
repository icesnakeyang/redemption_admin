import {Menu} from "antd";
import {
    AppstoreOutlined,
    CheckSquareOutlined,
    DashboardOutlined, IdcardOutlined,
    ReadOutlined,
    SettingOutlined, SolutionOutlined,
    TeamOutlined, UsergroupAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const MainSider = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const onMenu = (e: any) => {
        if (e.key === "menuDashboard") {
            navigate("/");
        }
        if (e.key === "menuSettings") {
            navigate("/SettingPage");
        }
    };
    return (
        <Menu
            style={{marginTop: 50}}
            mode="inline"
            theme="dark"
            items={[
                {
                    key: "menuDashboard",
                    icon: <DashboardOutlined/>,
                    label: t("nav.dashboard"),
                },
                {
                    key: "menuSettings",
                    icon: <SettingOutlined />,
                    label: t("nav.settings"),
                },
                // {
                //     key: 'menuUserBase',
                //     icon: <TeamOutlined />,
                //     label: t('nav.userBase')
                // },
                // {
                //     key: "menuSurveyList",
                //     icon: <SolutionOutlined />,
                //     label: t("nav.surveyList"),
                // },
                // {
                //     key: "menuAdminUserList",
                //     icon: <IdcardOutlined />,
                //     label: t("nav.adminUserList"),
                // },
            ]}
            onClick={(e) => {
                onMenu(e);
            }}
        />
    );
};

export default MainSider;
