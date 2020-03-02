import React, {useState} from 'react';
import { Button, Select, Input, Icon, Modal, Form } from 'antd';
import styles from './styles.less';
const { Option } = Select;

function Topmun(props) {
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
        <div className={styles.Munbox}>
            <div className={styles.munLeft}>
                &emsp;                
            </div>
            <div className={styles.munRight}>
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>添加账号</Button>
            </div>
            <Modal
                title="添加账号"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="用户名">
                            <Input />
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="确认密码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="用户类型">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
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
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun