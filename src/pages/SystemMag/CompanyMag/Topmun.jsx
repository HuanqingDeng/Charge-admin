import React, {useState} from 'react';
import { Button, Select, Input, Icon, Modal, Form,Checkbox } from 'antd';
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
                <Checkbox />只看平台商                
            </div>
            <div className={styles.munRight}>
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>添加平台商公司</Button>
            </div>
            <Modal
                title="添加平台商公司"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="公司名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公司编码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公司ID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="地址">
                            <Input />
                        </Form.Item>
                        <Form.Item label="备注">
                            <Input />
                        </Form.Item>
                        <Form.Item label="平台商管理员用户名">
                            <Input />
                        </Form.Item>
                        <Form.Item label="运营商管理员用户名">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun