import { Map } from 'react-amap'
import React, {useEffect, useState} from 'react'
import { Card, DatePicker, LocaleProvider } from "antd";
function ChargeMonitor() {
    const [center, setCenter] = useState({longitude:106.206478608,latitude:38.5026210119})
    return(
        <div style={{width: '100%', height: 550}}>
            <Map amapkey={'171ce56dfa484dd533e1ac9be13faee5'} center={center} zoom={4}/>
        </div>
    )
}
export default ChargeMonitor