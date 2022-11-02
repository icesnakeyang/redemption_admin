import {apiListUser} from "../../api/Api";
import {useEffect, useState} from "react";
import {Pagination, PaginationProps} from "antd";
import UserRow from "./UserRow";

const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${total} items`;

const UserBaseList = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [userList, setUserList] = useState([]);
    const [totalUser, setTotalUser] = useState(0);

    useEffect(() => {
        loadAllData()
    }, [pageIndex])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize,
        };
        console.log(params)
        apiListUser(params).then((res: any) => {
            if (res.code === 0) {
                setUserList(res.data.userList);
                setTotalUser(res.data.totalUser);
            }
        });
    }
    return (
        <div>
            {userList.length > 0 ? (
                <>
                    {userList.map((item, index) => (
                        <UserRow item={item} key={index}/>
                    ))}
                    <Pagination
                        style={{marginTop:20}}
                        size="small"
                        total={totalUser}
                        showTotal={showTotal}
                        showQuickJumper
                        onChange={(page) => {
                            console.log(page)
                            setPageIndex(page)
                        }}
                    />
                </>
            ) : null
            }
        </div>
    )
}
export default UserBaseList
