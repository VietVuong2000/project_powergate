import React from "react"
import { Content, Footer } from "antd/es/layout/layout"
import { theme,Input } from 'antd';
import TablePage from "../tablePage";
import api from "../../api";
import "../employees/mainEmployee.css"



const MainContent =()=>{
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const [valueSearch, setValueSearch] = React.useState()

    


    console.log(valueSearch);

    return(
        <div className="content1" >
             <div style={{ overflow: 'initial', backgroundColor:'rgb(248 249 250)' }}>
                <div className="headContent">
                  <div>
                    <h3>Employee Management</h3>
                  </div>
                  <div className="searchContent">
                    <Input size="large" placeholder="Search" 
                    onChange={(e:any)=> setValueSearch(e.target.value)}
                    />
                  </div>
                </div>
                
                
                <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                  
                    <TablePage valueSearch={valueSearch}/>
                </div>
                <Footer style={{ textAlign: 'center' }}>Copyright © 2022. All Rights Reserved</Footer>
              </div>
        </div>
    )
}

export default MainContent