import {
    Button,
    Card,
    Col,
    message,
    Pagination,
    PaginationProps,
    Row,
    Statistic,
    Table,
} from "antd";
import Item from "antd/lib/list/Item";
import moment from "moment";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {apiListUser, apiLoadUserStatistic, apiStatisticSurvey1} from "../api/Api";
import DashboardUserRow from "./DashboardUserRow";
import SurveyStatisticBox from "./SurveyStatisticBox";

const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${total} items`;

const Dashboard = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [userList, setUserList] = useState([]);
    const [totalUser, setTotalUser] = useState(0);
    const [surveyList, setSurveyList] = useState([])
    const [totalUserBase, setTotalUserBase] = useState(0)


    useEffect(() => {
        loadAllData();
    }, []);

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize,
        };
        apiListUser(params).then((res: any) => {
            if (res.code === 0) {
                setUserList(res.data.userList);
                setTotalUser(res.data.totalUser);
            }
        });

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

    const userColumns = [
        {
            title: "User name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "createTime",
            dataIndex: "createTime",
            key: "createTime",
            render: (text: any) => <span>{moment(text).format("LLL")}</span>,
        },
        {
            title: "email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "icnumber",
            dataIndex: "icnumber",
            key: "icnumber",
        },
        {
            title: "postcode",
            dataIndex: "postcode",
            key: "postcode",
        },
        {
            title: "Action",
            dataIndex: "userId",
            key: "userId",
            render: (userId: any) => (
                <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                        console.log(userId);
                        navigate("userDetail", {state: {userId}});
                    }}
                >
                    Detail
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Row gutter={10}>
                <Col span={6}>
                    <Card>
                        <Statistic title="Surveyed Users" value={totalUserBase} valueStyle={{color: '#3f8600'}}/>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Account Balance (CNY)" value={totalUserBase} precision={2}/>
                    </Card>

                </Col>
            </Row>

            <Card title="Survey Statistic" style={{marginTop: 20}}>
                {
                    surveyList.length > 0 ?
                        surveyList.map((item, index) => (
                            <SurveyStatisticBox item={item} key={index}/>
                        )) : null
                }
            </Card>

            {userList.length > 0 ? (
                <Card title="Surveyed Users" style={{marginTop: 20}}>
                    <Table dataSource={userList} columns={userColumns}/>
                    {/* <Row>
            <Col>User name</Col>
            <Col>User name</Col>
          </Row>
          {userList.map((item, index) => (
            <DashboardUserRow item={item} key={index} />
          ))}
          <Pagination
            size="small"
            total={totalUser}
            showTotal={showTotal}
            showQuickJumper
          /> */}
                </Card>
            ) : null}
        </div>
    );
};
export default Dashboard;
