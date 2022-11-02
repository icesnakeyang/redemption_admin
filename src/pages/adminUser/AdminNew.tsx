import {Button, Form, Input, message} from "antd";
import {useState} from "react";
import {apiCreateAdmin} from "../../api/Api";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const AdminNew = () => {
    const [loginName, setLoginName] = useState('')
    const [password, setPassword] = useState('')
    const {t} = useTranslation()
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate()

    const onSave = () => {
        if (!loginName) {
            message.error('Please input login name')
            return
        }
        if (!password) {
            message.error('Please input password')
        }
        let params = {
            loginName,
            password
        }
        setSaving(true)
        apiCreateAdmin(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Create admin success')
                navigate(-1)
            } else {
                message.error(t('syserr.' + res.code))
                setSaving((false))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
            setSaving(false)
        })
    }
    return (<div>
        <Form>
            <Form.Item label="Login name">
                <Input placeholder="Input login name" onChange={(e) => {
                    setLoginName(e.target.value)
                }}/>
            </Form.Item>
            <Form.Item label="Login password">
                <Input placeholder="Input login password" type="password"
                       onChange={(e) => {
                           setPassword(e.target.value)
                       }}/>
            </Form.Item>
        </Form>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
            {saving ?
                <Button type='primary' loading>Saving</Button> :
                <Button type="primary" onClick={() => {
                    onSave()
                }}>Save</Button>}
        </div>
    </div>)
}
export default AdminNew
