import {apiGetSetting, apiUpdateSetting} from "../../api/Api";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Card, Form, Input, message} from "antd";
import FormItem from "antd/es/form/FormItem";
import {useTranslation} from "react-i18next";

const ParamEdit = (data: any) => {
    const {settingId} = useLocation().state;
    console.log(settingId)
    const [paramName, setParamName] = useState('')
    const [paramValue, setParamValue] = useState('')
    const [saving, setSaving] = useState(false)
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            settingId
        }
        apiGetSetting(params).then((res: any) => {
            if (res.code === 0) {
                setParamName(res.data.setting.paramName)
                setParamValue(res.data.setting.paramValue)
            }
        })
    }

    const onSave = () => {
        let params = {
            paramName,
            paramValue,
            settingId
        }
        setSaving(true)
        console.log(params)
        apiUpdateSetting(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Save success')
                navigate(-1)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }
    return (<div>
        <Card>
            <Form>
                <FormItem label='Parameter Name'>
                    <Input value={paramName} onChange={(e) => {
                        setParamName(e.target.value)
                    }}
                    />
                </FormItem>
                <FormItem label='Parameter Value'>
                    <Input value={paramValue} onChange={(e) => {
                        setParamValue(e.target.value)
                    }}
                    />
                </FormItem>
            </Form>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {saving ?
                    <Button type='primary' loading>Saving</Button> :
                    <Button type='primary' onClick={() => {
                        onSave()
                    }}>Save</Button>}
            </div>
        </Card>
    </div>)
}
export default ParamEdit
