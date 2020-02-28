import React, {useState} from 'react';
import {Table, Input, Button, DatePicker,LocaleProvider, Icon} from 'antd'
import styles from './styles.less'
const { RangePicker } = DatePicker;

// 日期中文化
import zh_CN from 'antd/es/locale/zh_CN'; // 引入语言包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 注意这里设置 moment 必须放在有 import 的后面。

function Content(props) {
    const columns1 = [
        {
            title: '序列号',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '状态',
            dataIndex: 'status',
            kay: 'status'
        }
    ]
    
    const data1 = [
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
        {ID: '123', status: '在线'},
    ]

    const columns2 = [
        {
            title: '',
            dataIndex: 'status',
            width:80,
            kay: 'status'
        },
        {
            title: '时间',
            dataIndex: 'time',
            width:180,            
            kay: 'time'
        },
        {
            title: '充电桩序列号',
            dataIndex: 'ID',
            width:180,                        
            kay: 'ID'
        },
        {
            title: '指令类型',
            dataIndex: 'commomdty',
            width:140,                        
            kay: 'commomdty'
        },
        {
            title: '关键数据',
            dataIndex: 'keydate',
            kay: 'keydate'
        }
    ]
    
    const data2 = [
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '发送',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},
        {status: '接收',time:'2020-02-28 10:00:00',ID:'12345678900', commomdty:'A01023 a000', keydate:'心跳:空闲状态,箱门关闭,插头拔出,市电.'},        
    ]
    return (
        <div className={styles.box}>
            <div className={styles.leftContent}>
                <Input style={{marginBottom:10}}/>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    pagination={false}
                    bordered
                    scroll={{ y: 550 }}
                />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.rightTopMuen}>
                    <LocaleProvider locale={zh_CN}>
                        <RangePicker
                            style={{width:230}}
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            // onChange={onChange}
                        />
                        <Button className={styles.search}><Icon type="icon-daochu" /><i class="iconfont">&#xe61c;</i>搜索</Button>
                        <Button className={styles.export}><i class="iconfont">&#xe627;</i>导出</Button>
                    </LocaleProvider>
                </div>
                <Table
                    columns={columns2}
                    dataSource={data2}
                    // pagination={false}
                    bordered
                    scroll={{ x:1000 }}
                />
            </div>
        </div>
    )
}

export default Content