import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './component/pages/loginpage';
import ForgotPass from './component/pages/forgotPass';
import ManegerPage from './component/pages/managerPage';
import Content1 from './component/mainContent';

import PaginationEpl from './component/tables/pagination';
import FormAddNew from './component/mainAddNew';
import ContentAddNew from './component/contentAddNew1';
import PageAddEmlpoyee from './component/pages/pageAddEmployee';
import TableEMployeeManager from './component/TableEmpoyeeManager';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/managerpage' element={<ManegerPage />}/>
        <Route path='/' element={<LoginPage />}/>

        <Route path='/forgotPass' element ={<ForgotPass />}/>
        <Route path='/addemployee' element={<PageAddEmlpoyee />}/>
        <Route path = '/tableemployeemanager' element ={<TableEMployeeManager />} />
      

    
      </Routes>
      {/* <ManegerPage>
        <Content1 />
      </ManegerPage> */}
      
      {/* <Button type="primary">Primary Button</Button>
      <DatePicker /> */}
      {/* <LoginPage /> */}
      {/* <ForgotPass /> */}
      {/* <Content1 /> */}
      {/* <PaginationEpl /> */}
      {/* <FormAddNew /> */}
      {/* <ContentAddNew /> */}
      {/* <PageAddEmlpoyee /> */}
     

    
    </div>
  );
}

export default App;
