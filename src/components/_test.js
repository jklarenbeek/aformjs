/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* @jsx h */
import 'aformjs/sass/bulma';

import { h, app } from 'futilsjs';

import { Field } from './form/Field';

import NormalFieldTest from './form/Field.Normal.test';
import HorizontalFieldTest from './form/Field.Horizontal.test';

import InputStringTest from './form/InputString.test';
import InputNumberTest from './form/InputNumber.test';

import SelectListTest from './form/SelectList.test';
import MultiListTest from './form/MultiList.test';
import RadioListTest from './form/RadioList.test';
import CheckListTest from './form/CheckList.test';
import DropDownTest from './form/DropDown.test';

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
