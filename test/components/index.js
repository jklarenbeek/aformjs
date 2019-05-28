/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* @jsx h */
import 'aformjs/sass/bulma';

import { h, app } from '__futilsjs';

import { Field } from 'aformjs/components/form/Field';

import NormalFieldTest from './Field.Normal';
import HorizontalFieldTest from './Field.Horizontal';

import InputStringTest from './InputString';
import InputNumberTest from './InputNumber';

import SelectListTest from './SelectList';
import MultiListTest from './MultiList';
import RadioListTest from './RadioList';
import CheckListTest from './CheckList';
import DropDownTest from './DropDown';

// **********************************************************************************

const state = {
  count: 0,
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
};

// <hr />
// <NormalFieldTest />
// <hr />
// <HorizontalFieldTest />
// <hr />
// <InputStringTest />
// <hr />
// <InputNumberTest />
// <hr />
// <SelectListTest />
// <hr />
// <RadioListTest />
// <hr />
// <CheckListTest />

// <div>
// <h1>{state.count}</h1>
// <button onclick={() => actions.down(1)}>-</button>
// <button onclick={() => actions.up(1)}>+</button>
// <hr />
// <MultiListTest />
// </div>

const view1 = (state, actions) => (<RadioListTest />);

app(state, actions, view1, document.body);
