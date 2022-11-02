import {Col, Row} from "antd";
import moment from "moment";

const UserRow = (data: any) => {
    const {item} = data
    return (
        <div style={{marginTop:10, background:'#506a8f'}}>
            <Row>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div style={{display: 'flex', background: '#88a2bd',margin:2}}>
                        <div style={{width: 100, display: 'flex', justifyContent: 'flex-end'}}>Name</div>
                        <div style={{width: 100, marginLeft: 10}}>{item.name}</div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div style={{display: 'flex', background: '#88a2bd', margin:2}}>
                        <div style={{width: 100, display: 'flex', justifyContent: 'flex-end'}}>Phone</div>
                        <div style={{width: 100, marginLeft: 10}}>{item.phone}</div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div style={{display: 'flex', background: '#88a2bd',margin:2}}>
                        <div style={{width: 100, display: 'flex', justifyContent: 'flex-end'}}>IC Number</div>
                        <div style={{width: 100, marginLeft: 10}}>{item.icnumber}</div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div style={{display: 'flex', background: '#88a2bd',margin:2}}>
                        <div style={{width: 100, display: 'flex', justifyContent: 'flex-end'}}>Survey time</div>
                        <div style={{width: 100, marginLeft: 10}}>{moment(item.createTime).format('ll')}</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default UserRow
