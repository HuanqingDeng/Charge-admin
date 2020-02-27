import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {Table, Pagination, Button, Tabs, Descriptions, Modal} from 'antd'
import Echart from "./Echart.jsx";
import Echart4 from "./Echart4.jsx";
import styles from './styles.less'
const { TabPane } = Tabs

function Tables(props) {
    const [showTable, setShowTable] = useState(true)
    const [visible, setVisible] = useState(false)
    const data = [
        {ID:'345426742331', name: 'd12334122sh', province:'江爱侣发展西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'7', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'8', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
    ]
    const columns = [
        {
            title: '发生时间',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '电站名称',
            dataIndex: 'name',
            kay: 'name'
        },
        {
            title: '设备序列号',
            dataIndex: 'province',
            kay: 'province'
        },
        {
            title: '设备类型',
            dataIndex: 'city',
            kay: 'city'
        },
        {
            title: '事件类型',
            dataIndex: 'area',
            kay: 'area'
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: function(_,record){
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' onClick={detail} className={styles.actionBox_btn}>详情</Button>
                    </div>
                )
            }
        }
    ],

    data2 = [
        {ID:'345426742331', name: 'd12334122sh', province:'江爱侣发展西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'7', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'8', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
    ]

    const columns2 = [
        {
            title: '电站名称',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '设备序列号',
            dataIndex: 'name',
            kay: 'name'
        },
        {
            title: '设备类型',
            dataIndex: 'province',
            kay: 'province'
        },
        {
            title: '事件类型',
            dataIndex: 'city',
            kay: 'city'
        },
        {
            title: '发生时间',
            dataIndex: 'area',
            kay: 'area'
        },
        {
            title: '恢复时间',
            dataIndex: 'breakdown',
            kay: 'breakdown'
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: function(_,record){
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' onClick={detail} className={styles.actionBox_btn}>详情</Button>
                    </div>
                )
            }
        }
    ],

    detail = () => {
        setVisible(true)
    }
    
    const show = () => {
        setShowTable4(true)
    }

    const noshow = () => {
        visible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <div>
            <div className={styles.showTableOrNot}>
                <Button onClick={show} className={styles.add} type='primary'>表格</Button>
                <Button onClick={noshow} className={styles.add} type='primary'>图表</Button>
            </div>
            {/* <Tabs onChange={callback} type="card"> */}
            <Tabs type="card">
                <TabPane tab="正在发生" key="1">
                { showTable ? 
                    <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    // scroll={{ y: 400 }}
                    /> :
                    <Echart/>         
                }
                </TabPane>
                <TabPane tab="已处理" key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="已忽略" key="3">
                Content of Tab Pane 3
                </TabPane>
                <TabPane tab="已恢复" key="4">
                    { showTable ? 
                        <Table
                        columns={columns2}
                        dataSource={data2}
                        bordered
                        // scroll={{ y: 400 }}
                        /> :
                        <Echart4/>         
                    }
                </TabPane>
            </Tabs>
            <Modal
                // title="事件详情"
                visible={visible}
                footer={null}
                onCancel={handleCancel}
                bodyStyle={{width:700}}
                width={750}
                >
                <Descriptions title="事件详情" style={{width:700}}>
                    <Descriptions.Item label="事件编号">1810000000</Descriptions.Item>
                    <Descriptions.Item label="事件类型">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="公司名称">Hangzhouargagzd, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="当前状态">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="电站名称">empty</Descriptions.Item>
                    <Descriptions.Item label="设备类型">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="设备序列号">2434445</Descriptions.Item>
                    <Descriptions.Item label="接收时间">2434445</Descriptions.Item>
                    <Descriptions.Item label="恢复时间">2434445</Descriptions.Item>
                    <Descriptions.Item label="处理开始时间">2434445</Descriptions.Item>
                    <Descriptions.Item label="处理结束时间">2434445</Descriptions.Item>
                    <Descriptions.Item label="处理方案">2434445</Descriptions.Item>
                    <Descriptions.Item label="处理人">2434445</Descriptions.Item>
                    <Descriptions.Item label="备注">2434445</Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    )
}
export default withRouter(Tables)