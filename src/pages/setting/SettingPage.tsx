import {apiListSetting} from "../../api/Api";
import {Button, Card, message} from "antd";
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
        {settingList.length > 0 ?
            settingList.map((item, index) => (
                <ParamRow item={item} key={index}/>
            ))
            :
            <>no data</>
        }
    </div>)
}
export default SettingPage
