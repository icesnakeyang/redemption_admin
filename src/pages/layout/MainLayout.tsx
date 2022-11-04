import {Col, Layout, Row} from "antd";
import {Outlet} from "react-router-dom";
import FooterBar from "./FooterBar";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import MainSider from "./MainSider";
import MainHeader from "./MainHeader";

const {Header, Content, Footer, Sider} = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header
                style={{
                    position: "fixed",
                    width: "100%",
                    justifyContent: "space-around",
                    padding: 0,
                    zIndex: 1000,
                }}
            >
                <Row
                    style={{
                        width: "100%",
                        alignItems: "center",
                        height: 10,
                    }}
                >
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={4}
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            margin: 0,
                            padding: 0,
                            width: "100%",
                        }}
                    >
                        {collapsed ? (
                            <a onClick={() => {
                                navigate("/");
                            }}>
                                <img src='/images.png' width="48px"/>
                            </a>
                        ) : (
                            <div
                                style={{
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        color: '#ccc'
                                    }}
                                >
                                    Survey Admin
                                </div>
                            </div>
                        )}
                    </Col>
                    <Col xs={18} sm={18} md={18} lg={20} xl={20}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                            }}
                        >
                            <MainHeader/>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout
                style={{
                    marginTop: "60px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Sider
                    breakpoint="md"
                    onBreakpoint={(e) => {
                        setCollapsed(e);
                    }}
                    theme="dark"
                    style={{}}
                >
                    <MainSider/>
                </Sider>
                <Content style={{margin: 10, padding: 20, width: "60vw"}}>
                    <Outlet/>
                </Content>
            </Layout>
            <Footer>
                <FooterBar/>
            </Footer>
        </Layout>
    );
};

export default MainLayout;
