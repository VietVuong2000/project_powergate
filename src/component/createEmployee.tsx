import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContentAddNew from './formContent/employeeInformation/contentAddNew';
import FormContactInformation from './formContent/contactInformation/FormContactInformation';
import FormEmloyeeDetail from './formContent/employeeDetail/FormEmployeeDetail';
import FormSalary from './formContent/Salary/FormSalary';
import FormOrther from './formContent/other/FormOther';
import Button from '@mui/material/Button';
import { Footer } from 'antd/es/layout/layout';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from '../api';
import { daDK } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { getdatas, getdatanumber } from '../counter/counterSlice';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  // console.log(id)


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

const CreateEmployee = ()=>{
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
      
            <div className="headContent" style={{ width: '90%' }}>
              <div>
                <h3>Employee Management</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button className='button-addemployee' variant="outlined" disabled >Add</Button>
            
              </div>
            </div>
            <div style={{ height: '90%' }}>
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
      
      
      
                <TabPanel value={value} index={0}>
                  <ContentAddNew  dataDetail={{}}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <FormContactInformation  dataDetail={{}}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <FormEmloyeeDetail  dataDetail={{}}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <FormSalary  dataDetail={{}}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <FormOrther  dataDetail={{}}/>
                </TabPanel>
              </Box>
            </div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </div>
    )
}

export default CreateEmployee