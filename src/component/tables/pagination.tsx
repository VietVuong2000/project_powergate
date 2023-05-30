import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import api from '../../api';
import { useDispatch } from 'react-redux';
import { getDataChangePage } from '../../counter/counterSlice';
import { getDataTable } from '../../counter/counterSlice';




const PaginationEpl = ({counts, setPageCurrent} : any) =>{


    const dispatch = useDispatch();
    
    const handlePagination = async (event: React.ChangeEvent<unknown>, page: number) =>{
        // try{
        //     const res = await api.get("/employee",{
        //         params: {
        //             page: page
        //           }
        //     })
        //     // console.log(res.data.data.data);
        //     dispatch(getDataChangePage(res.data.data.data))
            

        // }
        // catch(e){
        //     console.log(e);
        // }
        setPageCurrent(page)
        
    }
  
   
    return(
        
            <Stack spacing={2} style={{flexDirection: 'row', height: '40px', paddingTop: '15px', gap: '5px'}}>

            <Pagination count={Math.ceil(counts / 20)} showFirstButton showLastButton size='large'  onChange={handlePagination} />
            <span className='css-p-totalpage'  style={{margin: '0px'}}>

                <p >{`1-${Math.ceil(counts / 20)} of ${counts}`}</p>
            </span>
            
            </Stack>
            
      
    )
}
export default PaginationEpl