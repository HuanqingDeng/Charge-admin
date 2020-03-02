import React, {useState} from 'react';
import { Button, Select, Input, Icon, Modal, Form } from 'antd';
import styles from './styles.less';
const { Option } = Select;
const { TextArea } = Input;

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
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>新增升级任务</Button>
            </div>
            <Modal
                title="添加升级文件"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="上传升级文件">
                            <Input type='File' />
                        </Form.Item>
                        <Form.Item label="文件名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="版本号">
                            <Input />
                        </Form.Item>
                        <Form.Item label="升级说明">
                            <TextArea rows={4} />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun