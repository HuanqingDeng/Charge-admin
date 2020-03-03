import React, {useState} from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from '../styles.less'

function Detail(props) {

    const goToback = () => {
        const { history } = props
        history.goBack()
    }

    return(
        <div>
            <Card>
                <Button onClick={goToback} className={styles.goBack} type='primary'>返回</Button>
                <Descriptions title="日志信息">
                    <Descriptions.Item label="日志ID">5621</Descriptions.Item>
                    <Descriptions.Item label="来源IP">103.251.99.144</Descriptions.Item>
                    <Descriptions.Item label="操作描述">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="异常代码">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="异常详情">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="方法">empty</Descriptions.Item>
                    <Descriptions.Item label="方法参数">2434445</Descriptions.Item>
                    <Descriptions.Item label="方法描述">2434445</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    )
}
export default withRouter(Detail)