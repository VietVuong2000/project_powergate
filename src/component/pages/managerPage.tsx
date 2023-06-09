import React from "react";
import LayoutEmployee from "../layout/LayoutEmployee";
import MainContent from "../employees/mainContent";

import axios from 'axios';
import api from "../../api";


const ManegerPage = (props:any) =>{
    
    return(
        <LayoutEmployee >
          <MainContent />
        </LayoutEmployee>
    )
}

export default ManegerPage