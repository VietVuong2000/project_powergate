import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './component/login/loginpage';
import ForgotPass from './component/forgetPass/forgotPass';

import LayoutEmployee from './component/layout/LayoutEmployee';
import CreateEmployee from './component/createEmployee';
import MainAddNew from './component/mainAddNew';
import MainContent from './component/employees/mainContent';


function App() {
  const [selectId, setSelectId] = React.useState()
  return (
    <div className="App">
      <Routes>
        <Route path='/managerpage' element={
        <LayoutEmployee>

          <MainContent />
        </LayoutEmployee>
        }/>
        <Route path='/forgotPass' element ={<ForgotPass />}/>
        
        <Route path='/' element={<LoginPage />}/>
        <Route path='/employee/create-or-update' element={
          <LayoutEmployee>

            <CreateEmployee />
          </LayoutEmployee>
        }/>

        <Route path='/employee/create-or-update/:id' element={
          <LayoutEmployee>
            
            <MainAddNew />
          </LayoutEmployee>
        }/>
        {/* <Route path = '/tableemployeemanager' element ={<TableEMployeeManager />} /> */}
        {/* <Route path='/employee/create-or-update' element={<PageAddEmlpoyee />}/> */}
      
      </Routes>

    </div>
  );
}

export default App;
