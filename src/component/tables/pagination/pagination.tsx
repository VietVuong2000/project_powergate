import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import api from '../../../api';
import { useDispatch } from 'react-redux';
import "../pagination/mainPagination.css"




const PaginationEpl = ({counts, setPageCurrent} : any) =>{


  
    
    const handlePagination = async (event: React.ChangeEvent<unknown>, page: number) =>{
      
        setPageCurrent(page)

    }
  
   
    return(
        
            <Stack spacing={2} style={{flexDirection: 'row', paddingTop: '15px', gap: '5px'}}>

            <Pagination count={Math.ceil(counts / 20)} showFirstButton showLastButton size='large'  onChange={handlePagination} />
            <span className='css-p-totalpage'  style={{margin: '0px'}}>

                <p style={{margin: "auto"}}>{`1-${Math.ceil(counts / 20)} of ${counts}`}</p>
            </span>
            
            </Stack>
            
      
    )
}
export default PaginationEpl