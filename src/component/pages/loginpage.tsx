import React, { useState } from 'react';
import { Form, Input, Button, Select, notification } from 'antd';
import type { FormItemProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// set up axios authentication




const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const OPTIONS = ['SBM', 'DMF'];
interface infLogin {
  userName: string,
  passWord: string,
  factory: string[],
}

const LoginPage = () => {



  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));


 




  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')
  const [factory, setFactory] = useState<string>('')
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  
  const  onFinish = async (value: object) => {
    try {
      const res = await axios.post("https://api-training.hrm.div4.pgtest.co/api/v1/login",{
        username: userName,
        password: passWord,
        company_id: factory
      })
      if (res.data.message === "Success") {
        const token = res.data.data.token;
        localStorage.setItem('token', token);
        navigate('/managerpage')

      }
      console.log(res)
    }catch(err: any) {
      console.log(err);
      api['error']({
        message: 'Lỗi đăng nhập',
        description:
          err.response.data.message
      });
    }
    
  
   
   
 };



  return (


    <div id='login' >
      {contextHolder}

      <div className='mainLogin'>
        <div className='headLogin'>
          <div>

            <img src="	http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg" alt="" className='img' />
            <h3 className='font'>HR Management System</h3>
          </div>
          <div>
            <h3 className='font'>Sign In</h3>
          </div>
        </div>



        <Form name="form_item_path" layout="vertical" onFinish={onFinish} className='formLogin' >
          <MyFormItemGroup prefix={['user']}>
            <MyFormItem name="username" label="Username" hasFeedback rules={[{ required: true }]} >
              <Input onChange={(e) =>setUserName(e.target.value)}/>
            </MyFormItem>
            <MyFormItem name="password" label="password" hasFeedback rules={[{ required: true }, { min: 8 }]}>

              <div>
                <Input onChange={(e) =>setPassWord(e.target.value)}>

                </Input>
                {/* <Button style={{width: "40px", height: "40px"}}>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="black"></path></svg>
                </Button> */}

              </div>

            </MyFormItem>


            <MyFormItem name="factory" label="Factory" hasFeedback >

              <Select onChange={(value) =>setFactory(value)}>
                <Select.Option value="1">SBM</Select.Option>
                <Select.Option value="0">DBM</Select.Option>
              </Select>
            </MyFormItem>
            {/* <Form.Item label="Factory">
            </Form.Item> */}
            

          </MyFormItemGroup>

          
          <Button type="primary" htmlType="submit" onSubmit={onFinish}>
            Submit
          </Button>
          <Link to='/forgotPass' style={{ color: "blue" }}>forget your password ?</Link>

        </Form>

        <div style={{ height: '30%', display: 'flex', justifyContent: 'center' }}>
          <footer style={{ margin: 'auto' }}>
            <span>Copyright © 2022. All Rights Reserved</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage