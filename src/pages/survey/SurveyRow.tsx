import {Card} from "antd"

const SurveyRow = (data: any) => {
    const {item} = data
    return (
        <Card style={{marginTop: 10}}>
            <div>{item.qtitle}</div>
            <div>{item.qcontent}</div>
        </Card>
    )
}
export default SurveyRow
