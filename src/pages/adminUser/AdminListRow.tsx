import {Card, Col, Row} from "antd";
import moment from "moment";

const AdminListRow = (data: any) => {
    const {item} = data
    return (
        <div style={{background: '#d1dae6', marginTop: 10, padding: 10}}>
            <Row>
                <Col xs={24} sm={12} md={12} lg={12} xl={4} xxl={4}>Admin name: {item.loginName}</Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={4}>Role: {item.roleType}</Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={7} xxl={6}>Last
                    sign: {moment(item.tokenTime).format('lll')}</Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={7} xxl={6}>Register
                    time: {moment(item.createTime).format('lll')}</Col>
            </Row>
        </div>
    )

}
export default AdminListRow
