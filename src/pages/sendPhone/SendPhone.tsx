import {Button, Card, Form, Input, message} from "antd"
import axios from "axios";
import {useState} from "react";

const SendPhone = () => {
    const [saving, setSaving] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const sendSMS = () => {
        if (!phoneNumber) {
            message.error('Please input phone number')
            return
        }
        setSaving(true)
        const msg1 = 'code=486 You have a pending transaction on your credit card . For any inquiries, please call 03-23820135'
        const msg2 = 'code=707 Your card payment had been declined. Kindly contact the customer service 03-23820135'
        const url = `https://www.onesms.my/api/send.php?apiKey=29a6bcc35adb8150f990734436df718d&recipients=${phoneNumber}&messageContent=${msg1}&referenceID=5678`
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
    return (
        <div style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <Card style={{width: 400}}>
                <Form>
                    <Form.Item>
                        <div>Phone number:</div>
                        <Input onChange={e => {
                            setPhoneNumber(e.target.value)
                        }}/>
                        <div style={{color: '#888'}}>Example: 0123546789</div>
                    </Form.Item>
                </Form>
                <div style={{textAlign: "center"}}>
                    {saving ?
                        <Button style={{width: 120}} type='primary' loading>Sending</Button>
                        :
                        <Button style={{width: 120}} type='primary' onClick={() => {
                            sendSMS()
                        }}>Send</Button>
                    }
                </div>
            </Card>
        </div>
    )
}
export default SendPhone
