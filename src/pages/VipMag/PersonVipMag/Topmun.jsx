import React, {useState} from 'react';
import styles from './styles.less';
import { Button, Select, Input, Radio } from 'antd';
const { Option } = Select;

function Topmun(props) {
    return (
        <div className={styles.Munbox}>
            <div className={styles.munLeft}>
                <Select defaultValue="--用户状态--" style={{width:130}}>
                    <Option value="jck">当前有订单</Option>
                    <Option value="jak">当前无订单</Option>
                </Select>
                <Input placeholder='--用户ID、昵称、手机号码(至少4位)--' style={{width:250}}></Input>
                <Button className={styles.search}><i class="iconfont">&#xe61c;</i>搜索</Button>
                <Button className={styles.export}><i class="iconfont">&#xe627;</i>导出</Button>            
            </div>
        </div>
    )
}
export default Topmun