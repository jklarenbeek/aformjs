/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from '__futilsjs';

import { ListControl } from './List/index';

const configCheckList = {
  ...ListControl.config,
  inputItemType: 'checkbox',
};

export function CheckList(props) {
  return (<ListControl config={ configCheckList } { ...props } />);
}
CheckList.config = configCheckList;
