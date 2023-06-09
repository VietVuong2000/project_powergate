import React from 'react';
import {DatePicker} from 'antd';
  import type { DatePickerProps, RadioChangeEvent } from 'antd';
  import Divider from '@mui/material/Divider';
  import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Select, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import api from '../../../api';
import { getdatas } from '../../../counter/counterSlice';
import Button from '@mui/material/Button';
import "../employeeInformation/main.css"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




const ContentAddNew = (dataDetail: any) =>{
    const dispatch = useDispatch()
    const [placement, SetPlacement] = React.useState<DatePickerProps['placement']>('topLeft');
    const [staffId,setStaffId] = React.useState<string>()
    React.useEffect(() => {
        setStaffId(dataDetail.dataDetail.staff_id)
    }, [dataDetail.dataDetail])
    
    const [name,setName] = React.useState<string>()
    React.useEffect(() => {
        setName(dataDetail.dataDetail.name)
    }, [dataDetail.dataDetail])


    const [gender,setGender] = React.useState<any>(1)
    React.useEffect(() => {
        
        setGender(dataDetail.dataDetail.gender)
    }, [dataDetail.dataDetail])

    const [motherName,setMotherName] = React.useState<string>()
    React.useEffect(() => {
        setMotherName(dataDetail.dataDetail.mother_name)
    }, [dataDetail.dataDetail])

    const [dob,setDob] = React.useState<any>()
    React.useEffect(() => {
        setDob(dataDetail.dataDetail.dob)
    }, [dataDetail.dataDetail])


    const [pob,setPob] = React.useState<string>()
    React.useEffect(() => {
        setPob(dataDetail.dataDetail.pob)
    }, [dataDetail.dataDetail])
 

    const [ktpno, setKtpno] = React.useState<string>()
    React.useEffect(() => {
        setKtpno(dataDetail.dataDetail.ktp_no)
    }, [dataDetail.dataDetail])


    const [ncid, setNcid] = React.useState<string>()
    React.useEffect(() => {
        setNcid(dataDetail.dataDetail.nc_id)
    }, [dataDetail.dataDetail])
 

    const [homeAddress1, setHomeAddress1] = React.useState<string>()
    React.useEffect(() => {
setHomeAddress1(dataDetail.dataDetail.home_address_1)
    }, [dataDetail.dataDetail])
   

    const [homeAddress2, setHomeAddress2] = React.useState<string>()
    React.useEffect(() => {
        setHomeAddress2(dataDetail.dataDetail.home_address_1)
    }, [dataDetail.dataDetail])
 

    const [mobileNo, setMobileNo] = React.useState<string>()
    React.useEffect(() => {
        setMobileNo(dataDetail.dataDetail.mobile_no)
    }, [dataDetail.dataDetail])
  

    const [telNo, setTelNo] = React.useState<string>()
    React.useEffect(() => {
        setTelNo(dataDetail.dataDetail.tel_no)
    }, [dataDetail.dataDetail])
   

    const [marriage, setMarriage] = React.useState<string>()
    React.useEffect(() => {
        setMarriage(dataDetail.dataDetail.marriage)
    }, [dataDetail.dataDetail])
 
    

    const [cardNumber, setCardNumber] = React.useState<string>()
    React.useEffect(() => {
        setCardNumber(dataDetail.dataDetail.card_number)
    }, [dataDetail.dataDetail])
  

    const [bankAccountNo, setBankAccountNo] = React.useState<string>()
    React.useEffect(() => {
        setBankAccountNo(dataDetail.dataDetail.bank_account_no)
    }, [dataDetail.dataDetail])
  

    const [bankName, setBankName] = React.useState<string>()
    React.useEffect(() => {
        setBankName(dataDetail.dataDetail.bank_name)
    }, [dataDetail.dataDetail])
  

    const [familyCardNumber, setFamilyCardNumber] = React.useState<string>()
    React.useEffect(() => {
        setFamilyCardNumber(dataDetail.dataDetail.family_card_number)
    }, [dataDetail.dataDetail])
 

    const [safetyInsuranceNo, setSafetyInsuranceNo] = React.useState<string>()
    React.useEffect(() => {
        setSafetyInsuranceNo(dataDetail.dataDetail.safety_insurance_no)
    }, [dataDetail.dataDetail])
 

    const [healthInsuranceNo, setHealthInsuranceNo] = React.useState<string>()
    React.useEffect(() => {
        setHealthInsuranceNo(dataDetail.dataDetail.health_insurance_no)
    }, [dataDetail.dataDetail])
 

   

    interface DetailEmployee{
        staff_id: string;
        name: string;
        gender: number;
        mother_name: string;
        dob: string;
        pob: string;
        ktp_no: string;
        nc_id: string;
        home_address_1: string;
        home_address_2: string;
        mobile_no: string;
        tel_no: string;
        marriage: string;
        card_number: string;
        bank_account_no:string;
        bank_name: string;
        family_card_number: string;
        safety_insurance_no: string;
        health_insurance_no: string;
    
    
    }

   const dataInput = {
        'staff_id': staffId,
        'name': name,
        'gender': gender,
        'mother_name': motherName,
        'dob': dob,
        'pob':pob,
        'ktp_no': ktpno,
        'nc_id': ncid,
        'home_address_1': homeAddress1,
        'home_address_2': homeAddress2,
        'mobie_no': mobileNo,
        'tel_no': telNo,
        'marriage': marriage,
        'cardNumber': cardNumber,
        'bank_account_no': bankAccountNo,
        'bank_name': bankName,
        'family_card_number': familyCardNumber,
        'safety_insurance_no': safetyInsuranceNo,
        'health_insurance_no': healthInsuranceNo
    }

    console.log(dataInput)

    
    
    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };
    
    
    const dateFormat = 'YYYY/MM/DD';
   
    // const [dataUpdate, setDataUpdate] = React.useState({
    //     staff_id: dataDetail.dataDetail.staff_id,
    //     name: dataDetail.dataDetail.name,
    //     gender: dataDetail.dataDetail.gender,
    //     mother_name: dataDetail.dataDetail.mother_name,
    //     dob: dataDetail.dataDetail.dob,
    //     pob: dataDetail.dataDetail.pob,
    //     ktp_no: dataDetail.dataDetail.ktp_no,
    //     nc_id: dataDetail.dataDetail.nc_id,
    //     home_address_1: dataDetail.dataDetail.home_address_1,
    //     home_address_2:dataDetail.dataDetail.home_address_2,
    //     mobie_no: dataDetail.dataDetail.mobie_no,
    //     tel_no: dataDetail.dataDetail.tel_no,
    //     marriage: dataDetail.dataDetail.marriage,
    //     card_number: dataDetail.dataDetail.card_number,
    //     bank_account_no: dataDetail.dataDetail.bank_account_no,
    //     bank_name: dataDetail.dataDetail.bank_name,
    //     family_card_number: dataDetail.dataDetail.family_card_number,
    //     safety_insurance_no: dataDetail.dataDetail.safety_inusurance_no,
    //     health_insurance_no: dataDetail.dataDetail.health_insurance_no
    // })
    // const {staff_id, name, gender, mother_name, dob, pob, ktp_no, nc_id, home_address_1, home_address_2,  mobie_no, tel_no, marriage, card_number, bank_account_no, bank_name, family_card_number, safety_insurance_no, health_insurance_no}  = dataUpdate;
    // const handleInputChange = (e: any)=>{
    //     // let{name, value} = e.target
    //     setDataUpdate({...dataUpdate, [e.target.name]: e.target.value})
    //     console.log(dataUpdate)
    // }
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDob(dateString);
      };

      console.log(dob)
    return (

    <Paper>
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            {/* <Typography variant="h5">Personal Information</Typography> */}
            <div>
                <h5>Personal Information</h5>
            </div>
            <div>
                <Typography>
                Required ( 
                    <span style={{color: 'red'}}>*</span>
                    )
                </Typography>
                
            </div>
        </Box>
        <Divider sx={{width: '98%', margin: 'auto'}}/>
       
<Box sx={{padding: '10px'}}>
            
            <Stack direction="row"  spacing={3}>
                <div style={{width: '50%', padding: '10px'}}>
                <Stack sx={{gap: '10px'}}>
                <Grid container>
                        <Grid item xs={4} >
                            <Typography>NIK
                               
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField disabled id="staff_id" name="staff_id"  value={staffId} onChange={(e) => setStaffId(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4} >
                            <Typography>Name
                                <span style={{color: 'red'}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="name" name="name"  value={name} onChange={(e) =>setName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                        <Typography>Gender
                                <span style={{color: 'red'}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Box sx={{ minWidth: '100%', backgroundColor: "#f1f3f5" }}>
                          <FormControl fullWidth >
                            <Select id="gender" value={gender} onChange={(e)=> setGender(e.target.value)}>
                              <MenuItem value={1}>Male</MenuItem>
                              <MenuItem value={0}>Female</MenuItem>
                            </Select>
                        
                          </FormControl>
                       </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Mother Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={motherName} onChange={(e) =>setMotherName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Date of birth
                                <span style={{color: 'red'}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        {/* <DatePicker value={dayjs(dob, dateFormat)}onChange={onChange}/> */}
                        <DatePicker onChange={onChange} value={dayjs(dob, dateFormat)} format={dateFormat}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Place of birth
                                
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={pob} onChange={(e)=>setPob(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>KTP No.
                                <span style={{color: 'red'}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={ktpno} onChange={(e)=>setKtpno(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>National Card ID

                                <span style={{color: 'red'}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={ncid} onChange={(e) => setNcid(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Home Address 1
                                
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={homeAddress1} onChange={(e) => setHomeAddress1(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Home Address 2
                                
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="filled-basic" value={homeAddress2} onChange={(e) => setHomeAddress2(e.target.value)}/>
                        </Grid>
                    </Grid>
                    
                </Stack>
                </div>
                <div style={{width: '50%', padding: '10px'}}>
                <Stack sx={{gap: '10px'}}>

                    
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Mobile No.
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
<Grid item xs={4}>
                                <Typography>Tel No.
                                    
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={telNo} onChange={(e) => setTelNo(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Marriage Status
                                    
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={marriage} onChange={(e) => setMarriage(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Bank Card No.
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Bank Account No.
                                    
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={bankAccountNo} onChange={(e) => setBankAccountNo(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Bank Name
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Family Card Number
                                    
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={familyCardNumber} onChange={(e) => setFamilyCardNumber(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
<Grid item xs={4}>
                                <Typography>Safety Insurance No.
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={safetyInsuranceNo} onChange={(e) => setSafetyInsuranceNo(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography>Health Insurance No.
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="filled-basic" value={healthInsuranceNo} onChange={(e) => setHealthInsuranceNo(e.target.value)}/>
                            </Grid>
                        </Grid>
                    
                </Stack>

                </div>
            </Stack>
        </Box>
    </Paper>
    )
}

export default ContentAddNew

