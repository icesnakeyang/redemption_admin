import {Button, Form, Input, message} from "antd"
import {useState} from "react";
import {apiSaveSurvey} from "../../api/Api";
import {useTranslation} from "react-i18next";

const SurveyEdit = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {t} = useTranslation()
    const [saving, setSaving] = useState(false)

    const onSubmit = () => {
        if (!title) {
            return
        }
        if (!content) {
            return;
        }
        let params = {
            title,
            content
        }
        setSaving(true)
        apiSaveSurvey(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Save question success')
            } else {
                message.error(t('syserr.' + res.code))
                setSaving(false)
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
            setSaving(false)
        })
    }
    return (
        <div>
            <Form>
                <Form.Item>
                    <div>Title</div>
                    <Input placeholder="Question title" onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item>
                    <div>Content</div>
                    <Input placeholder="Question content" onChange={(e) => {
                        setContent(e.target.value)
                    }}/>
                </Form.Item>
            </Form>
            <div>
                {saving ?
                    <Button type='primary' loading={true}>Submit</Button> :
                    <Button type='primary' onClick={() => {
                        onSubmit()
                    }}>Submit</Button>}
            </div>
        </div>
    )
}
export default SurveyEdit
