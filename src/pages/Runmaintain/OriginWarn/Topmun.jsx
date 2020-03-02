import React, {useState} from 'react';
import { Button, Select, Input, LocaleProvider, Icon, Modal, Form, Radio, DatePicker } from 'antd';
// import moment from 'moment';
import styles from './styles.less';
const { RangePicker } = DatePicker;
const { Option } = Select;

// 日期中文化
import zh_CN from 'antd/es/locale/zh_CN'; // 引入语言包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 注意这里设置 moment 必须放在有 import 的后面。

function Topmun(props) {
    return (
        <div className={styles.Munbox}>
            <LocaleProvider locale={zh_CN} >
                <div className={styles.munLeft}>
                    <RangePicker
                        style={{width:230}}
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                        }}
                        // onChange={onChange}
                    />
                    <Select defaultValue="--电站--" style={{width:130}}>
                        <Option value="jck">APP支付</Option>
                        <Option value="jak">微信公众号支付</Option>
                        <Option value="jac">平台充值</Option>
                    </Select>
                    <Select defaultValue="--所有电站--" style={{width:150}}>
                        <Option value="jck">江西</Option>
                        <Option value="jak">北京</Option>
                        <Option value="jac">四川</Option>
                    </Select>
                    <Select defaultValue="--全部事件类型--" style={{width:150}}>
                        <Option value="jck">江西</Option>
                        <Option value="jak">北京</Option>
                        <Option value="jac">四川</Option>
                    </Select>
                    <Button className={styles.search}><Icon type="icon-daochu" /><i class="iconfont">&#xe61c;</i>搜索</Button>
                </div>
            </LocaleProvider>
        </div>
    )
}
export default Topmun