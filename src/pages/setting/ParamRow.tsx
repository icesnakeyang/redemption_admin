import {Button, Card, Col, Row} from "antd";
import {useNavigate} from "react-router-dom";

const ParamRow = (data: any) => {
    const {item} = data
    const navigate = useNavigate()
    return (
        <Card>
            <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={6} xxl={6}>{item.paramName}</Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={6} xxl={6}>{item.paramValue}</Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={6} xxl={6}><Button type='primary' size='small' onClick={() => {
                    navigate("/ParamEdit", {state: {settingId: item.settingId}})
                }}>Edit</Button> </Col>
            </Row>
        </Card>
    )
}

export default ParamRow
