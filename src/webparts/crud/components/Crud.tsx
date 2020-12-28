import * as React from 'react';
import styles from './Crud.module.scss';
import { ICrudProps } from './ICrudProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Crud extends React.Component<ICrudProps, {}> {
  public render(): React.ReactElement<ICrudProps> {
    return (
      <div className={ styles.crud }>
              <h1>maicon</h1>
      </div>
    );
  }
}
