import React from 'react';
import {withRouter} from "react-router-dom";
import {Table, Pagination, Button} from 'antd'
import styles from './styles.less'

function Tables(props) {
    const data = [
        {ID:'345426742331', name: 'd12334122sh', province:'江爱侣发展西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'7', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'8', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'9', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'10', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'11', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
    ]
    const columns = [
        {
            title: '订单编号',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '用户',
            dataIndex: 'name',
            kay: 'name'
        },
        {
            title: '电站',
            dataIndex: 'province',
            kay: 'province'
        },
        {
            title: '充电桩',
            dataIndex: 'city',
            kay: 'city'
        },
        {
            title: '抢号',
            width:65,
            dataIndex: 'area',
            kay: 'area'
        },
        {
            title: '状态',
            width:65,
            dataIndex: 'address',
            kay: 'address'
        },
        {
            title: '开始时间',
            dataIndex: 'acount',
            kay: 'acount'
        },
        {
            title: '结束时间',
            dataIndex: 'online',
            kay: 'online'
        },
        {
            title: '充电电量',
            dataIndex: 'leisure',
            kay: 'leisure'
        },
        {
            title: '充电费用',
            dataIndex: 'chargeing',
            kay: 'chargeing'
        },
        {
            title: '总费用',
            width:78,
            dataIndex: 'chargeing',
            kay: 'chargeing'
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:160,
            render: function(_,record){
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' onClick={detail} className={styles.actionBox_btn}>明细</Button>
                        <Button type='danger' className={styles.actionBox_btn}>结算</Button>
                        <Button type='danger' className={styles.actionBox_btn}>关单</Button>
                    </div>
                )
            }
        }
    ],

    detail = () => {
        const {history} = props
        history.push('/FinanceMag/OrderMag/detail')
    }

    // onShowSizeChange = (current, pageSize) => {
    //     console.log(current, pageSize);
    // }

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
export default withRouter(Tables)