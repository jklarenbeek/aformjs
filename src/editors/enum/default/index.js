/* eslint-disable quote-props */
/* eslint-disable no-proto */
import editor from '../editor.js';

import SelectField from './SelectField';
import SelectControl from './SelectControl';

SelectField.__proto__ = editor;
SelectControl.__proto__ = editor;


export default {
  'default': 'select-field',
  'select-field': SelectField,
  'select-control': SelectControl,
};
