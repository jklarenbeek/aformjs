/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './List/index';

const configRadioList = {
  ...ListControl.config,
  inputItemType: 'radio',
};

export function RadioList(props) {
  return (<ListControl config={ configRadioList } { ...props } />);
}
RadioList.config = configRadioList;
