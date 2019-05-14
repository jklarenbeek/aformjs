/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from 'futilsjs';

import {
  colorModifier,
  styleModifier,
  sizeModifier,
} from 'hyperforms/components/modifiers';

import { CheckList } from './CheckList';

import { Field } from './Field';
import { HelpDanger } from './Help';

import { testData } from './List/index.testdata.js';

//

const a = (state, action) => {
  const r = (<form class='container'>
    <CheckList schema={{ placeholder: 'Select a fungus group' }} options={ testData.arrayFungi2 } />
  </form>);
  return r;
};

export default (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># CheckBox List Control</p>
      <p class='subtitle'>The CheckList grouped button control, styled accordingly</p>
      <div class='notification'>
      <Field schema={{ title: 'Simple' }}><CheckList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Grouped' }}><CheckList options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } /></Field>
      <Field schema={{ title: 'Error' }}><CheckList options={ testData.arraySizes } layout={{ color: colorModifier.danger }} /><HelpDanger>Something went wrong with this field</HelpDanger></Field>
      <Field schema={{ title: 'Rounded' }}><CheckList options={ testData.arraySizes } layout={{ styles: styleModifier.rounded }} /></Field>
      <Field schema={{ title: 'Required' }}><CheckList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Read Only' }}><CheckList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Disabled' }}><CheckList options={ testData.arraySizes } disabled={true} /></Field>
      <Field schema={{ title: 'Disabled Option' }}><CheckList options={ testData.arrayFungi2 } optionLayout={{ fullwidth: true }}/></Field>
      <Field schema={{ title: 'Expanded' }}><CheckList options={ testData.arraySizes } layout={{ fullwidth: true }} optionLayout={{ fullwidth: true }} /></Field>
      </div>
    </div>
  </form>);
};
