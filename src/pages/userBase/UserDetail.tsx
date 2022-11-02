import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {apiGetUserDetail} from "../../api/Api";
import {Card, Form, message} from "antd";
import {useTranslation} from "react-i18next";
import moment from "moment";
import UserDetailSurveyRow from "../UserDetailSurveyRow";

const UserDetail = (data: any) => {
    const {userId}: any = useLocation().state;
    const {t} = useTranslation()
    const [userName, setUserName] = useState('')
    const [icNumber, setIcNumber] = useState('')
    const [address, setAddress] = useState('')
    const [createTime, setCreateTime] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [postcode, setPostcode] = useState('')
    const [surveyList, setSurveyList] = useState([])

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            userId
        }
        apiGetUserDetail(params).then((res: any) => {
            if (res.code === 0) {
                setUserName(res.data.user.name)
                setIcNumber(res.data.user.icnumber)
                setAddress(res.data.user.address)
                setCreateTime(res.data.user.createTime)
                setEmail(res.data.user.email)
                setPhone(res.data.user.phone)
                setPostcode(res.data.user.postcode)

                setSurveyList(res.data.surveyList)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }
    return <div style={{marginTop: 20}}>
        <Card title="User Information">
            <Form>
                <Form.Item label="User name">
                    {userName}
                </Form.Item>
                <Form.Item label="IcNumber">
                    {icNumber}
                </Form.Item>
                <Form.Item label="Address">
                    {address}
                </Form.Item>
                <Form.Item label="Create time">
                    {moment(createTime).format('LLLL')}
                </Form.Item><Form.Item label="Email">
                {email}
            </Form.Item><Form.Item label="phone">
                {phone}
            </Form.Item><Form.Item label="Postcode">
                {postcode}
            </Form.Item>
            </Form>
        </Card>

        <Card title="Survey Result" style={{marginTop: 20}}>
            {surveyList.length > 0 ?
                surveyList.map((item, index) => (
                    <UserDetailSurveyRow item={item} key={index}/>
                )) : null}
        </Card>

    </div>;
};
export default UserDetail;
