import {Card} from "antd";

const SurveyStatisticBox = (data: any) => {
    const {item} = data
    return (
        <Card style={{marginTop: 10}}>
            <div>{item.q_title}</div>
            <div>{item.q_content}</div>
            <div style={{display: 'flex'}}>
                <div>Yes: {item.yes}</div>
                <div style={{marginLeft: 20}}>No: {item.no}</div>
            </div>
        </Card>
    )
}
export default SurveyStatisticBox
