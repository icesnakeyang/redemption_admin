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
        if (e.key === "menuNote") {
            navigate("/main/noteList");
        }
        if (e.key === "menuContact") {
            navigate("/main/contactList");
        }
        if (e.key === "menuTaskTodoList") {
            navigate("/main/TodoPage");
        }
        if (e.key === "menuCreativeNote") {
            navigate("/main/CreativeNoteList");
        }
        if (e.key === "menuQuadrantTaskList") {
            navigate("/main/QuadrantTaskList");
        }
        if (e.key === "menuThemeSetting") {
            navigate("/main/ThemeSetting");
        }
        if (e.key === "menuMyProfilePage") {
            navigate("/main/MyProfilePage");
        }
        if (e.key === "menuMyReceiveNote") {
            navigate("/main/MyReceiveNote");
        }
        if (e.key === "menuMySendNote") {
            navigate("/main/MySendNote");
        }
        if (e.key === "menuSurveyList") {
            navigate("/SurveyList");
        }
        if (e.key === "menuAdminUserList") {
            navigate("/AdminUserList");
        }
        if (e.key === "menuUserBase") {
            navigate("/UserBaseList");
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
