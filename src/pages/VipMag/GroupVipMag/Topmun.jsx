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
                <Button className={styles.export}><i class="iconfont">&#xe627;</i>导出</Button>
                <Button onClick={show} className={styles.add} type='primary'><i class="iconfont">&#xe7fc;</i>添加团体</Button>
            </div>
            <Modal
                title="添加团体"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='确定'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="团体名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="支付模式">
                            <Input />
                        </Form.Item>
                        <Form.Item label="是否允许透支">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item><Form.Item label="是否允许暂时不支付">
                            <Select defaultValue="--请选择--" style={{width:'100%'}}>
                                <Option value="jck">是</Option>
                                <Option value="jak">否</Option>
                            </Select>
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun