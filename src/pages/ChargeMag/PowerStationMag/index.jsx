import React from 'react'
import { Card } from 'antd'
import Topmun from "./Topmun.jsx";
import Tables from "./Tables.jsx";
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function PowerStationMag() {
    return(
        // <PageHeaderWrapper>
            <div>
                <Topmun></Topmun>
                <Tables/>
            </div>
        // </PageHeaderWrapper>
    )
}
export default PowerStationMag