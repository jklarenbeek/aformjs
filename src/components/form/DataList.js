/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from '__futilsjs';

import { ListControl, resolveCommonItemProperties } from './List';

const configDataList = {
  ...ListControl.config,
  ListItem: OptionItem,
  ListGroup: OptionGroup,
};

export function OptionRequired({ required, placeholder, default: _default }) {
  if (required) {
    return (!_default && _default !== false)
      ? (<option disabled selected hidden>{ placeholder }</option>)
      : null;
  }
  else {
    return (placeholder)
      ? (<option selected>{ placeholder }</option>)
      : null;
  }
}

export function OptionItem({ key, data, selected, disabled, config }) {
  const { key: k, label: l, selected: s, readonly: r, disabled: d } = resolveCommonItemProperties(key, data, selected, disabled, config);

  return (<option value={ k } selected={ s } disabled={ r || d }>{ l }</option>);
}

export function OptionGroup({ key, data = {}, config }, children) {
  let label = (key && data !== true && data[key]) || key;

  if (typeof label === 'object') label = label[config.bindGroup];
  return (<optgroup label={ label }>{ children }</optgroup>);
}

export const DataList = ({ $id, options, config = configDataList }) => {
  const RenderOptions = config.renderer;
  return (<datalist id={ $id }>
    <RenderOptions options={ options } config={ config }></RenderOptions>
  </datalist>);
};
DataList.config = configDataList;
