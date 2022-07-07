import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Toggle = () => <Switch defaultChecked onChange={onChange} />;

export default Toggle;


