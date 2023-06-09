import React from 'react';
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import "../forgetPass/mainFoget.css"

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [
    prefixPath,
    prefix
  ]);

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};


const ForgotPass = () =>{
  const [email, setEmail] = useState<string>('')



    const onFinish = (value: object) => {
        console.log(value);
      };
    return (
            <div className='forgotPass'>

                <div className='headLogin'>
                    <div>

                        <img  src="	http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg" alt="" className='img'  />
                        <h3 className= 'font'>HR Management System</h3>
                    </div>
                    <div>
                        <h3 className='font'>Forget password</h3>
                    </div>

                </div>
                <div className='bodyForget'>

                    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                        <MyFormItemGroup prefix={["user"]}>
                            <MyFormItemGroup prefix={["email"]}>
                            <MyFormItem name="email" label="Your work email: ">
                                <Input onChange={(e) => setEmail(e.target.value)}/>
                            </MyFormItem>
                            </MyFormItemGroup>
                        </MyFormItemGroup>
        
                        <Button type="primary" htmlType="submit">
                            Confirm & Send OTP
                        </Button>
                    <div style={{color: 'blue', paddingTop: '20px'}}>
                    <Link to = '/' >Back to sign in</Link>

                    </div>
                    </Form>
                </div>
            
    
            
            </div>
    )
}
export default ForgotPass
