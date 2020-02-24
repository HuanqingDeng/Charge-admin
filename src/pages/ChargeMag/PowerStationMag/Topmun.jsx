import React, {useState} from 'react';
import styles from './styles.less';
import { Button, Select, Input, Icon, Modal, Form, Radio } from 'antd';
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
                <Select defaultValue="--省--" style={{width:100}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Select defaultValue="--城市--" style={{width:100}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Select defaultValue="--区划--" style={{width:100}}>
                    <Option value="jck">江西</Option>
                    <Option value="jak">北京</Option>
                    <Option value="jac">四川</Option>
                </Select>
                <Input placeholder='电站名称' style={{width:150}}></Input>
                <Button className={styles.search}><Icon type="search" />搜索</Button>
                <Button className={styles.reset}>重置</Button>
                <Button className={styles.export}>导出</Button>
                
            </div>
            <div className={styles.munRight}>
                <Button onClick={show} type='primary' className={styles.add}>添加电站</Button>
            </div>
            <Modal
                title="添加电站"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='保存'
                cancelText='取消'
                >
                    <Form {...formItemLayout} onSubmit={handleSubmit}>
                        <Form.Item label="电站名称">
                            <Input />
                        </Form.Item>
                        <Form.Item label="经纬度">
                            <Input />
                        </Form.Item>
                        <Form.Item label="电站状态">
                            <Select defaultValue="--请选择电站状态--" style={{width:'100%'}}>
                                <Option value="jck">规划</Option>
                                <Option value="jak">修建</Option>
                                <Option value="jac">仅供寻桩</Option>
                                <Option value="jck">正常运营</Option>
                                <Option value="jak">故障</Option>
                                <Option value="jac">维修</Option>
                                <Option value="jck">停用</Option>
                                <Option value="jck">测试</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="公司名称">
                            <Select defaultValue="--请选择公司--" style={{width:'100%'}}>
                                <Option value="jck">江西</Option>
                                <Option value="jak">北京</Option>
                                <Option value="jac">四川</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="用户可见">
                            {/* <Radio.Group onChange={this.onChange} value={this.state.value}> */}
                            <Radio.Group>
                                <Radio value={1}>是</Radio>
                                <Radio value={2}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="收费模板">
                            <Select defaultValue="--请选择收费模板--" style={{width:'100%'}}>
                                <Option value="jck">江西</Option>
                                <Option value="jak">北京</Option>
                                <Option value="jac">四川</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="省份">
                            <Select defaultValue="--请选择省份--" style={{width:'100%'}}>
                                <Option value="jck">生产</Option>
                                <Option value="jak">库存</Option>
                                <Option value="jac">售出、建站</Option>
                                <Option value="jck">工作中</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="城市">
                            <Select defaultValue="--请选择城市--" style={{width:'100%'}}>
                                <Option value="jck">充电插座</Option>
                                <Option value="jak">充电桩</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="区划">
                            <Select defaultValue="--请选择区划--" style={{width:'100%'}}>
                                <Option value="jck">充电插座</Option>
                                <Option value="jak">充电桩</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="位置">
                            <Input />
                        </Form.Item>
                        <Form.Item label="归属APP">
                            <Select defaultValue="--请选择归属APP--" style={{width:'100%'}}>
                                <Option value="jck">充电插座</Option>
                                <Option value="jak">充电桩</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="联系人">
                            <Input />
                        </Form.Item>
                        <Form.Item label="联系电话">
                            <Input />
                        </Form.Item>
                        <Form.Item label="维护人员">
                            <Input />
                        </Form.Item>
                        <Form.Item label="维护人员电话">
                            <Input />
                        </Form.Item>
                        <Form.Item label="停车描述">
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </div>
    )
}
export default Topmun