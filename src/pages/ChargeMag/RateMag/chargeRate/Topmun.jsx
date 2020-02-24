import React, {useState} from 'react';
import { Button, Select, Input, Icon, Modal, Form } from 'antd';
import styles from './styles.less';
const { Option } = Select;

function Topmun(props) {
    const [visible, setVisible] = useState(false)    
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
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
                <Button onClick={show} className={styles.add} type='primary'>添加模板</Button>
            </div>
            <Modal
                title="添加充电费用模板"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="模板名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="最低限额(分)">
                            <Input />
                        </Form.Item>
                        <Form.Item label="服务费(分/kWh)">
                            <Input />
                        </Form.Item>
                        <Form.Item label="描述">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun