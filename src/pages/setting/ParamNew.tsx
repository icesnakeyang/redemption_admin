import {Button, Card, Form, Input, message} from "antd"
import {useState} from "react";
import {apiCreateSetting} from "../../api/Api";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const ParamNew = () => {
    const [paramName, setParamName] = useState('')
    const [paramValue, setParamValue] = useState('')
    const [saving, setSaving] = useState(false)
    const {t} = useTranslation()
    const navigate = useNavigate()

    const onAddParam = () => {
        let params = {
            paramName,
            paramValue
        }
        console.log(params)
        setSaving(true)
        apiCreateSetting(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Save parameter success')
                navigate(-1)
            } else {
                message.error(t('syserr.' + res.code))
                setSaving(false)
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
            setSaving(false)
        })
    }
    return (<div>
        <Card>
            <Form>
                <Form.Item label='Parameter Name'>
                    <Input onChange={(e) => {
                        setParamName(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label='Parameter Value'>
                    <Input onChange={(e) => {
                        setParamValue(e.target.value)
                    }}/>
                </Form.Item>
            </Form>
            <div style={{display: 'flex', justifyContent: "center", marginTop: 20}}>
                {saving ?
                    <Button type='primary' loading>Saving</Button>
                    :
                    <Button type='primary' onClick={() => {
                        onAddParam()
                    }}>Save</Button>}
            </div>
        </Card>
    </div>)
}
export default ParamNew
