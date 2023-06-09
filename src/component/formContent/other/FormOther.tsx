import React from 'react';
import { useEffect, useState } from 'react';
import {
    
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
  import type { DatePickerProps, RadioChangeEvent } from 'antd';
  import Divider from '@mui/material/Divider';
  import { Box, FormControl, Button, TableContainer    } from '@mui/material';
  import Stack from '@mui/material/Stack';
  import Paper from '@mui/material/Paper';
  import { styled } from '@mui/material/styles';
  import Grid from '@mui/material/Grid';
  import Typography from '@mui/material/Typography';
  import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import api from '../../../api';
import Chip from '@mui/material/Chip';
import "../other/main.css"

import { Upload } from 'antd';


const currencies = [
    {
      value: 'USD',
      label: 'vuong',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
 
const FormOrther = (dataDetail: any) =>{
    const [placement, SetPlacement] = React.useState<DatePickerProps['placement']>('topLeft');

    const [gradeValue, setGradeValue] = useState<any>([])
    const gradeOther = async () =>{
        try {
            const res = await api.get("/grade")
            console.log(res.data.data)
            setGradeValue(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        gradeOther()
    }, [])

    const [benefitValue, setBenefitValue] = useState<any>([])
    const benefitOther = async () =>{
        try {
            const res = await api.get("/benefit")
            setBenefitValue(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        benefitOther()
    }, [])


    const [chip, setChip] = useState<any>([])
    const handleGrade = async (id: any) =>{
        try {
            const res = await api.get(`/grade/${id}`)

            setChip(res.data.data.benefits)
        }
        catch (err) {
            console.log(err)
        }
    }



    console.log(gradeValue)

    const placementChange = (e: RadioChangeEvent) => {
      SetPlacement(e.target.value);
    };

    const handleUploadOther = (file: any) =>{
        console.log(file)
    }

    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        <div style={{paddingTop: '20px'}}>
            <div style={{backgroundColor: 'white', display: 'flex', justifyContent:'space-between', paddingTop: '10px'}}>
                    <div style={{marginLeft: '5%'}}>
                        <h5>Contract Information</h5>
                    </div>
                    <div style={{marginRight: '5%'}}>
                    <p >Required&nbsp;(<span style={{color: 'red'}}>*</span>)</p>
                    </div>
                
                </div>
                <Divider style={{width: '98%', margin:'auto' }}/>
                <Box>
                <Stack spacing={1}>
                    <Item>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid container>
                        <Grid item xs={4}>
                            <Typography className='label-add-other'>
                                Grade
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                        <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
     
                                    <div style={{display: "flex", flexDirection: "column"}}>

                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        // helperText="Please select your currency"
                                        variant="outlined"
                                        >
                                            <MenuItem value="">NAN</MenuItem>
                                        {gradeValue.map((option: any) => (
                                            <MenuItem key={option.id} value={option.id} onClick={() => handleGrade(option.id)}>
                                            {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <div style={{display: 'flex'}}>

                                        {chip.map((option: any) => (

                                            <Chip label={`${option.name}`}  />
                                        ))}
                                    </div>
                                    </div>
        
                                </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                        <Typography className='label-add-other'>
                                Benefit
                         </Typography>
                        </Grid>
                        <Grid item xs={8}>
                         <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                             noValidate
                            autoComplete="off"
                            >

                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        // helperText="Please select your currency"
                                        variant="outlined"
                                        >
                                        {benefitValue.map((option: any) => (
                                            <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
        
                                </Box>
                       
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                        <Typography className='label-add-other'>
                                Benefit
                        </Typography>

                        </Grid>
                        <Grid item xs={6}>
                        <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                            
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
     
      
                                    <TextField
                                        id="outlined-multiline-static"
                                        // helperText="Please select your currency"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        style={{backgroundColor: "#f1f3f5"}}
                                        >
                                        
                                    </TextField>
        
                                </Box>
                        </Grid>
                    </Grid>                    
                            
                            <Grid container>
                                    <Grid item xs={4}>
                                    <Typography className='label-add-other'>
                                    HRM User Account
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >

                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        // helperText="Please select your currency"
                                        variant="outlined"
                                        disabled
                                        >
                                    
                                            <MenuItem  value={1}>
                                            1
                                            </MenuItem>
                                      
                                    </TextField>
        
                                </Box>
                                    </Grid>
                                </Grid>

                        </Grid>
                                <Box>
                                    <Box>
                                    <Grid container spacing={1} className='style-other-content'>
                                        <Item className='style-btn-orther'>

                                            <Grid item xs={4}>
                                                <Item style={{display: 'flex'}}>
                                                    <Typography style={{textAlign:'center'}}>Document</Typography>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Item>
                                                <Upload onChange={handleUploadOther}>
                                                <Button variant="outlined" className='btn-upload-file' >
                                                    <span>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-fill-all" >
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81825 1.18191C7.64251 1.00618 7.35759 1.00618 7.18185 1.18191L4.18185 4.18191C4.00611 4.35765 4.00611 4.64257 4.18185 4.81831C4.35759 4.99404 4.64251 4.99404 4.81825 4.81831L7.05005 2.58651V9.49999C7.05005 9.74852 7.25152 9.94999 7.50005 9.94999C7.74858 9.94999 7.95005 9.74852 7.95005 9.49999V2.58651L10.1819 4.81831C10.3576 4.99404 10.6425 4.99404 10.8182 4.81831C10.994 4.64257 10.994 4.35765 10.8182 4.18191L7.81825 1.18191ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="black"></path></svg>
                                                    </span>
                                                    Upload</Button>
                                                </Upload>
                                                    
                                                </Item>
                                            </Grid>
                                        </Item>
                                        <Item className='table-add-orther'>
                                        <Box>
                                                <TableContainer component={Paper} >
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
                                                
                                                        <TableRow>
                                                        
                                                        
                                                        </TableRow>
                                                
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                        </Item>
                                        
                                    </Grid>
                                    </Box>
                                   
                                </Box>
                    </Item>
                   
                    
                </Stack>
                {/* <Stack spacing={2} className='content-add-contact-form'>
                    <Item >
                    <Typography >
                    </Typography>
                  
                    </Item>
                  
                    
                </Stack> */}

                </Box>
                  
        </div>
    )
}

export default FormOrther