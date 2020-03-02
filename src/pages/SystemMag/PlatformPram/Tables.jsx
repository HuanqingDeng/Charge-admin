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
            title: '公司',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '公众号AppID',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '公众号AppSecret',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '公众号Token',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '公众号商户号',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '公众号商户APIKey',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '开放平台AppID',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '开放平台AppSecret',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '开放平台商户号',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '开放平台APIKey',
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
                        {/* <Button type='primary'>刷新</Button> */}
                        {/* <Button type='danger' style={{marginLeft:5}}>开锁</Button> */}
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
                scroll={{ x: 1800 }}
                // pagination={false}
            />
            <Modal
                title="编辑平台商参数"
                visible={visible}
                onOk={handleOk}
                okText='保存'
                cancelText='取消'
                onCancel={handleCancel}
                // width={750}
                // bodyStyle={{width:700}}
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="公司编码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号AppID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号AppSecret">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号商户号">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号商户APIKey">
                            <Input />
                        </Form.Item>
                        <Form.Item label="开放平台AppID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="开放平台AppSecret">
                            <Input />
                        </Form.Item>
                        <Form.Item label="开放平台商户号">
                            <Input />
                        </Form.Item>
                        <Form.Item label="开放平台APIKey">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号原始ID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公众号名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="平台商极光推送AppKey">
                            <Input />
                        </Form.Item>
                        <Form.Item label="平台商极光推送MasterSecret">
                            <Input />
                        </Form.Item>
                        <Form.Item label="小程序AppID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="小程序AppSecret">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default withRouter(Detail)