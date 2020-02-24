import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import styles from './styles.less';
import {Table, Pagination, Button, Modal, Form, Input} from 'antd'

function Tables(props) {
    const [visible, setVisible] = useState(false)    
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
    }

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
            title: '模板名称',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '公司名称',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '管理范围',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '最低限额(分)',
            dataIndex: 'city',
            kay: 'city',
            // width:90            
        },
        {
            title: '服务费(分/kWh)',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '启用',
            dataIndex: 'address',
            kay: 'address',
            // width:90 
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:250,
            render: function(_,record){
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' onClick={detail} className={styles.actionBox_btn}>详情</Button>
                        <Button type='danger' className={styles.actionBox_btn}>禁用</Button>
                        <Button type='primary' onClick={show} className={styles.actionBox_btn}>编辑</Button>
                        <Button type='danger' className={styles.actionBox_btn}>删除</Button>
                    </div>
                )
            }
        }
    ],

    detail = () => {
        const {history} = props
        history.push('/ChargeMag/RateMag/chargeRate/detail')
    }

    // onShowSizeChange = (current, pageSize) => {
    //     console.log(current, pageSize);
    // }

    const show = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleSubmit = (e) => {
        return
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
            <Modal
                title="编辑充电费用模板"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="模板名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="最低限额(分)">
                            <Input />
                        </Form.Item>
                        <Form.Item label="服务费(分/kWh)">
                            <Input />
                        </Form.Item>
                        <Form.Item label="描述">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
// export default Tables
export default withRouter(Tables);