import React, {useEffect} from 'react'
import { Card, DatePicker, LocaleProvider } from "antd";
import echarts from 'echarts';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less'
// import img from '../../static/images'
// 日期中文化
import zh_CN from 'antd/es/locale/zh_CN'; // 引入语言包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 注意这里设置 moment 必须放在有 import 的后面。

function Realtimesituation() {
    function initEchartDay() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('DayCount'));
        // 绘制图表
        myChart.setOption({
            title: {},
            tooltip: {trigger: 'axis'},
            legend: {data: ['电量', '充电人数']},
            xAxis: [
                {
                    type: 'category',name:'时', data: ['0：00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00',
                '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00',
                '21:00','22:00','23:00']
                }
            ],
            yAxis: [{type: 'value',name:'电量'}, {type: 'value',name:'充电人数'}],
            series: [
                {
                    name: '电量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '充电人数',
                    type: 'line',
                    data: [5, 10, 3, 14, 20, 10]
                }
            ]
        });
    }

    function initEchartMonth() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('MounthCount'));
        // 绘制图表
        myChart.setOption({
            title: {},
            tooltip: {trigger: 'axis'},
            legend: {data: ['总收费', '服务费']},
            xAxis: [
                {
                    type: 'category', name:'日', data: ['1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30','31']
                }
            ],
            yAxis: [{type: 'value', name:'费用',}],
            series: [
                {
                    name: '总收费',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '服务费',
                    type: 'bar',
                    data: [5, 10, 3, 14, 20, 10]
                }
            ]
        });
    }
    
    useEffect(() => {
        initEchartDay()
        initEchartMonth()
    })

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return(
        <LocaleProvider locale={zh_CN}>
            <div className={styles.top}>
                <div className={styles.topItem}>
                    <div className="left">
                        <img className={styles.imgs} src={require('./../../static/images/money.png')} alt=""/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_amount}>2345</div>
                        <div className={styles.right_title}>本日充电人数</div>
                    </div>
                </div>
                <div className={styles.topItem}>
                    <div className="left">
                        <img className={styles.imgs} src={require('./../../static/images/money.png')} alt=""/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_amount}>2345</div>
                        <div className={styles.right_title}>本日充电人数</div>
                    </div>
                </div>
                <div className={styles.topItem}>
                    <div className="left">
                        <img className={styles.imgs} src={require('./../../static/images/money.png')} alt=""/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_amount}>2345</div>
                        <div className={styles.right_title}>本日充电人数</div>
                    </div>
                </div>
                <div className={styles.topItem}>
                    <div className="left">
                        <img className={styles.imgs} src={require('./../../static/images/money.png')} alt=""/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_amount}>2345</div>
                        <div className={styles.right_title}>本日充电人数</div>
                    </div>
                </div>
                <div className={styles.topItem}>
                    <div className="left">
                        <img className={styles.imgs} src={require('./../../static/images/money.png')} alt=""/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_amount}>2345</div>
                        <div className={styles.right_title}>本日充电人数</div>
                    </div>
                </div>
            </div>
            <Card title='日充电统计' style={{marginTop:20}} headStyle={{backgroundColor: 'rgb(209, 209, 209)'}}>
                <DatePicker onChange={onChange} style={{float:'right', marginRight:100}} />
                <br />
                <div id="DayCount" style={{ width: '100%', height: 400 }}></div>
            </Card>
            <Card title='月充电统计' style={{marginTop:20}} headStyle={{backgroundColor: 'rgb(209, 209, 209)'}}>
                <DatePicker onChange={onChange} picker="month" style={{float:'right', marginRight:100}} />
                <br />
                <div id="MounthCount" style={{ width: '100%', height: 400 }}></div>
            </Card>
        </LocaleProvider>
    )
}
export default Realtimesituation