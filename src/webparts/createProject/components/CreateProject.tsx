import * as React from 'react';
import styles from './CreateProject.module.scss';
import { ICreateProjectProps } from './ICreateProjectProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CreateProject extends React.Component<ICreateProjectProps, {}> {
  public render(): React.ReactElement<ICreateProjectProps> {
    return (
      <div className={ styles.createProject }>
       
      </div>
    );
  }
}
