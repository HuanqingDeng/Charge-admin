import React, {useEffect} from 'react'
import { Card, DatePicker, LocaleProvider } from "antd";
import echarts from 'echarts';
import './bmap.js'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import styles from './style.less'
// import img from '../../static/images'
// 日期中文化
import zh_CN from 'antd/es/locale/zh_CN'; // 引入语言包
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 注意这里设置 moment 必须放在有 import 的后面。

function ChargeMonitor() {
    // function initEchartDay() {
    //     // var script = document.createElement('script');
    //     // script.type = 'text/javascript';
    //     // script.async = true;
    //     // script.src = 'http://api.map.baidu.com/api?v=2.0&ak=53oVIOgmSIejwV7EfphPgTynOZbIiVYu';
    //     // document.head.appendChild(script);    
    //     function LoadBaiduMapScript() {
    //         //console.log("初始化百度地图脚本...");
    //         // const AK = 你的密钥;
    //         const BMap_URL = "http://api.map.baidu.com/api?v=2.0&ak=53oVIOgmSIejwV7EfphPgTynOZbIiVYu";
    //         return new Promise((resolve, reject) => {
    //             // 如果已加载直接返回
    //             if(typeof BMap !== "undefined") {
    //                 resolve(BMap);
    //                 return true;
    //             }
    //             // 百度地图异步加载回调处理
    //             window.onBMapCallback = function () {
    //                 console.log("百度地图脚本初始化成功...");
    //                 resolve(BMap);
    //             };
    //             // 插入script脚本
    //             let scriptNode = document.createElement("script");
    //             scriptNode.setAttribute("type", "text/javascript");
    //             scriptNode.setAttribute("src", BMap_URL);
    //             document.body.appendChild(scriptNode);
    //         });
    //     } 
    // var data = [
    //     {name: '廊坊', value: 193},
    //     {name: '菏泽', value: 194},
    //     {name: '合肥', value: 229},
    //     {name: '武汉', value: 273},
    //     {name: '大庆', value: 279}
    // ];

    // var geoCoordMap = {
    //     '廊坊':[116.7,39.53],
    //     '菏泽':[115.480656,35.23375],
    //     '合肥':[117.27,31.86],
    //     '武汉':[114.31,30.52],
    //     '大庆':[125.03,46.58]
    // };

    // var convertData = function (data) {
    //     var res = [];
    //     for (var i = 0; i < data.length; i++) {
    //         var geoCoord = geoCoordMap[data[i].name];
    //         if (geoCoord) {
    //             res.push({
    //                 name: data[i].name,
    //                 value: geoCoord.concat(data[i].value)
    //             });
    //         }
    //     }
    //     return res;
    // };

    // function renderItem(params, api) {
    //     var coords = [
    //         [116.7,39.53],
    //         [103.73,36.03],
    //         [112.91,27.87],
    //         [120.65,28.01],
    //         [119.57,39.95]
    //     ];
    //     var points = [];
    //     for (var i = 0; i < coords.length; i++) {
    //         points.push(api.coord(coords[i]));
    //     }
    //     var color = api.visual('color');

    //     return {
    //         type: 'polygon',
    //         shape: {
    //             points: echarts.graphic.clipPointsByRect(points, {
    //                 x: params.coordSys.x,
    //                 y: params.coordSys.y,
    //                 width: params.coordSys.width,
    //                 height: params.coordSys.height
    //             })
    //         },
    //         style: api.style({
    //             fill: color,
    //             stroke: echarts.color.lift(color)
    //         })
    //     };
    // }

    // const option = {
    //     backgroundColor: 'transparent',
    //     title: {
    //         text: '全国主要城市空气质量',
    //         subtext: 'data from PM25.in',
    //         sublink: 'http://www.pm25.in',
    //         left: 'center',
    //         textStyle: {
    //             color: '#fff'
    //         }
    //     },
    //     tooltip : {
    //         trigger: 'item'
    //     },
    //     bmap: {
    //         center: [104.114129, 37.550339],
    //         zoom: 1,
    //         roam: true,
    //         mapStyle: {
    //             styleJson: [
    //                     {
    //                         "featureType": "water",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "color": "#044161"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "land",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "color": "#004981"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "boundary",
    //                         "elementType": "geometry",
    //                         "stylers": {
    //                             "color": "#064f85"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "railway",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "highway",
    //                         "elementType": "geometry",
    //                         "stylers": {
    //                             "color": "#004981"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "highway",
    //                         "elementType": "geometry.fill",
    //                         "stylers": {
    //                             "color": "#005b96",
    //                             "lightness": 1
    //                         }
    //                     },
    //                     {
    //                         "featureType": "highway",
    //                         "elementType": "labels",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "arterial",
    //                         "elementType": "geometry",
    //                         "stylers": {
    //                             "color": "#004981"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "arterial",
    //                         "elementType": "geometry.fill",
    //                         "stylers": {
    //                             "color": "#00508b"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "poi",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "green",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "color": "#056197",
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "subway",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "manmade",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "local",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "arterial",
    //                         "elementType": "labels",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "boundary",
    //                         "elementType": "geometry.fill",
    //                         "stylers": {
    //                             "color": "#029fd4"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "building",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "color": "#1a5787"
    //                         }
    //                     },
    //                     {
    //                         "featureType": "label",
    //                         "elementType": "all",
    //                         "stylers": {
    //                             "visibility": "off"
    //                         }
    //                     }
    //             ]
    //         }
    //     },
    //     series : [
    //         {
    //             name: 'pm2.5',
    //             type: 'scatter',
    //             coordinateSystem: 'bmap',
    //             data: convertData(data),
    //             symbolSize: function (val) {
    //                 return val[2] / 10;
    //             },
    //             label: {
    //                 formatter: '{b}',
    //                 position: 'right'
    //             },
    //             itemStyle: {
    //                 color: '#ddb926'
    //             },
    //             emphasis: {
    //                 label: {
    //                     show: true
    //                 }
    //             }
    //         },
    //         {
    //             name: 'Top 5',
    //             type: 'effectScatter',
    //             coordinateSystem: 'bmap',
    //             data: convertData(data.sort(function (a, b) {
    //                 return b.value - a.value;
    //             }).slice(0, 6)),
    //             symbolSize: function (val) {
    //                 return val[2] / 10;
    //             },
    //             showEffectOn: 'emphasis',
    //             rippleEffect: {
    //                 brushType: 'stroke'
    //             },
    //             hoverAnimation: true,
    //             label: {
    //                 formatter: '{b}',
    //                 position: 'right',
    //                 show: true
    //             },
    //             itemStyle: {
    //                 color: '#f4e925',
    //                 shadowBlur: 10,
    //                 shadowColor: '#333'
    //             },
    //             zlevel: 1
    //         },
    //         // {
    //         //     type: 'custom',
    //         //     coordinateSystem: 'bmap',
    //         //     renderItem: renderItem,
    //         //     itemStyle: {
    //         //         opacity: 0.5
    //         //     },
    //         //     animation: false,
    //         //     silent: true,
    //         //     data: [0],
    //         //     z: -10
    //         // }
    //     ]
    // };

    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('DayCount'));
    //     // 绘制图表
    //     myChart.setOption(option,true);
    // }

    // useEffect(() => {
    //     initEchartDay()
    // })

    return(
        // <PageHeaderWrapper>
            <div id="DayCount" style={{ width: 600, height: 700 }}></div>
        // </PageHeaderWrapper>
    )
}
export default ChargeMonitor