import {apiListSetting} from "../../api/Api";
import {Button, Card, message, Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import ParamRow from "./ParamRow";
import {useNavigate} from "react-router-dom";

const SettingPage = () => {
    const {t} = useTranslation()
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [settingList, setSettingList] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadAllData()
    }, [pageIndex])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize
        }
        console.log(params)
        apiListSetting(params).then((res: any) => {
            if (res.code === 0) {
                setSettingList(res.data.settingList)
                setLoading(false)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }
    return (<div>
        <Card>
            <Button type='primary' onClick={() => {
                navigate("/ParamNew")
            }}>Add New Parameter</Button>
        </Card>
        {
            loading ?
                <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 150}}>
                    <Spin size='large'/>
                </div> :
                settingList.length > 0 ?
                    settingList.map((item, index) => (
                        <ParamRow item={item} key={index}/>
                    ))
                    :
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 150}}>no data</div>
        }

    </div>)
}
export default SettingPage
