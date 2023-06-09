import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { Divider,Grid, Typography, Select , InputAdornment, Input   } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import "../Salary/main.css"

const FormSalary =(dataDetail: any) =>{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [age, setAge] = React.useState("");

      const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        
      };

      const [basicSalary, setBasicSalary] = useState<Number>()
      useEffect(() => setBasicSalary(dataDetail.dataDetail.basic_salary), [dataDetail.dataDetail])

      const [auditSalary, setAuditSalary] = useState<Number>()
      useEffect(() => setAuditSalary(dataDetail.dataDetail.audit_salary), [dataDetail.dataDetail])
      
      const [safetyInsurance, setSafetyInsurance] = useState<Number>()
      useEffect(() => setSafetyInsurance(dataDetail.dataDetail.safety_insurance), [dataDetail.dataDetail])

      const [healthInsurance, setHealthInsurance] = useState<Number>()
      useEffect(() => setHealthInsurance(dataDetail.dataDetail.health_insurance), [dataDetail.dataDetail])

      const [mealAllowance, setMealAllowance] = useState<Number>()
      useEffect(() => setMealAllowance(dataDetail.dataDetail.meal_allowance), [dataDetail.dataDetail])

    return (
        <div style={{paddingTop: '20px'}}>
        <div style={{backgroundColor: 'white', display: 'flex', justifyContent:'space-between', paddingTop: '10px'}}>
                <div style={{marginLeft: '5%'}}>
                    <h5>Employee Detail</h5>
                </div>
                <div style={{marginRight: '5%'}}>
                <p >Required&nbsp;(<span style={{color: 'red'}}>*</span>)</p>
                </div>
            
            </div>
            <Divider style={{width: '98%', margin:'auto' }}/>
            <Box >
            <Grid container columns={16}>
                <Grid item xs={8}>
                    <Item>
                        <Grid container>
                            <Item style={{    width: '30%', margin: "auto"}}>

                                <Grid item xs={4} className='label-add-salary'>
                                    <Item>
                                        <Typography>
                                        Basic Salary
                                        <span style={{color:'red'}}>*</span>
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Item>
                            <Item className='input-select-epl-detail'>

                                <Grid item xs={6} >
                                    <Item style={{width: '100%'}}>
                                    <Box sx={{ minWidth: 120 }}>
                                        
                                            <TextField
                                                id="outlined-number"                                              
                                                type="number"                                            
                                                variant="outlined"
                                                style={{backgroundColor:'rgb(241, 243, 245)', width: '100%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                  }}
                                                defaultValue={basicSalary}
                                            >
                                                
                                                </TextField>
                                        
                                    </Box>
                                    </Item>
                                </Grid>
                            </Item>
                            
                        </Grid>

                        <Grid container>
                            <Item style={{    width: '30%', margin: "auto"}}>

                                <Grid item xs={4} className='label-add-salary'>
                                    <Item>
                                        <Typography>
                                        Basic Salary (Audit)
                                        <span style={{color:'red'}}>*</span>
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Item>
                            <Item className='input-select-epl-detail' >

                                <Grid item xs={6} >
                                    <Item style={{width: '100%'}}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <TextField
                                                id="outlined-number"                                              
                                                type="number"                                            
                                                variant="outlined"
                                                style={{backgroundColor:'rgb(241, 243, 245)', width: '100%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    
                                                  }}
                                                defaultValue={auditSalary}
                                                
                                            >
                                                
                                                </TextField>
                                    </Box>
                                    </Item>
                                </Grid>
                            </Item>
                            
                        </Grid>
                        <Grid container>
                            <Item style={{    width: '30%', margin: "auto"}}>

                                <Grid item xs={4} className='label-add-salary'>
                                    <Item>
                                        <Typography>
                                        Safety Insurance Amount
                                        <span style={{color:'red'}}>*</span>
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Item>
                            <Item className='input-select-epl-detail' >

                                <Grid item xs={6} >
                                    <Item style={{width: '100%'}}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <TextField
                                                id="outlined-number"                                              
                                                type="number"                                            
                                                variant="outlined"
                                                style={{backgroundColor:'rgb(241, 243, 245)', width: '100%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    
                                                  }}
                                                defaultValue={safetyInsurance}
                                            >
                                                
                                                </TextField>
                                    </Box>
                                    </Item>
                                </Grid>
                            </Item>
                            
                        </Grid>
                        <Grid container>
                            <Item style={{    width: '30%', margin: "auto"}}>

                                <Grid item xs={4} className='label-add-salary'>
                                    <Item>
                                        <Typography>
                                        Healthy Insurance Amount
                                        
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Item>
                            <Item className='input-select-epl-detail' >

                                <Grid item xs={6} >
                                    <Item style={{width: '100%'}}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <TextField
                                                id="outlined-number"                                              
                                                type="number"                                            
                                                variant="outlined"
                                                style={{backgroundColor:'rgb(241, 243, 245)', width: '100%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    
                                                  }}
                                                defaultValue={healthInsurance}
                                                
                                            >
                                                
                                                </TextField>
                                    </Box>
                                    </Item>
                                </Grid>
                            </Item>
                            
                        </Grid>
                        <Grid container>
                            <Item style={{    width: '30%', margin: "auto"}}>

                                <Grid item xs={4} className='label-add-salary'>
                                    <Item>
                                        <Typography>
                                        Meal Allowance
                                        <span style={{color:'red'}}>*</span>
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Item>
                            <Item className='input-select-epl-detail' >

                                <Grid item xs={6} >
                                    <Item style={{width: '100%'}}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <TextField
                                                id="outlined-number"                                              
                                                type="number"                                            
                                                variant="outlined"
                                                style={{backgroundColor:'rgb(241, 243, 245)', width: '100%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                                    
                                                  }}
                                                defaultValue={mealAllowance}
                                            >
                                                
                                                </TextField>
                                    </Box>
                                    </Item>
                                </Grid>
                            </Item>
                            
                        </Grid>
                        {/* <Grid>
                            <Item style={{width: '90%', margin: 'auto'}}>

                                <FormGroup >
                                    <FormControlLabel control={<Checkbox  defaultChecked color="success" />} label="Entitled OT" style={{color: 'black '}}/>
                                    <FormControlLabel control={<Checkbox  defaultChecked color="success" />} label="Meal Allowance Paid" style={{color: 'black '}}/>
                                    <FormControlLabel disabled control={<Checkbox />} label="DAttendance Allowance Paidisabled" />
                                    <FormControlLabel disabled control={<Checkbox />} label="Attendance Allowance Paid" />
                                </FormGroup>
                            </Item>
                        </Grid> */}

                                                

                     
                    </Item>

                    
                    
                </Grid>
                <Grid item xs={8}>
                    <Item></Item>
                </Grid>
            </Grid>
            </Box>

    </div>
    )
}
export default FormSalary