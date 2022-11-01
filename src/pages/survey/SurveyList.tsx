import {useEffect, useState} from "react"
import {apiListSurvey} from "../../api/Api";
import {Button, Card, message} from "antd";
import {useTranslation} from "react-i18next";
import SurveyRow from "./SurveyRow";
import {useNavigate} from "react-router-dom";

const SurveyList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [surveyList, setSurveyList] = useState([])
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize
        }
        apiListSurvey(params).then((res: any) => {
            if (res.code === 0) {
                setSurveyList(res.data.surveyList)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }
    return (
        <div>
            <div>
                <Card>
                    <Button type='primary' onClick={() => {
                        navigate('/SurveyEdit')
                    }}>Create Survey Question</Button>
                </Card>
            </div>
            {
                surveyList.length > 0 ?
                    <div>
                        {surveyList.map((item, index) => (
                            <SurveyRow item={item} key={index}/>
                        ))}
                    </div> : <div>no data</div>
            }
        </div>
    )
}
export default SurveyList
