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
                    <Select defaultValue="-所有人员-" style={{width:230}}>
                        <Option value="jck">APP支付</Option>
                        <Option value="jak">微信公众号支付</Option>
                        <Option value="jac">平台充值</Option>
                    </Select>
                    <Select defaultValue="-所有操作-" style={{width:230}}>
                        <Option value="jck">江西</Option>
                        <Option value="jak">北京</Option>
                        <Option value="jac">四川</Option>
                    </Select>
                    <Select defaultValue="-所有状态-" style={{width:180}}>
                        <Option value="jck">未关闭</Option>
                        <Option value="jak">已关闭</Option>
                    </Select>
                </div>
                <div className={styles.munLeft}>
                    <RangePicker
                        style={{width:230}}
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                        }}
                        // onChange={onChange}
                    />
                    <Button className={styles.export}><i class="iconfont">&#xe627;</i>导出</Button>
                </div>
            </LocaleProvider>
        </div>
    )
}
export default Topmun