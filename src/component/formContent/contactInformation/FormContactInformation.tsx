import React from 'react';
import {
    DatePicker,
    Input
  } from 'antd';
  import type { DatePickerProps, RadioChangeEvent } from 'antd';
  import Divider from '@mui/material/Divider';
  import { Box, FormControl, Button, TableContainer, Select} from '@mui/material';
  import Stack from '@mui/material/Stack';
  import Paper from '@mui/material/Paper';
  import { styled } from '@mui/material/styles';
  import Grid from '@mui/material/Grid';
  import Typography from '@mui/material/Typography';
  import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import MenuItem from "@mui/material/MenuItem";

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import FileUpload from '../../fileUpload/fileUpload';
import "../contactInformation/main.css"
import TextField from '@mui/material/TextField';

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
//   ) {
//     return { name, calories, fat, carbs, protein };
//   }
  
  const rows = [];

const FormContactInformation = (dataDetail: any) =>{

    const [placement, SetPlacement] = React.useState<DatePickerProps['placement']>('topLeft');

    const placementChange = (e: RadioChangeEvent) => {
      SetPlacement(e.target.value);
    };

    const [contactDate,setContactDate] = React.useState<any>()
    const changeContactDate: DatePickerProps['onChange'] = (date, dateString) => {
        setItemUpload((prev:any)=>({...prev,date: dateString}))
        console.log(dateString)
      };

      const [startDate,setStartDate] = React.useState<any>()
      useEffect(() =>setStartDate(dataDetail.dataDetail.contract_start_date), [dataDetail.dataDetail])
      const changeDateStart: DatePickerProps['onChange'] = (date, dateString) => {
        setStartDate(dateString);
      };

      const dateFormat = 'YYYY/MM/DD';

  

    const [employeeType,setEmployeeType] = React.useState<any>()
    // React.useEffect(() => {
    //     setEmployeeType(dataDetail.dataDetail.contract_start_date)
    // }, [dataDetail.dataDetail])
    const [contactName,setContactName] = React.useState<any>()
    const handleContactName = (e: any) =>{
        setItemUpload((prev:any)=>({...prev,name: e.target.value}))
        setContactName(e.target.value)
    }   
    // React.useEffect(() => {
    //     setContactName(dataDetail.dataDetail.contract_start_date)
    // }, [dataDetail.dataDetail])

    const [files, setFiles] = useState<any>([])
      
    const removeFile = (filename: any) => {
      setFiles(files.filter((file: any) => file.name !== filename))
    }

    // files.map(  file => console.log(file.name))
     const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
      const [itemUpload, setItemUpload] = useState({
        name: "",
        date: "",
        documents: []
      })
      const [tableUpload, setTableUPload] = useState<any>([])
    
    
      const [fileValue, setFileValue] = useState()
      const uploadHandler = async(file: any) => {
        setTableUPload((prev: any) => [...prev, itemUpload])
    }
    console.log(tableUpload)
       
        console.log(itemUpload)
    return(
        <div style={{paddingTop: '20px'}}>
            <div style={{backgroundColor: 'white',  display: 'flex', justifyContent:'space-between', paddingTop: '10px'}}>
                    <div style={{marginLeft: '5%'}}>
                        <h5>Contract Information</h5>
                    </div>
                    <div style={{marginRight: '5%'}}>
                    <p >Required&nbsp;(<span style={{color: 'red'}}>*</span>)</p>
                    </div>
                
                </div>
                <Divider style={{width: '98%', margin:'auto' }}/>
                <Box>
                <Stack spacing={2}>
                    <Item>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography className='lable-add-contact'>
                                Date Start
                                <span style={{color:'red'}}>*</span>
                                <span></span>
                                
                                </Typography>

                                <FormControl  className='Input-add-contact'>
                                 
                                <DatePicker  onChange={changeDateStart} format={dateFormat} className='datepicker_contact' value={dayjs(startDate, dateFormat)}/>
                                    
                                </FormControl>
                                {/* <Item>1</Item> */}
                            </Grid>
                            <Grid item xs={6}>
                            <Typography className='lable-add-contact'>
                                Employee Type
                                <span style={{color:'red'}}>*</span>
                                <span></span>
                                
                                </Typography>

                                <FormControl className='Input-add-contact'>
                                 
                                <Select
                                              
                                    id="demo-simple-select"
                                    style={{backgroundColor: 'rgb(241, 243, 245)'}}
                                    onChange={(e)=> setEmployeeType(e.target.value)}
                                    >
                                        
                                        <MenuItem value="Part-time"> Part-time</MenuItem>
                                        <MenuItem value="Permanent" >Permanent</MenuItem>
                                        <MenuItem value="Contact">Contact</MenuItem>

                                </Select>
                                    
                                </FormControl>
                            </Grid>
                            
                        </Grid>
                    </Item>
                   
                    
                </Stack>
                <Stack spacing={2} className='content-add-contact-form'>
                    <Item >
                    <Typography >
                        <Typography style={{ 
                            color: 'rgb(104, 112, 118)',
                            fontWeight: '600',
                            backgroundColor:' rgb(241, 243, 245)',
                            padding: '5px 20px',
                            textAlign: 'left'}}>
                        Contact :
                        </Typography>
                        
                        <Typography style={{
                            margin: '0px',
                            lineHeight: '1.35714',
                            fontWeight: '400',
                            color: 'rgb(104, 112, 118) !important',
                            padding: '10px 20px',
                            textAlign: 'left'
                        
                        }}>

                            Please upload pdf, png, xlsx, docx file format!
                        </Typography>
                        <Divider />
                    </Typography>
                    <Stack spacing={2}>
                        <Item>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <Item style={{width:'40%', boxShadow:'none '}}>
                            <Stack spacing={2}>
                                <Item>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={6}>
                                        <Typography className='lable-add-contact'>
                                        Contact Date
                                        </Typography>

                                        <FormControl  className='Input-add-contact'>
                                        
                                        <DatePicker onChange={changeContactDate} value={dayjs(itemUpload.date, dateFormat)} format={dateFormat} className='datepicker_contact'/>
                                            
                                        </FormControl>
                                        </Grid>
                                    </Grid>
                                </Item>
                                <Item>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={6}>
                                        <Typography className='lable-add-contact'>
                                        Contact Name
                                        </Typography>

                                        <FormControl  className='Input-add-contact'>
                                        
                                            <TextField id="my-input" value={itemUpload.name}  aria-describedby="my-helper-text" onChange={(e)=>     setItemUpload((prev:any)=>({...prev,name: e.target.value}))}/>
                                            
                                        </FormControl>
                                        </Grid>
                                    </Grid>
                                </Item>
                                <Item className='all-btn-contact-add'>
                             
                                    <FileUpload setFileValue={setFileValue} setItemUpload={setItemUpload}/>
                                   
                                <Button variant="contained" style={{width:'40%', minWidth:'none', backgroundColor:'rgb(105, 217, 193)', height:'48px', textTransform: 'capitalize'}}
                                onClick={uploadHandler}
                                >
                                   
                                    Add</Button>
                                </Item>
                            </Stack>
                            </Item>
                            <Item style={{width:'60%',boxShadow:'none '}}>
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>No</TableCell>
                                            <TableCell align="right">Contact Name</TableCell>
                                            <TableCell align="right">Sign Date</TableCell>
                                            <TableCell align="right">Action</TableCell>
                                            
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {
                                            tableUpload && tableUpload.map((file:any, index:number) =>(
                                            <TableRow key={index}>
                                            <TableCell align="right">{index}</TableCell>
                                            <TableCell align="right">{file?.name}</TableCell>
                                            <TableCell align="right">{file?.date}</TableCell>
                                            <TableCell align="right">
                                            <Button>
                                            <span className="MuiButton-startIcon MuiButton-iconSizeSmall css-n70zej"><svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="svg-fill-all"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="black"></path></svg></span>
                                                Delete</Button>    
                                            </TableCell>
                                            </TableRow>
                                            
                                            ))
                                        }
                                       
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Item>
                            
                        </Stack>
                        </Item>
                       
                        
                    </Stack>
                    </Item>
                  
                    
                </Stack>

                </Box>
                  
        </div>
    )
}

export default FormContactInformation