import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button, Modal, Checkbox} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from '../styles.less'

function Detail(props) {

    const [visible1, setVisible1] = useState(false)    
    const [visible2, setVisible2] = useState(false)

    const columns1 = [
        {
            title: '订单编号',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '用户',
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
            title: '充电桩',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '状态',
            dataIndex: 'state',
            kay: 'state',
            // width:80
        },
        {
            title: '开始时间',
            dataIndex: 'start',
            kay: 'start',
            // width:80
        },
        {
            title: '结束时间',
            dataIndex: 'over',
            kay: 'over',
            // width:80
        },
        {
            title: '充电电量',
            dataIndex: 'amount',
            kay: 'amount',
            // width:80
        },
        {
            title: '充电费用',
            dataIndex: 'rate',
            kay: 'rate',
            // width:80
        },
        {
            title: '服务费',
            dataIndex: 'server',
            kay: 'server',
            // width:80
        },
        {
            title: '总费用',
            dataIndex: 'allrate',
            kay: 'allrate',
            // width:80
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:180,
            render: function(_,record){
                return (
                    <div>
                        <Button type='primary'>编辑</Button>
                        <Button type='danger' style={{marginLeft:10}}>删除</Button>
                    </div>
                )
            }
        }
    ]

    const data1 = []

    // const formItemLayout = {
    //     labelCol: {
    //       xs: { span: 24 },
    //       sm: { span: 7 },
    //     },
    //     wrapperCol: {
    //       xs: { span: 24 },
    //       sm: { span: 16 },
    //     },
    // }

    // const show1 = () => {
    //     setVisible1(true)
    // }

    // const handleOk1 = () => {
    //     setVisible1(false)
    // }

    // const handleCancel1 = () => {
    //     setVisible1(false)
    // }

    // const handleSubmit1 = (e) => {
    //     return
    // }

    const goToback = () => {
        const { history } = props
        history.goBack()
    }

    return(
        <div>
            <Card>
                <Button onClick={goToback} className={styles.goBack} type='primary'>返回</Button>
                <Descriptions title="基本信息">
                    <Descriptions.Item label="昵称">Denghuag</Descriptions.Item>
                    <Descriptions.Item label="手机号码">1810000000</Descriptions.Item>
                    <Descriptions.Item label="状态">空闲</Descriptions.Item>
                    <Descriptions.Item label="用户余额">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="注册方式">empty</Descriptions.Item>
                    <Descriptions.Item label="注册时间">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="历史订单数量">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="总消费金额">empty</Descriptions.Item>
                    <Descriptions.Item label="总充值金额">Hangzhou, Zhejiang</Descriptions.Item>
                </Descriptions>
            </Card>
            <Card title='充电记录'  style={{marginTop:10,marginBottom:10}}>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    bordered
                    pagination={false}
                    scroll={{ y: 400 }}
                />
            </Card>
            {/* <Modal
                title="添加充电费模板明细"
                visible={visible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                okText='保存'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit1}>
                        <Form.Item label="模板名称">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox style={{marginLeft:'44%'}} /> 截止到当天结束(24:00)
                        </Form.Item>
                        <Form.Item label="截止小时(24小时制)">
                            <Input />
                        </Form.Item>
                        <Form.Item label="截止分钟">
                            <Input />
                        </Form.Item>
                        <Form.Item label="计费公式(分/kWh)">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal> */}
        </div>
    )
}
export default withRouter(Detail)