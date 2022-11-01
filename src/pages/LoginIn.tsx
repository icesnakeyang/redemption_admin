import {Card, Form, Input, message, Button} from "antd";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {apiAdminLogin} from "../api/Api";
import {saveLoginName} from "../store/adminSlice";

const LoginIn = () => {
    const [loginName, setLoginName] = useState("");
    const [password, setPassword] = useState("");
    const {t} = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [saving, setSaving] = useState(false)

    const onLogin = () => {
        if (!loginName) {
            message.error("Please input login name");
            return;
        }
        if (!password) {
            message.error("Please input password");
            return;
        }
        let params = {
            loginName,
            password,
        };

        setSaving(true)
        apiAdminLogin(params).then((res: any) => {
            if (res.code === 0) {
                localStorage.setItem("redemption_admin_token", res.data.token);
                dispatch(saveLoginName(loginName));
                navigate("/", {replace: true});
            } else {
                message.error(t("syserr." + res.code));
                setSaving(false)
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
            setSaving(false)
        })
    };

    return (
        <div
            style={{
                background: "#ccc",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <div style={{margin: 20}}>
                <h1>Welcome to </h1>
                <h3>Redemption Administration</h3>
            </div>
            <Card style={{width: 400}}>
                <Form>
                    <Form.Item>
                        <div style={{}}>Login name</div>
                        <Input
                            placeholder="Login name"
                            value={loginName}
                            style={{}}
                            onChange={(e) => {
                                setLoginName(e.target.value);
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div style={{}}>Password</div>
                        <Input
                            placeholder="Password"
                            value={password}
                            style={{}}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Form.Item>
                </Form>
                <div style={{display: "flex", justifyContent: "center"}}>
                    {saving ?
                        <Button
                            onClick={() => {
                            }}
                            loading={true}
                        >
                            Login...
                        </Button> :
                        <Button type="primary" onClick={() => {
                            onLogin()
                        }}>Sign in</Button>}
                </div>
            </Card>
        </div>
    )
}
export default LoginIn;

