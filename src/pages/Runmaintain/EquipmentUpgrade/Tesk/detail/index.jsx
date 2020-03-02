import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button, Modal, Checkbox, Progress, Select} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { Option } = Select;
import styles from '../styles.less'

function Detail(props) {

    const [visible1, setVisible1] = useState(false)    

    const columns1 = [
        {
            title: '充电站',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '充电桩序列号',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '当前状态',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '状态说明',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '当前进度',
            dataIndex: 'progress',
            // kay: 'area',
            // width:80
            render: function(_,record){
                return(
                    <div>
                        <Progress strokeColor='#f13e40' percent={65}/>
                    </div>
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:180,
            render: function(_,record){
                return (
                    <div>
                        {/* <Button type='primary' onClick={show2}>编辑</Button>
                        <Button type='danger' style={{marginLeft:10}}>删除</Button> */}
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
            title: '电站名称',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '充电桩序列号',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '当前状态',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:180,
            render: function(_,record){
                return (
                    <div>
                        <Button type='primary'>添加</Button>
                    </div>
                )
            }
        }
    ]

    const data2 = [
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
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

    const goToback = () => {
        const { history } = props
        history.goBack()
    }

    return(
        <div>
            <Card>
                <Button onClick={goToback} className={styles.goBack} type='primary'>返回</Button>
                <Descriptions title="基本信息">
                    <Descriptions.Item label="任务名称">1810000000</Descriptions.Item>
                    <Descriptions.Item label="升级文件名">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="是否预定开始">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="预定时间">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="开始时间">empty</Descriptions.Item>
                    <Descriptions.Item label="结束时间">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="升级说明">Hangzhou, Zhejiang</Descriptions.Item>
                </Descriptions>
                当前进度：<Progress style={{width:200}} strokeColor='#f13e40' percent={65}/>
            </Card>
            <Card title='占位时段'  style={{marginTop:10,marginBottom:10}}>
                <Button type='primary' onClick={show1} style={{marginBottom:10}}>导入升级设备</Button>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    bordered
                    pagination={false}
                    scroll={{ y: 400 }}
                />
            </Card>
            <Modal
                title="添加电桩"
                visible={visible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                okText='保存'
                cancelText='取消'
                bodyStyle={{width:650}}
                // style={{width:1000}}
                width={700}
                >
                    <div className={styles.munLeftModal}>
                        <Select defaultValue="--全部电站--" style={{width:200}}>
                            <Option value="jck">江西</Option>
                            <Option value="jak">北京</Option>
                            <Option value="jac">四川</Option>
                        </Select>
                        <Input placeholder='输入电桩编号关键字' style={{width:150}}></Input>
                        <Button className={styles.search}><i class="iconfont">&#xe61c;</i>搜索</Button>                
                    </div>
                    <Table
                        columns={columns2}
                        dataSource={data2}
                        style={{width:650}}
                        bordered
                        // pagination={false}
                        // scroll={{ y: 400 }}
                    />
            </Modal>
        </div>
    )
}
export default withRouter(Detail)