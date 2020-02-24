import React from 'react';
import styles from './styles.less';
import { Button, Select, Input, Icon } from 'antd';
const { Option } = Select;

function Topmun(props) {
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
                <Button type='primary' className={styles.add}>添加电站</Button>
            </div>
        </div>
    )
}
export default Topmun