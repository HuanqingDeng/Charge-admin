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
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>添加模板</Button>
            </div>
            <Modal
                title="添加停车费用模板"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="模板名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="封顶费用(元)">
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