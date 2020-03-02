import React from 'react'
import {withRouter} from "react-router-dom";
import {Card, Descriptions, Form, Input, Table, Button, Modal, Checkbox, Select} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { Option } = Select;
const { TextArea } = Input;
import styles from './styles.less'

function Detail(props) {

    const columns = [
        {
            title: '文件名称',
            dataIndex: 'ID',
            kay: 'ID',
            // width: 180
        },
        {
            title: '所属协议',
            dataIndex: 'name',
            kay: 'name',
            // width:100
        },
        {
            title: '版本',
            dataIndex: 'province',
            kay: 'province',
            // width:120            
        },
        {
            title: '文件大小',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '上传时间',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '升级说明',
            dataIndex: 'area',
            kay: 'area',
            // width:80
        },
        {
            title: '操作',
            dataIndex: 'action',
            width:235,
            render: function(_,record){
                return (
                    <div>
                        <Button type='primary' style={{marginRight:5}}>详情</Button>
                        <Button type='danger' style={{marginLeft:5}}>删除</Button>
                    </div>
                )
            }
        }
    ]

    const data = [
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
        {ID: 123, name:24, province:0, area:100},
    ]

    return(
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                // pagination={false}
            />
        </div>
    )
}
export default withRouter(Detail)