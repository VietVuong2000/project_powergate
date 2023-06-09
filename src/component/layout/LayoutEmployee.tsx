import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import sideBars from "../../helper/sideBars";
import parse from 'html-react-parser';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "../layout/mainLayout.css"


import { theme } from 'antd';



const drawerWidth = '20%';

  
 

const LayoutEmployee = (props: any  )=>{

    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const navigate = useNavigate();

      const exitManageEmployee = ()=>{
       
        navigate('/managerpage');
      }
    return(
        <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>

            <img src="http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg" alt="" className="img-header"></img>
                <Typography variant="h4" noWrap component="div" className='h4-sidebar'>
                HR Management System
              </Typography>
            </div>
            <div>

              <Button variant="text">
              <Avatar>V</Avatar>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            
          }}
         
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', padding:"24px" }} >
            <List>
            <Typography variant="h4" className="style-h4-General">
                 General
                </Typography>
              {sideBars.map((sideBar, index) =>
                

                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={exitManageEmployee}>
                    <ListItemIcon>
                    <div className="iconSlider">
                        {parse(sideBar.icon)}  
                    </div>
                    </ListItemIcon>
                    <ListItemText>{sideBar.name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
  
               
              
              
            </List>
            <Divider style={{width: '90%', margin: 'auto'}}/>
            <List>
  
            <Typography variant="h4" className="style-h4-advance">
                  Advance
                </Typography>
             
                <ListItem key={7} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <div className='iconSlider'>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6084 12.2252L12.15 15.6836C12.0167 15.8169 11.8917 16.0752 11.8584 16.2586L11.6667 17.5836C11.6 18.0586 11.9334 18.4002 12.4084 18.3252L13.7334 18.1336C13.9167 18.1086 14.175 17.9752 14.3084 17.8419L17.7667 14.3836C18.3584 13.7919 18.6417 13.0919 17.7667 12.2169C16.9 11.3502 16.2084 11.6252 15.6084 12.2252Z" fill="#006ADC"></path><path d="M15.1167 12.7168C15.4084 13.7668 16.2334 14.5834 17.2834 14.8834L15.1167 12.7168Z" fill="#006ADC"></path><path opacity="0.4" d="M1.69147 12.1919C1.69147 12.2169 1.6748 12.2502 1.6748 12.2752C2.44147 13.8086 3.69148 15.0669 5.22481 15.8252C5.24981 15.8252 5.28314 15.8086 5.30814 15.8086C5.02481 14.8419 4.80814 13.8502 4.64981 12.8586C3.64981 12.6919 2.65814 12.4752 1.69147 12.1919Z" fill="#006ADC"></path><path opacity="0.4" d="M15.8916 5.35836C15.1082 3.71669 13.7832 2.3917 12.1499 1.6167C12.4499 2.60837 12.6999 3.62504 12.8666 4.6417C13.8832 4.80837 14.8999 5.05002 15.8916 5.35836Z" fill="#006ADC"></path><path opacity="0.4" d="M1.6084 5.3586C2.6084 5.0586 3.62508 4.80861 4.64174 4.64194C4.80841 3.65028 5.01674 2.66694 5.30007 1.70028C5.27507 1.70028 5.24173 1.68359 5.21673 1.68359C3.65007 2.45859 2.37507 3.76693 1.6084 5.3586Z" fill="#006ADC"></path><path opacity="0.4" d="M11.5167 4.46686C11.3167 3.38352 11.0667 2.3002 10.7084 1.2502C10.6917 1.19187 10.6917 1.14188 10.6834 1.07521C10.0667 0.925211 9.41674 0.825195 8.75007 0.825195C8.07507 0.825195 7.4334 0.916877 6.8084 1.07521C6.80007 1.13354 6.8084 1.18354 6.79173 1.2502C6.44173 2.3002 6.1834 3.38352 5.9834 4.46686C7.82507 4.26686 9.67508 4.26686 11.5167 4.46686Z" fill="#006ADC"></path><path opacity="0.4" d="M4.46686 5.9834C3.37519 6.1834 2.30019 6.4334 1.25019 6.79173C1.19186 6.8084 1.14185 6.8084 1.07519 6.81673C0.925185 7.4334 0.825195 8.0834 0.825195 8.75007C0.825195 9.42507 0.916852 10.0667 1.07519 10.6917C1.13352 10.7001 1.18352 10.6917 1.25019 10.7084C2.30019 11.0584 3.37519 11.3167 4.46686 11.5167C4.26686 9.67508 4.26686 7.82507 4.46686 5.9834Z" fill="#006ADC"></path><path opacity="0.4" d="M16.4166 6.81673C16.3582 6.81673 16.3082 6.8084 16.2416 6.79173C15.1916 6.44173 14.1082 6.1834 13.0249 5.9834C13.2332 7.82507 13.2332 9.67507 13.0249 11.5084C14.1082 11.3084 15.1916 11.0584 16.2416 10.7001C16.2999 10.6834 16.3499 10.6917 16.4166 10.6834C16.5666 10.0584 16.6666 9.41673 16.6666 8.74173C16.6666 8.0834 16.5749 7.44173 16.4166 6.81673Z" fill="#006ADC"></path><path opacity="0.4" d="M5.9834 13.0332C6.1834 14.1249 6.4334 15.1999 6.79173 16.2499C6.8084 16.3082 6.80007 16.3582 6.8084 16.4249C7.4334 16.5749 8.07507 16.6749 8.75007 16.6749C9.41674 16.6749 10.0667 16.5832 10.6834 16.4249C10.6917 16.3665 10.6917 16.3165 10.7084 16.2499C11.0584 15.1999 11.3167 14.1249 11.5167 13.0332C10.6001 13.1332 9.67507 13.2082 8.75007 13.2082C7.82507 13.1999 6.90007 13.1332 5.9834 13.0332Z" fill="#006ADC"></path><path opacity="0.4" d="M5.7915 5.7915C5.5415 7.75817 5.5415 9.74149 5.7915 11.7165C7.75817 11.9665 9.7415 11.9665 11.7165 11.7165C11.9665 9.74983 11.9665 7.7665 11.7165 5.7915C9.7415 5.5415 7.75817 5.5415 5.7915 5.7915Z" fill="#006ADC"></path></svg>
                      </div>
                    </ListItemIcon>
                    <Typography>Global Settings</Typography>
                  </ListItemButton>
                  
                </ListItem>
                <ListItem key={7} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <div className='iconSlider'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9596 14.5835C18.9596 14.9252 18.6763 15.2085 18.3346 15.2085H12.5013V15.4168C12.5013 16.6668 11.7513 17.0835 10.8346 17.0835H5.83464C4.91797 17.0835 4.16797 16.6668 4.16797 15.4168V15.2085H1.66797C1.3263 15.2085 1.04297 14.9252 1.04297 14.5835C1.04297 14.2418 1.3263 13.9585 1.66797 13.9585H4.16797V13.7502C4.16797 12.5002 4.91797 12.0835 5.83464 12.0835H10.8346C11.7513 12.0835 12.5013 12.5002 12.5013 13.7502V13.9585H18.3346C18.6763 13.9585 18.9596 14.2418 18.9596 14.5835Z" fill="#006ADC"></path><path opacity="0.4" d="M18.9577 5.4165C18.9577 5.75817 18.6743 6.0415 18.3327 6.0415H15.8327V6.24984C15.8327 7.49984 15.0827 7.9165 14.166 7.9165H9.16602C8.24935 7.9165 7.49935 7.49984 7.49935 6.24984V6.0415H1.66602C1.32435 6.0415 1.04102 5.75817 1.04102 5.4165C1.04102 5.07484 1.32435 4.7915 1.66602 4.7915H7.49935V4.58317C7.49935 3.33317 8.24935 2.9165 9.16602 2.9165H14.166C15.0827 2.9165 15.8327 3.33317 15.8327 4.58317V4.7915H18.3327C18.6743 4.7915 18.9577 5.07484 18.9577 5.4165Z" fill="#006ADC"></path></svg>    
                      </div>
                    </ListItemIcon>
                    <Typography>Settings</Typography>
                  </ListItemButton>
                  
                </ListItem>
              
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <main>{props.children}</main>
          {/* <Content1 /> */}
       
        
        </Box>
      </Box>
    )
}
export default LayoutEmployee