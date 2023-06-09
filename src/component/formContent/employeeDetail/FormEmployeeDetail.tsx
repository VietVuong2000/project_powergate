import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { Divider,Grid, Typography, Select    } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import api from '../../../api';
import "../employeeDetail/main.css"

const FormEmloyeeDetail = (dataDetail: any) =>{

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
        console.log(age)
      };

      const [department, setDepartment] = useState([])
      const getDepartment = async () =>{
        try {
            const res = await api.get("/department")
            setDepartment(res.data.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getDepartment()
    }, [])

   

    const [position, setPosition] = useState([])
    const getPosition = async () =>{
        try {
            const res = await api.get("/position")
            setPosition(res.data.data)
            
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getPosition()
    }, [])


    const[valueCheckbox, setValueCheckbox] = useState<number>();
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = (e: any) => {
        setIsChecked(e.target.checked);
        console.log(e.target.checked)
     };
    useEffect(()=>  {return isChecked ? setValueCheckbox(1) : setValueCheckbox(0)}, [isChecked])

   
   
      
    return(
        <div style={{paddingTop: '20px'}}>
            <div style={{backgroundColor: 'white',  display: 'flex', justifyContent:'space-between', paddingTop:'10px'}}>
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
                                <Item style={{    width: '20%', margin: "auto"}}>

                                    <Grid item xs={4}>
                                        <Item>
                                            <Typography>
                                            Department
                                            </Typography>
                                        </Item>
                                    </Grid>
                                </Item>
                                <Item className='input-select-epl-detail'>

                                    <Grid item xs={6} >
                                        <Item style={{width: '100%'}}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                sx={{backgroundColor: 'rgb(241, 243, 245)'}}
                                             
                                                >
                                                    <MenuItem value="">NAN</MenuItem>
                                             {department.map((option: any) => (
                                                <MenuItem key={option.id} value={option.name}>
                                                    {option.name}
                                                </MenuItem>
                                                ))}   
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        </Item>
                                    </Grid>
                                </Item>
                                
                            </Grid>

                            <Grid container>
                                <Item style={{    width: '20%', margin: "auto"}}>

                                    <Grid item xs={4}>
                                        <Item>
                                            <Typography>
                                            Position
                                            </Typography>
                                        </Item>
                                    </Grid>
                                </Item>
                                <Item className='input-select-epl-detail' >

                                    <Grid item xs={6} >
                                        <Item style={{width: '100%'}}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                sx={{backgroundColor: 'rgb(241, 243, 245)'}}
                                             
                                                >
                                                <MenuItem value="">NAN</MenuItem>
                                            {position.map((option: any)=>(

                                                <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
                                            ))}                                                
                                           
                                               
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        </Item>
                                    </Grid>
                                </Item>
                                
                            </Grid>
                            <Grid>
                                <Item style={{width: '90%', margin: 'auto'}}>

                                    <FormGroup >
                                        <FormControlLabel control={
                                           
                                        <Checkbox  checked={isChecked} color="success" />} label="Entitled OT" style={{color: 'black '}} onChange={handleCheckboxChange}/>
                                        <FormControlLabel control={<Checkbox  color="success" />} label="Meal Allowance Paid" style={{color: 'black '}}/>
                                        <FormControlLabel disabled control={<Checkbox />} label="DAttendance Allowance Paidisabled" />
                                        <FormControlLabel disabled control={<Checkbox />} label="Attendance Allowance Paid" />
                                    </FormGroup>
                                </Item>
                            </Grid>

                                                    

                         
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

export default FormEmloyeeDetail