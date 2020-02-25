import React from 'react';
import {Table, Pagination, Button} from 'antd'

function Tables(props) {
    const data = [
        {ID:'1', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
    ]
    const columns = [
        {
            title: '充值时间',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '用户手机号',
            dataIndex: 'name',
            kay: 'name'
        },
        {
            title: '用户昵称',
            dataIndex: 'province',
            kay: 'province'
        },
        {
            title: '交易单号',
            dataIndex: 'city',
            kay: 'city'
        },
        {
            title: '充值金额',
            dataIndex: 'area',
            kay: 'area'
        },
        {
            title: '充值方式',
            dataIndex: 'address',
            kay: 'address'
        },
        {
            title: '支付平台订单编号',
            dataIndex: 'acount',
            kay: 'acount'
        }
    ],

    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                // scroll={{ y: 400 }}
            />
            {/* <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
            /> */}
        </div>
    )
}
export default Tables