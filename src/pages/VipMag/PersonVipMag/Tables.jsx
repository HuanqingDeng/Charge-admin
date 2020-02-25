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
        {ID:'2', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'3', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'6', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'7', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'8', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'9', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'22', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'24', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'25', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'26', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'27', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'28', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'29', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'32', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'223', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'245', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'235', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'267', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
        {ID:'45', name: 'dsh', province:'江西省', city: '赣州市', area:'章贡区', address:'aghag',address2: 234,address3:23,address4:34,address5:34,address6:2},
    ]
    const columns = [
        {
            title: '用户ID',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '手机号',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '昵称',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '状态',
            dataIndex: 'city',
            kay: 'city',
            // width:90            
        },
        {
            title: '余额',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '注册方式',
            dataIndex: 'address2',
            kay: 'address2',
            // width:90 
        },
        {
            title: '注册时间',
            dataIndex: 'address3',
            kay: 'address3',
            // width:90 
        },{
            title: '历史订单数量',
            dataIndex: 'address4',
            kay: 'address4',
            // width:90 
        },{
            title: '总充值金额',
            dataIndex: 'address5',
            kay: 'address5'
            // width:90 
        },{
            title: '总消费金额',
            dataIndex: 'address6',
            kay: 'address6',
            // width:90 
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
        const {history} = props
        history.push('/VipMag/PersonVipMag/detail')
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
                        <Form.Item label="封顶费用(元)">
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