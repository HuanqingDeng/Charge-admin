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
                <Select defaultValue="--请选择电站--" style={{width:200}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Select defaultValue="--通讯状态--" style={{width:100}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Select defaultValue="--运行状态--" style={{width:100}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Input placeholder='输入充电序列号' style={{width:150}}></Input>
                <Button className={styles.search}><Icon type="search" />搜索</Button>
                <Button className={styles.reset}>重置</Button>
                <Button className={styles.export}>导出</Button>
                
            </div>
            <div className={styles.munRight}>
                <Button onClick={show} type='primary' className={styles.add}>添加充电桩</Button>
            </div>
            <Modal
                title="添加充电桩"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='保存'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="充电桩序列号">
                            <Input />
                        </Form.Item>
                        <Form.Item label="公司名称">
                            <Select defaultValue="--请选择公司--" style={{width:'100%'}}>
                                <Option value="jck">江西</Option>
                                <Option value="jak">北京</Option>
                                <Option value="jac">四川</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="电站名称">
                            <Select defaultValue="--请选择电站--" style={{width:'100%'}}>
                                <Option value="jck">江西</Option>
                                <Option value="jak">北京</Option>
                                <Option value="jac">四川</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="生命周期">
                            <Select defaultValue="--请选择产品生命周期--" style={{width:'100%'}}>
                                <Option value="jck">生产</Option>
                                <Option value="jak">库存</Option>
                                <Option value="jac">售出、建站</Option>
                                <Option value="jck">工作中</Option>
                                <Option value="jak">故障</Option>
                                <Option value="jac">维修、维护</Option>
                                <Option value="jck">返修、召回</Option>
                                <Option value="jak">报废</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="充电桩设备类型">
                            <Select defaultValue="--请选择充电桩设备类型--" style={{width:'100%'}}>
                                <Option value="jck">充电插座</Option>
                                <Option value="jak">充电桩</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="充电桩编码">
                            <Input />
                        </Form.Item>
                        <Form.Item label="位置">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun