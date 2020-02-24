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
            title: '位置',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '截止小时(24小时制)',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '截止分钟',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '计费公式(分/kWh)',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:180,
            render: function(_,record){
                return (
                    <div>
                        <Button type='primary' onClick={show2}>编辑</Button>
                        <Button type='danger' style={{marginLeft:10}}>删除</Button>
                    </div>
                )
            }
        }
    ]

    const data1 = [
        {ID: 123, name:24, province:0, area:100}
    ]

    const columns2 = [
        {
            title: '电站ID',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '电站名称',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '地址',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '电桩数量',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '公司名称',
            dataIndex: 'comyname',
            kay: 'comyname',
            // width:80
        },
        {
            title: '联系人',
            dataIndex: 'linkman',
            kay: 'area',
            // width:80
        }
    ]

    const data2 = [
        {ID: 123, name:24, province:0, area:100,comyname:'nameeee', linkman:'seiuhg'}
    ]

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
    }

    const show1 = () => {
        setVisible1(true)
    }

    const handleOk1 = () => {
        setVisible1(false)
    }

    const handleCancel1 = () => {
        setVisible1(false)
    }

    const handleSubmit1 = (e) => {
        return
    }

    const show2 = () => {
        setVisible2(true)
    }

    const handleOk2 = () => {
        setVisible2(false)
    }

    const handleCancel2 = () => {
        setVisible2(false)
    }

    const handleSubmit2 = (e) => {
        return
    }

    const goToback = () => {
        const { history } = props
        history.goBack()
    }

    return(
        <div>
            <Card>
                <Button onClick={goToback} className={styles.goBack} type='primary'>返回</Button>
                <Descriptions title="基本信息">
                    <Descriptions.Item label="模板名称">1810000000</Descriptions.Item>
                    <Descriptions.Item label="封顶费用(元)">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="公司名称">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="启用">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="服务费(分/kWh)">empty</Descriptions.Item>
                    <Descriptions.Item label="管理范围">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="描述">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <Card title='占位时段'  style={{marginTop:10,marginBottom:10}}>
                <Button type='primary' onClick={show1} style={{marginBottom:10}}>添加占位时段</Button>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    bordered
                    pagination={false}
                    scroll={{ y: 400 }}
                />
            </Card>
            <Card title='应用电站'>
                <Table
                    columns={columns2}
                    dataSource={data2}
                    bordered
                    pagination={false}
                    scroll={{ y: 400 }}
                />
            </Card>
            <Modal
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
            </Modal>
            <Modal
                title="编辑充电费模板明细"
                visible={visible2}
                onOk={handleOk2}
                okText='保存'
                cancelText='取消'
                onCancel={handleCancel2}
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit2}>
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
            </Modal>
        </div>
    )
}
export default withRouter(Detail)