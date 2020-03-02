import React, {useState} from 'react';
import { Button, Select, Input, Icon, Modal, Form } from 'antd';
import styles from './styles.less';
const { Option } = Select;

function Topmun(props) {
    const [visible, setVisible] = useState(false)    
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

    const handleSubmit = (e) => {
        return
    }

    return (
        <div className={styles.Munbox}>
            <div className={styles.munLeft}>
                &emsp;                
            </div>
            <div className={styles.munRight}>
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>添加平台商参数</Button>
            </div>
            <Modal
                title="添加平台商参数"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
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
export default Topmun