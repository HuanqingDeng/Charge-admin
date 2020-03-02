import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button, Modal, Checkbox, Select} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { Option } = Select;
const { TextArea } = Input;
import styles from './styles.less'

function Detail(props) {

    const [visible, setVisible] = useState(false)    

    const columns1 = [
        {
            title: '用户名',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '用户类型',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '公司名称',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '真实姓名',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '手机号码',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '电子邮箱',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '创建时间',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:235,
            render: function(_,record){
                return (
                    <div>
                        <Button type='primary' onClick={show} style={{marginRight:5}}>编辑</Button>
                        <Button type='primary'>刷新</Button>
                        <Button type='danger' style={{marginLeft:5}}>开锁</Button>
                    </div>
                )
            }
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

    const show = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
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
                title="团体详情"
                visible={visible}
                onOk={handleOk}
                okText='保存'
                cancelText='取消'
                onCancel={handleCancel}
                // width={750}
                // bodyStyle={{width:700}}
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="用户名">
                            NFZY
                        </Form.Item>
                        <Form.Item label="用户类型">
                            系统用户
                        </Form.Item>
                        <Form.Item label="角色">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="真实姓名">
                            <Input />
                        </Form.Item>
                        <Form.Item label="手机号码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="电子邮箱">
                            <Input />
                        </Form.Item>
                        <Form.Item label="管理范围">
                            <Input />
                            <Button type='primary' style={{marginTop:20}}>修改管理数据</Button>
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default withRouter(Detail)