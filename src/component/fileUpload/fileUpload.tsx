import React from 'react'
import axios from 'axios'
import { Button} from '@mui/material';
import "../fileUpload/fileUpload.css"
import api from '../../api';
import Upload from 'antd/es/upload/Upload';

// import { UploadOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { Button, message, Upload } from 'antd';

// interface ChildComponentProps {
//     uploadHandler: (file: File) => void;
//   }


const FileUpload = ({ setFileValue, setItemUpload }: any) => {


    // try {
    //     const res = await api.post("/contract/save-multiple", files)
    //     console.log(res)
    // }
    // catch (error) {
    //     console.log(error)
    // }

    const uploadFile = (file: any) => {
        // const file = event.target.files[0];
        setItemUpload((prev: any) => ({ ...prev, documents: file.file }))
        // setFileValue(file)
        // setFileValue(file)
        console.log(file)

    }

    return (
        <>
            <div className="file-card">

                <Upload onChange={uploadFile}>
                    
                    <Button variant="outlined" className='btn-upload-file' >
                                    <span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-fill-all" >
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81825 1.18191C7.64251 1.00618 7.35759 1.00618 7.18185 1.18191L4.18185 4.18191C4.00611 4.35765 4.00611 4.64257 4.18185 4.81831C4.35759 4.99404 4.64251 4.99404 4.81825 4.81831L7.05005 2.58651V9.49999C7.05005 9.74852 7.25152 9.94999 7.50005 9.94999C7.74858 9.94999 7.95005 9.74852 7.95005 9.49999V2.58651L10.1819 4.81831C10.3576 4.99404 10.6425 4.99404 10.8182 4.81831C10.994 4.64257 10.994 4.35765 10.8182 4.18191L7.81825 1.18191ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="black"></path></svg>
                                    </span>
                        Upload File</Button>
               
                    {/* <Upload onChange={uploadFile}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload> */}
                </Upload>
                </div>


           
        </>
    )
}

export default FileUpload