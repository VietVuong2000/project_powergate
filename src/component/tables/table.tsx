import React, { useState } from 'react';
import PaginationEpl from './pagination/pagination';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Checkbox } from '@mui/material';
import api from '../../api';
// import { getDataTable } from '../../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import { getdatas } from '../../counter/counterSlice';
import { useNavigate } from 'react-router-dom';


// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'staff_id', label: 'NIK', minWidth: 200, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'card_number',
    label: 'Bank Card No.',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'bank_account_no',
    label: 'Bank Account No.',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'family_card_number',
    label: 'Family Card No.',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'marriage_status',
    label: 'Marriage Status',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'mother_name',
    label: 'Mother Name',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'pob',
    label: 'Place of birth',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'dob',
    label: 'Date of birth',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'home_address_1',
    label: 'Home Address',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'home_address_2',
    label: '',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'nc_id',
    label: 'National Card ID No.',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'contract_start_date',
    label: 'Date Start',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'first_contact',
    label: 'First Contract',
    minWidth: 170,

    align: 'center'
  },
  {
    id: 'second_contact',
    label: 'Second Contract',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'end_contact',
    label: 'End Contract',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'department_name',
    label: 'Department',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'employee_type',
    label: 'Employee Type',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'basic_salary',
    label: 'Salary Rp.',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'position',
    label: 'Position',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'ot_paid',
    label: 'O/T Paid',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'meal_paid',
    label: 'Meal paid',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'meal_allowance',
    label: 'Meal Rp.',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'grading',
    label: 'Grading',
    minWidth: 100,
    align: 'center'
  },
];


const columnsHeader: readonly Column[] = [
  { id: 'staff_id', label: 'NIK', minWidth: 200,align: 'center' },
  { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    align: 'center'
    

  },
  {
    id: 'card_number',
    label: 'Bank Card No.',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'bank_account_no',
    label: 'Bank Account No.',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'family_card_number',
    label: 'Family Card No.',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'marriage_status',
    label: 'Marriage Status',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'mother_name',
    label: 'Mother Name',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'pob',
    label: 'Place of birth',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'dob',
    label: 'Date of birth',
    minWidth: 170,
    align: 'center',

  },
  {
    id: 'home_address',
    
    label: 'Home Address',
    minWidth: 300,
    align: 'center',
    
   

  },
  
  {
    id: 'nc_id',
    label: 'National Card ID No.',
    minWidth: 170,

  },
  {
    id: 'contract_start_date',
    label: 'Date Start',
    minWidth: 170,
     align: 'center'

  },
  {
    id: 'first_contact',
    label: 'First Contract',
    minWidth: 170,
     align: 'center'

  },
  {
    id: 'second_contact',
    label: 'Second Contract',
    minWidth: 170,
     align: 'center'

  },
  {
    id: 'end_contact',
    label: 'End Contract',
    minWidth: 170,
     align: 'center'

  },
  {
    id: 'department_name',
    label: 'Department',
    minWidth: 170,
     align: 'center'

  },
  {
    id: 'employee_type',
    label: 'Employee Type',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'basic_salary',
    label: 'Salary Rp.',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'position',
    label: 'Position',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'ot_paid',
    label: 'O/T Paid',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'meal_paid',
    label: 'Meal paid',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'meal_allowance',
    label: 'Meal Rp.',
    minWidth: 100,
     align: 'center'
  },
  {
    id: 'grading',
    label: 'Grading',
    minWidth: 100,
     align: 'center'
  },
];


interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount} = props;
 

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            
          />
        </TableCell>
        {columnsHeader.map((column) => (
          
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
            colSpan={column.id === 'home_address' ? 2 : 1}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const TableEmployee = ({getData, setPageCurrent, counts, tableDatas, setCheckedTable, valueSearch, handleDelete}: any) => {
 
  console.log(1)
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleShowRow = async (id: any) => {
    console.log(id)
    navigate(`/employee/create-or-update/${id}`);

   
  }
  

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableDatas.map((row: any) => row.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  console.log(selected)
  setCheckedTable(selected);

  return (

    <div>
      <div style={{ marginBottom: 16 }}>


      </div>
      <TableContainer sx={{ maxHeight: 440, width: '100%' }}>

        <Table sx={{ minWidth: 750 }}>
          <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={tableDatas.length}
            />
          <TableBody>
            {tableDatas?.map((row: any) => {
              const isItemSelected = isSelected(row.id);
             
                return (
                  <TableRow hover role="checkbox" 
              
                  tabIndex={-1} 
                  key={row.id}
                  onClick={(event) => handleClick(event, row.id)}
                  selected={isItemSelected}
                  aria-checked={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                    
                      />
                    </TableCell>
                    {columns.map((column) => {  
                      const value = row[column.id];
                      if (column.id === "gender" && value ===1 ) return <TableCell>Nam</TableCell>
                      if (column.id === "gender" && value ===0) return <TableCell>Nữ</TableCell>
                      
                      return (
                        <TableCell key={column.id} align={column.align} onDoubleClick={() => handleShowRow(row.id)}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
          <PaginationEpl counts={counts} setPageCurrent={setPageCurrent}/>

              
    
    </div>

  )
}

export default TableEmployee