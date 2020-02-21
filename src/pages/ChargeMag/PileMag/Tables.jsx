import React from 'react';
import styles from './styles.less';
import {Table, Pagination, Button} from 'antd'

function Tables(props) {
    const data = [
        {ID:'1333333333333333333', name: 34354, province:'4refz江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'7', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'8', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'9', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'10', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'11', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'12', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'13', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'14', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'15', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'16', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'17', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'18', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'19', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'20', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'21', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'22', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'23', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'24', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'25', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'26', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'27', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432}
    ]
    const columns = [
        {
            title: '充电序列号',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '充电桩设备类型',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '电站',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '站内位置',
            dataIndex: 'city',
            kay: 'city',
            // width:90            
        },
        {
            title: '二维码',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '通讯状态',
            dataIndex: 'address',
            kay: 'address',
            // width:90 
        },
        {
            title: '运行状态',
            dataIndex: 'acount',
            kay: 'acount'
        },
        {
            title: '运行状态',
            dataIndex: 'online',
            kay: 'online'
        },
        {
            title: '硬件版本',
            dataIndex: 'leisure',
            kay: 'leisure'
        },
        {
            title: '软件版本',
            dataIndex: 'chargeing',
            kay: 'chargeing'
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:190,
            render: function(_,record){
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' className={styles.actionBox_btn}>编辑</Button>
                        <Button type='primary' className={styles.actionBox_btn}>解锁</Button>
                        <Button type='primary' className={styles.actionBox_btn}>清单</Button>
                        <Button type='primary' className={styles.actionBox_btn}>删除</Button>
                        <Button type='primary' className={styles.actionBox_btn}>升级</Button>
                    </div>
                )
            }
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