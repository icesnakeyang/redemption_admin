import { Card, Col, Row } from "antd";

const DashboardUserRow = (data: any) => {
  const { item } = data;
  return (
    <Card>
      <Row>
        <Col>{item.name}</Col>
        <Col>{item.phone}</Col>
        <Col>{item.icnumber}</Col>
        <Col>{item.email}</Col>
      </Row>
    </Card>
  );
};
export default DashboardUserRow;
