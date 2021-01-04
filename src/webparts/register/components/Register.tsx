import * as React from 'react';
import styles from './Register.module.scss';
import { IRegisterProps } from './IRegisterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {DefaultButton,Label,TextField,DatePicker,Checkbox,SearchBox,Toggle,Spinner} from 'office-ui-fabric-react';

export default class Register extends React.Component<IRegisterProps, {}> {
  public render(): React.ReactElement<IRegisterProps> {
    return (
      <div>
           <Toggle label="I'm a Toggle"  onText="On" offText="Off" />  
           <Spinner label="I am Spinner" />
      </div>  
    );
  }
}
