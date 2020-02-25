import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from '../styles.less'

function Detail(props) {
    const columns1 = [
        {
            title: '类型',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '开始时间',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '结束时间',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '开始电量',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '结束电量',
            dataIndex: 'area',
            kay: 'area2',
            // width:80
        },
        {
            title: '计费公式',
            dataIndex: 'area3',
            kay: 'area',
            // width:80
        },
        {
            title: '费用',
            dataIndex: 'area4',
            kay: 'area',
            // width:80
        },
        {
            title: '另收服务费',
            dataIndex: 'area5',
            kay: 'area',
            // width:80
        }
    ]

    const data1 = [
        {ID: 123, name:24, province:0, area:100,area2:100,area3:100,area4:100,area5:100}
    ]

    const goToback = () => {
        const { history } = props
        history.goBack()
    }

    return(
        <div>
            <Card>
                <Button onClick={goToback} className={styles.goBack} type='primary'>返回</Button>
                <Descriptions title="订单信息">
                    <Descriptions.Item label="订单编号">1810000000</Descriptions.Item>
                    <Descriptions.Item label="开始时间">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="结束时间">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="用户">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="电站">empty</Descriptions.Item>
                    <Descriptions.Item label="充电电量">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="充电费用">2434445</Descriptions.Item>
                    <Descriptions.Item label="状态">2434445</Descriptions.Item>
                    <Descriptions.Item label="服务费">2434445</Descriptions.Item>
                    <Descriptions.Item label="总费用">2434445</Descriptions.Item>
                </Descriptions>
            </Card>
            <Card title='计费明细'  style={{marginTop:10,marginBottom:10}}>
                <Table
                    columns={columns1}
                    dataSource={data1}
                    bordered
                    pagination={false}
                    scroll={{ y: 400 }}
                />
            </Card>
        </div>
    )
}
export default withRouter(Detail)