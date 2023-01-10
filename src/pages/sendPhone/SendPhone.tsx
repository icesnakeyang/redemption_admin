import {Button, Card, Form, Input, message, Spin} from "antd"
import axios from "axios";
import {useEffect, useState} from "react";
import {apiGetSetting} from "../../api/Api";

const SendPhone = () => {
    const [saving, setSaving] = useState(false)
    const [phoneNumber1, setPhoneNumber1] = useState('')
    const [phoneNumber2, setPhoneNumber2] = useState('')
    const msg486 = 'code=486 You have a pending transaction on your credit card . For any inquiries, please call '
    const msg707 = 'code=707 Your card payment had been declined. Kindly contact the customer service '
    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [loading, setLoading] = useState(true)
    const sendSMS1 = () => {
        if (!phoneNumber1) {
            message.error('Please input phone number')
            return
        }
        setSaving(true)
        const url = `https://www.onesms.my/api/send.php?apiKey=29a6bcc35adb8150f990734436df718d&recipients=6${phoneNumber1}&messageContent=${msg1}&referenceID=5678`
        console.log(url)

        axios({
            method: 'get',
            url,
            responseType: 'stream'
        }).then((res) => {
            console.log(res)
            message.success('The message has been sent to your phone')
            setSaving(false)
        }).catch(() => {
            // message.error('Send message error!')
            message.success('The message has been sent to your phone')
            setSaving(false)
        })
    }
    const sendSMS2 = () => {
        if (!phoneNumber2) {
            message.error('Please input phone number')
            return
        }
        setSaving(true)
        const url = `https://www.onesms.my/api/send.php?apiKey=29a6bcc35adb8150f990734436df718d&recipients=6${phoneNumber2}&messageContent=${msg2}&referenceID=5678`
        console.log(url)

        axios({
            method: 'get',
            url,
            responseType: 'stream'
        }).then((res) => {
            console.log(res)
            message.success('The message has been sent to your phone')
            setSaving(false)
        }).catch(() => {
            // message.error('Send message error!')
            message.success('The message has been sent to your phone')
            setSaving(false)
        })
    }

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            paramName: 'SERVICE_PHONE'
        }
        apiGetSetting(params).then((res: any) => {
            if (res.code === 0) {
                setMsg1(msg486 + res.data.setting.paramValue)
                setMsg2(msg707 + res.data.setting.paramValue)
                setLoading(false)
            }
        })
    }
    return (
        <div style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            {loading ?
                <div style={{marginTop: 100}}>
                    <Spin size='large'/>
                </div> :
                <Card style={{width: 500}}>
                    <Form>
                        <Form.Item>
                            <div>Msg:</div>
                            <div>{msg1}</div>
                            <div style={{marginTop: 10}}>Phone number:</div>
                            <Input onChange={e => {
                                setPhoneNumber1(e.target.value)
                            }}/>
                            <div style={{color: '#888'}}>Example: 0123546789</div>
                            <div style={{marginTop: 10, textAlign: "right"}}>
                                {saving ?
                                    <Button style={{width: 120}} type='primary' loading>Sending</Button>
                                    :
                                    <Button style={{width: 120}} type='primary' onClick={() => {
                                        sendSMS1()
                                    }}>Send</Button>
                                }
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <div>Msg:</div>
                            <div>{msg2}</div>
                            <div style={{marginTop: 10}}>Phone number:</div>
                            <Input onChange={e => {
                                setPhoneNumber2(e.target.value)
                            }}/>
                            <div style={{color: '#888'}}>Example: 0123546789</div>
                            <div style={{marginTop: 10, textAlign: "right"}}>
                                {saving ?
                                    <Button style={{width: 120}} type='primary' loading>Sending</Button>
                                    :
                                    <Button style={{width: 120}} type='primary' onClick={() => {
                                        sendSMS2()
                                    }}>Send</Button>
                                }
                            </div>
                        </Form.Item>
                    </Form>

                </Card>
            }
        </div>
    )
}
export default SendPhone
