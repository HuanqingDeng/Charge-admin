import React from 'react'
import Topmun from "./Topmun.jsx";
import Tables from "./Tables.jsx";
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function CompanyMag() {
    return(
        // <PageHeaderWrapper>
            <div>
                <Topmun></Topmun>
                <Tables/>
            </div>
        // </PageHeaderWrapper>
    )
}
export default CompanyMag