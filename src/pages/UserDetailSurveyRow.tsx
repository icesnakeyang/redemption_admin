import {Card} from "antd"

const UserDetailSurveyRow = (data: any) => {
    const {item} = data
    return (<Card>
        <div>
            {item.qtitle}
        </div>
        <div>
            {item.qcontent}
        </div>

        <div>
            {item.answerType === 'BOOLEAN' ?
                item.answer === 'true' ?
                    "Yes" : "No" :
                item.answer}
        </div>
    </Card>)
}
export default UserDetailSurveyRow
