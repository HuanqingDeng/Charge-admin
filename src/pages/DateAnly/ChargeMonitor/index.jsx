import { Map, Markers } from 'react-amap'
import React, {useEffect, useState} from 'react'
import { Card, DatePicker, LocaleProvider } from "antd";
function ChargeMonitor() {
    const [center, setCenter] = useState({longitude:106.206478608,latitude:38.5026210119})
    const [markers, setMarkers] = useState([
        {position:[106.206478608,38.5026210119]},
        {position:[104.776071339,29.3591568895]},
        {position:[126.435797675,41.945859397]},
        {position:[102.545067892,24.3704471344]},
        {position:[124.391382074,43.1755247011]},
        {position:[113.307649675,23.1200491021]},
    ])
    return(
        <div style={{width: '100%', height: 550}}>
            <Map plugins={['ToolBar']} amapkey={'171ce56dfa484dd533e1ac9be13faee5'} center={center} zoom={4} mapStyle='fresh'>
                <Markers 
                    markers={markers}
                />
            </Map>
        </div>
    )
}
export default ChargeMonitor