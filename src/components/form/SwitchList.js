/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import { ListControl } from './List/index';

const configSwitchList = {
  ...ListControl.config,
  inputItemType: 'checkbox',
  inputItemClass: 'switch',
};

export function SwitchList(props) {
  return (<ListControl config={ configSwitchList } { ...props } />);
}
SwitchList.config = configSwitchList;
