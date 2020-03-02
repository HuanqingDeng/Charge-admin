import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button, Modal, Checkbox, Select} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { Option } = Select;
const { TextArea } = Input;
import styles from './styles.less'

function Detail(props) {

    const [visible1, setVisible1] = useState(false)    
    const [visible2, setVisible2] = useState(false)

    const columns1 = [
        {
            title: '公司名称',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '公司编码',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '平台商名称',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '公司ID',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '平台商',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '地址',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '备注',
            dataIndex: 'area1',
            kay: 'area1',
            // width:80
        }
    ]

    const data1 = [
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
    ]

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 13 },
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
            <Table
                columns={columns1}
                dataSource={data1}
                bordered
                // pagination={false}
            />
            <Modal
                title="编辑团体信息"
                visible={visible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                okText='保存'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit1}>
                        <Form.Item label="团体名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="支付模式">
                            <Input />
                        </Form.Item>
                        <Form.Item label="是否允许透支">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item><Form.Item label="是否允许暂时不支付">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="每管理员最大未支付订单数">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
            <Modal
                title="团体详情"
                visible={visible2}
                onOk={handleOk2}
                okText='保存'
                cancelText='取消'
                onCancel={handleCancel2}
                // width={750}
                // bodyStyle={{width:700}}
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit2}>
                    <Form.Item label="团体名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="支付模式">
                            <Input />
                        </Form.Item>
                        <Form.Item label="是否允许透支">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item><Form.Item label="是否允许暂时不支付">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="每管理员最大未支付订单数">
                            <Input />
                        </Form.Item>
                        <Form.Item label="团体用户">
                            <TextArea rows={4} />
                            <span>
                                <Button type='primary'>添加</Button>
                                <Button type='danger' style={{marginLeft:5}}>删除</Button>
                            </span>
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default withRouter(Detail)