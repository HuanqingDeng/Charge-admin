import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {Table, Pagination, Button, Card, Col, Row} from 'antd'
import echarts from 'echarts';
import styles from './styles.less'

function Tables(props) {
    const data = [
        {ID:'4', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'5', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
        {ID:'11', name: 'dsh', province:'江西省', city: '赣州市', area:'A枪', address:'充电',acount: 234,online:23,leisure:34,chargeing:34,breakdown:2,linkman:12332333432},
    ]
    const columns = [
        {
            title: '日期',
            dataIndex: 'ID',
            kay: 'ID'
        },
        {
            title: '充电电量(kWh)',
            dataIndex: 'name',
            kay: 'name'
        },
        {
            title: '总费用(元)',
            dataIndex: 'province',
            kay: 'province'
        },
        {
            title: '充电时长',
            dataIndex: 'city',
            kay: 'city'
        },
        {
            title: '充电次数',
            dataIndex: 'area',
            kay: 'area'
        }
    ],

    detail = () => {
        const {history} = props
        history.push('/FinanceMag/OrderMag/detail')
    }

    // onShowSizeChange = (current, pageSize) => {
    //     console.log(current, pageSize);
    // }

    const data_date = [
        {
            type: 'category', name:'日', data: ['1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '21','22','23','24','25','26','27','28','29','30','31']
        }
    ]

    const data_date1 = [
        {
            type: 'category', name:'月', data: ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ]
    function initEchartMonth() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('MounthCount'));
        // 绘制图表
        myChart.setOption({
            title: {},
            tooltip: {trigger: 'axis'},
            legend: {data: ['电量(kWh)', '金额(元)']},
            xAxis: data_date1,
            yAxis: [{type: 'value', name:'电量(kWh)'},{type: 'value', name:'金额(元)'}],
            series: [
                {
                    name: '电量(kWh)',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '金额(元)',
                    type: 'bar',
                    data: [5, 10, 3, 14, 20, 10]
                }
            ]
        });
    }

    useEffect(() => {
        // initEchartDay()
        initEchartMonth()
    })

    return (
        <div>
            <div>
                <div id="MounthCount" style={{ width: '100%', height: 400 }}></div>
            </div>
            <div style={{ background: '#ECECEC', padding: '5px'}}>
                <Row gutter={5}>
                <Col span={6}>
                    <Card title="总电量" bordered={false} style={{fontWeight: 'bolder'}}>
                        12342
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="总金额" bordered={false} style={{fontWeight: 'bolder'}}>
                        342213
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="总充电时长" bordered={false} style={{fontWeight: 'bolder'}}>
                        53423
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="总充电次数" bordered={false} style={{fontWeight: 'bolder'}}>
                        2323
                    </Card>
                </Col>
                </Row>
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    // scroll={{ y: 400 }}
                />
                {/* <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                /> */}
            </div>
        </div>
    )
}
export default withRouter(Tables)