import React, {useState} from 'react';
import {Table,Input,Modal,Form,Button} from 'antd'

function Content(props) {
    const columns1 = [
        {
            title: '服务器名称',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '内网IP地址',
            dataIndex: 'status',
            kay: 'status'
        },
        {
            title: '公网IP地址',
            dataIndex: 'status2',
            kay: 'status2'
        }
    ]
    
    const data1 = [
        {key:'1',ID: '01通信服务器', status: '96.10.0.1', status2: '113.13.253.28'},
        {key:'2',ID: '01通信服务器', status: '96.10.0.1', status2: '113.13.253.28'},
        {key:'3',ID: '01通信服务器', status: '96.10.0.1', status2: '113.13.253.28'},
    ]

    const [visible, setVisible] = useState(false)    
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 7 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 15 },
        },
    }

    const add = () => {
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
            <div>
                <Button type='primary' onClick={add} style={{marginBottom:10}}>添加服务器</Button>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    // pagination={false}
                    bordered
                    // scroll={{ y: 550 }}
                />
            </div>
            <Modal
                title="添加服务器"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="服务器名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="内网IP地址">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公网IP地址">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}

export default Content