import {Button, Card, message} from "antd";
import {apiListAdminUser} from "../../api/Api";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import AdminListRow from "./AdminListRow";

const AdminUserList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [adminList, setAdminList] = useState([])
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
        loadAllData()
    }, [])


    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize
        }
        apiListAdminUser(params).then((res: any) => {
            console.log(res)
            if (res.code === 10002) {
                navigate("/login")
            }
            if (res.code === 0) {
                setAdminList(res.data.adminList)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }
    return (
        <div>
            <Card>
                <Button type="primary" onClick={() => {
                    navigate('/AdminNew')
                }}>Create Admin User</Button>
            </Card>

            {adminList.length > 0 ?
                adminList.map((item, index) => (
                    <AdminListRow item={item} key={index}/>
                )) : null
            }
        </div>
    )
}
export default AdminUserList
