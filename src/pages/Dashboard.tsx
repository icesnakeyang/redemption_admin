import {
    Button,
    Card,
    Col,
    message,
    Row,
    Statistic,
} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {apiListUser, apiLoadExportData1, apiLoadUserStatistic, apiStatisticSurvey1} from "../api/Api";
import SurveyStatisticBox from "./SurveyStatisticBox";
// import ExportJsonExcel from 'js-export-excel'
import exportFromJSON from 'export-from-json'

const Dashboard = () => {
    const {t} = useTranslation();
    const [surveyList, setSurveyList] = useState([])
    const [totalUserBase, setTotalUserBase] = useState(0)

    useEffect(() => {
        loadAllData();

        return (() => {

        })

    }, []);

    const loadAllData = () => {


        apiLoadUserStatistic().then((res: any) => {
            if (res.code === 0) {
                setTotalUserBase(res.data.totalUserBase)
            }
        })

        apiStatisticSurvey1().then((res: any) => {
            if (res.code === 0) {
                setSurveyList(res.data.statisticSurvey1)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    };

    /**
     * export excel file
     */
    const onDownload = () => {
        apiLoadExportData1({}).then((res: any) => {
            if (res.code === 0) {
                const data = res.data.dataList
                const fileName = 'download'
                const exportType = exportFromJSON.types.xls
                exportFromJSON({data, fileName, exportType})
            }
        });
    }

    return (
        <div>
            <Row gutter={10}>
                <Col span={8}>
                    <Card>
                        <Statistic title="Surveyed Users" value={totalUserBase} valueStyle={{color: '#3f8600'}}/>
                    </Card>
                </Col>
                <Col span={8} style={{display: 'flex', alignItems: 'center'}}>
                    <Button type='primary' onClick={() => {
                        onDownload()
                    }}>Download Users</Button>
                </Col>
            </Row>

            {/*<Row>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="container"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c2"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c3"></div>*/}
            {/*    </Col>*/}
            {/*    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>*/}
            {/*        <div id="c4"></div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}


            <Card title="Survey Statistic" style={{marginTop: 20}}>
                {
                    surveyList.length > 0 ?
                        surveyList.map((item, index) => (
                            <SurveyStatisticBox item={item} key={index}/>
                        )) : null
                }
            </Card>


        </div>
    );
};
export default Dashboard;
