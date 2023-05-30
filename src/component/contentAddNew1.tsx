import React from 'react';
import {
    
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
  import type { DatePickerProps, RadioChangeEvent } from 'antd';
  import Divider from '@mui/material/Divider';


const ContentAddNew = () =>{
    const [placement, SetPlacement] = React.useState<DatePickerProps['placement']>('topLeft');

    const placementChange = (e: RadioChangeEvent) => {
      SetPlacement(e.target.value);
    };
    return (
        <div>
            <div style={{backgroundColor: 'white', width: '100%', margin: 'auto', display: 'flex', justifyContent:'space-between'}}>
                        <div style={{marginLeft: '5%'}}>
                            <h5 >Personal Information</h5>
                        </div>
                        <div style={{marginRight: '5%'}}>
                        <p >Required&nbsp;(<span style={{color: 'red'}}>*</span>)</p>
                        </div>
                    
                    </div>
                    <Divider style={{width: '98%', margin:'auto' }}/>
        <div className="body-content-add">
                
        <div className='body-content-add1'>

                    <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        >
            
      
        <Form.Item label="Name" style={{backgroundColor: 'white'}}>
            <Input size="small" />
        </Form.Item>
        <Form.Item label="Gender">
            <Select placeholder="Choose Gender" size='large'>
            <Select.Option value="Nam">Nam</Select.Option>
            <Select.Option value="Nữ">Nữ</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Mother Name">
            <Input size="small" />
        </Form.Item>
        <Form.Item label="Date of Birth">
        <DatePicker placement={placement} />
        </Form.Item>
        <Form.Item label="Place of birth">
            <DatePicker />
        </Form.Item>
        <Form.Item label="KTP NO">
            <Input size="small" />
        </Form.Item>
        <Form.Item label="National Card ID*" valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Home Address 1" valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Home Address 2" valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        
        </Form>
        </div>
        <div className='body-content-add1'>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        >
      
        <Form.Item label="Mobile No.">
            <Input />
        </Form.Item>
        <Form.Item label="Tel No.">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Marriage Status">
        <Select placeholder="Choose Marriage Status" size='large'>
            <Select.Option value="N/A">N/A</Select.Option>
            <Select.Option value="Not Married">Not Married</Select.Option>
            <Select.Option value="Married with 3 kinds">Married with 3 kinds</Select.Option>
            <Select.Option value="Married with 2 kinds">Married with 2 kinds</Select.Option>
            <Select.Option value="Married with 1 kinds">Married with 1 kinds</Select.Option>
            <Select.Option value="Married">Married</Select.Option>
            <Select.Option value="Single">Single</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Bank Card No.">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Bank Account No.">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Bank Name">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Family Card Number" valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Safety Insurance No." valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        <Form.Item label="Health Insurance No." valuePropName="checked">
        <Input size="small" />
        </Form.Item>
        </Form>
        </div>

       
    </div>
        </div>
    )
}

export default ContentAddNew