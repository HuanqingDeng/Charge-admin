import React, {useState} from 'react';
import {Table, Radio,Checkbox, Input,Modal,Form,Select, Button, DatePicker,LocaleProvider, Icon} from 'antd'
import styles from './styles.less'
const { RangePicker } = DatePicker;

// 日期中文化
import zh_CN from 'antd/es/locale/zh_CN'; // 引入语言包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 注意这里设置 moment 必须放在有 import 的后面。

function Content(props) {
    const columns1 = [
        {
            title: '角色名称',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '描述',
            dataIndex: 'status',
            kay: 'status'
        },
        {
            title: '操作',
            dataIndex: 'status',
            // kay: 'status'
            render: (_, record) => {
                return (
                    <div className={styles.actionBox}>
                        <Button type='primary' onClick={showDetail} style={{marginRight:10}}>编辑</Button>
                        <Button type='danger' className={styles.actionBox_btn}>删除</Button>
                    </div>
                )
            }
        }
    ]
    
    const data1 = [
        {key:'1',ID: '1223', status: '在线'},
        {key:'2',ID: '1323', status: '在线'},
        {key:'3',ID: '1423', status: '在线'},
        {key:'4',ID: '1523', status: '在线'},
        {key:'5',ID: '1623', status: '在线'},
        {key:'6',ID: '1723', status: '在线'},
        {key:'7',ID: '1823', status: '在线'},
        {key:'8',ID: '1923', status: '在线'},
        {key:'9',ID: '1230', status: '在线'},
        {key:'10',ID: '1023', status: '在线'},
        {key:'11',ID: '1253', status: '在线'},
        {key:'12',ID: '1263', status: '在线'},
    ]

    const columns2 = [
        {
            title: '菜单',
            dataIndex: 'time',
            // width:180,            
            kay: 'time'
        },
        {
            title: '访问权限',
            dataIndex: 'ID',
            // width:180,                        
            render: (_, record) => {
                return (
                    <Checkbox/>
                )
            }
        },
        {
            title: '操作权限',
            dataIndex: 'commomdty',
            // width:140,                        
            render: (_, record) => {
                return (
                    <Checkbox/>
                )
            }
        },
    ]
    
    const data2 = [
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},        
    ]

    const [visible, setVisible] = useState(false)    
    const [visible2, setVisible2] = useState(false)    
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

    const showDetail = () => {
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
    return (
        <div className={styles.box}>
            <div className={styles.leftContent}>
                <Button type='primary' onClick={add} style={{marginBottom:10}}>添加角色</Button>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    rowSelection={{type:'radio'}}
                    // pagination={false}
                    bordered
                    // scroll={{ y: 550 }}
                />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.rightTopMuen}>
                    <Button type='primary'>保存修改</Button>
                </div>
                <Table
                    columns={columns2}
                    dataSource={data2}
                    // pagination={false}
                    bordered
                    // scroll={{ x:1000 }}
                />
            </div>
            <Modal
                title="添加自定义角色"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="角色名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="适用用户类型">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="描述">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
            <Modal
                title="修改角色"
                visible={visible2}
                onOk={handleOk2}
                onCancel={handleCancel2}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit2}>
                        <Form.Item label="角色名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="适用用户类型">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="描述">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}

export default Content