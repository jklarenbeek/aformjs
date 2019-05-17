/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from '__futilsjs';

import {
  colorModifier,
  styleModifier,
  sizeModifier,
} from 'aformjs/components/modifiers';

import { DropDown } from './DropDown';

import { Field } from './Field';
import { HelpDanger } from './Help';

import { testData } from './List/index.testdata';
import { Icon } from '../elements/Icon';

//

const a = (state, action) => {
  const r = (<form class='container'>
    <DropDown schema={{ placeholder: 'Select a fungus group' }} options={ testData.arraySizes } selected={ 'Medium' } iconRight={ { name: 'chevron-circle-down', size: Icon.sizes.large, rotate: Icon.rotates.deg90 } } />
  </form>);
  return r;
};

export default (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># DropDown List Control</p>
      <p class='subtitle'>The dropdown list grouped button control, styled accordingly</p>
      <div class='notification'>
      <Field schema={{ title: 'Simple' }}><DropDown schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Grouped' }}><DropDown schema={{ placeholder: 'Select a unit' }} options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } /></Field>
      <Field schema={{ title: 'Error' }}><DropDown schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ color: colorModifier.danger }} /><HelpDanger>Something went wrong with this field</HelpDanger></Field>
      <Field schema={{ title: 'Rounded' }}><DropDown schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ styles: styleModifier.rounded }} /></Field>
      <Field schema={{ title: 'Required' }}><DropDown schema={{ required: true, placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Read Only' }}><DropDown schema={{ readOnly: true, placeholder: 'Select a size' }} options={ testData.arraySizes } selected={ 'Medium' } /></Field>
      <Field schema={{ title: 'Disabled' }}><DropDown schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } disabled={true} selected={ 'Large' } /></Field>
      <Field schema={{ title: 'Disabled and ReadOnly Options' }}><DropDown schema={{ placeholder: 'Select a fungus group' }} options={ testData.arrayFungi2 } /></Field>
      <Field schema={{ title: 'Expanded' }}><DropDown schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ fullwidth: true }} /></Field>
      </div>
    </div>
  </form>);
};
