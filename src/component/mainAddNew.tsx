import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContentAddNew from './contentAddNew1';
import FormContactInformation from './form/FormContactInformation';
import FormEmloyeeDetail from './form/FormEmployeeDetail';
import FormSalary from './form/FormSalary';
import FormOrther from './form/FormOther';
import Button from '@mui/material/Button';
import { Footer } from 'antd/es/layout/layout';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
const MainAddNew = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return(

      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }}>

        <div className="headContent">
            <div>
                <h3>Employee Management</h3>
            </div>
            <div className="searchContent" style={{display: 'flex', alignItems: 'center'}}>
            <Button variant="outlined" disabled= {true}>Add</Button>
            </div>
            </div>
        <div style={{height: '90%'}}>
            <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Employee Information" {...a11yProps(0)} />
                        <Tab label="Contact Information" {...a11yProps(1)} />
                        <Tab label="Employee Detail" {...a11yProps(2)} />
                        <Tab label="Salary $ Wages" {...a11yProps(3)} />
                        <Tab label="Orthers" {...a11yProps(4)} />
                        </Tabs>
                    </Box>

                    {/* <div style={{backgroundColor: 'white', width: '100%', margin: 'auto', display: 'flex', justifyContent:'space-between'}}>
                        <div style={{marginLeft: '5%'}}>
                            <h5 >Personal Information</h5>
                        </div>
                        <div style={{marginRight: '5%'}}>
                        <p >Required&nbsp;(<span style={{color: 'red'}}>*</span>)</p>
                        </div>
                    
                    </div>
                    <Divider style={{width: '98%', margin:'auto' }}/> */}
                    
                    <TabPanel value={value} index={0}>
                    <ContentAddNew />
                    
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FormContactInformation />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <FormEmloyeeDetail />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <FormSalary />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <FormOrther />
                    </TabPanel>
                </Box>
        </div>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </div>
    )
}
export default MainAddNew