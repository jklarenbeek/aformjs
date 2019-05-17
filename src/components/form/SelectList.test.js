/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
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

import { SelectList } from './SelectList';
import { Field } from './Field';
import { HelpDanger } from './Help';

import { testData } from './List/index.testdata';

export default (state, action) => {
  return (<form class='container'>
    <SelectList options={ testData.arraySizes } />
  </form>);
};

const a = (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># Select List Control</p>
      <p class='subtitle'>The browser built-in select dropdown, styled accordingly</p>
      <div class='notification'>
      <Field schema={{ title: 'Simple' }}><SelectList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Grouped' }}><SelectList schema={{ placeholder: 'Select a unit' }} options={ testData.arrayUnits } groups={ testData.arrayUnitsGroup } /></Field>
      <Field schema={{ title: 'Error' }}><SelectList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ color: colorModifier.danger }} /><HelpDanger>Something went wrong with this field</HelpDanger></Field>
      <Field schema={{ title: 'Rounded' }}><SelectList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ styles: styleModifier.rounded }} /></Field>
      <Field schema={{ title: 'Required' }}><SelectList schema={{ required: true, placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Read Only' }}><SelectList schema={{ readOnly: true, placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Disabled' }}><SelectList schema={{ placeholder: 'Select a size' }} disabled={true} /></Field>
      <Field schema={{ title: 'Disabled Option' }}><SelectList schema={{ placeholder: 'Select a fungus group' }} options={ testData.arrayFungi2 } /></Field>
      <Field schema={{ title: 'Expanded' }}><SelectList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ isFullWidth: true }} /></Field>
      </div>
      <h3># Data Structures</h3>
      <div class='notification'>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Array of primitives' }}><SelectList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Array of records' }}><SelectList options={ testData.arrayColors } /></Field>
      <Field schema={{ title: 'Array of grouped records' }}><SelectList options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } selected={ testData.arrayUnitsSelected } /></Field>
      <Field schema={{ title: 'Array of key/primitive tuples' }}><SelectList options={ testData.tuplePlant1 } selected={ testData.tuplePlant1Selected } /></Field>
      <Field schema={{ title: 'Array of key/record tuples' }}><SelectList options={ testData.tuplePlant2 } selected={ testData.tuplePlant2Selected } /></Field>
      <Field schema={{ title: 'Array of group/array tuples with primitives' }}><SelectList options={ testData.tuplePlantGroups1 } selected={ testData.tuplePlantGroups1Selected } /></Field>
      <Field schema={{ title: 'Array of group/array tuples with records' }}><SelectList options={ testData.tuplePlantGroups2 } selected={ testData.tuplePlantGroups2Selected } /></Field>
      <Field schema={{ title: 'Array of group/array tuples with more tuples' }}><SelectList options={ testData.tuplePlantGroups3 } selected={ testData.tuplePlantGroups3Selected } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Object of key/value primitives' }}><SelectList options={ testData.objectPlant1 } selected={ testData.objectPlant1Selected } /></Field>
      <Field schema={{ title: 'Object of key/value records' }}><SelectList options={ testData.objectPlant2 } selected={ testData.objectPlant2Selected } /></Field>
      <Field schema={{ title: 'Object of key/value grouped records' }}><SelectList options={ testData.objectPlant3 } groups={ testData.objectPlant3Groups } selected={ testData.objectPlant3Selected } /></Field>
      <Field schema={{ title: 'Object of group/array primitives' }}><SelectList options={ testData.objectPlantGroups1 } selected={ testData.objectPlantGroups1Selected } /></Field>
      <Field schema={{ title: 'Object of group/array records' }}><SelectList options={ testData.objectPlantGroups2 } selected={ testData.objectPlantGroups2Selected } /></Field>
      <Field schema={{ title: 'Object of group/array with key/value tuples' }}><SelectList options={ testData.objectPlantGroups3 } selected={ testData.objectPlantGroups3Selected } /></Field>
      </div>
      </div>
      </div>
      <h3># Colors</h3>
      <div class='notification'>
      <Field><SelectList options={ testData.arrayColors } layout={{ color: colorModifier.primary, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arrayColors } selected={ testData.arrayColors[1] } layout={{ color: colorModifier.info, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arrayColors } selected={ testData.arrayColors[2] } layout={{ color: colorModifier.success, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arrayColors } selected={ testData.arrayColors[3] } layout={{ color: colorModifier.warning, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arrayColors } selected={ testData.arrayColors[4] } layout={{ color: colorModifier.danger, isFullWidth: true }} /></Field>
      </div>
      <h3># Sizes</h3>
      <div class='notification'>
      <Field><SelectList options={ testData.arraySizes } layout={{ size: sizeModifier.small, isFullWidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[1] } layout={{ isFullWidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[2] } layout={{ size: sizeModifier.medium, isFullWidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[3] } layout={{ size: sizeModifier.large, isFullWidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      </div>
      <h3 class='subtitle'># Loading</h3>
      <div class='notification'>
      <Field><SelectList options={ testData.arraySizes } layout={{ loading: true, size: sizeModifier.small, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[1] } layout={{ loading: true, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[2] } layout={{ loading: true, size: sizeModifier.medium, isFullWidth: true }} /></Field>
      <Field><SelectList options={ testData.arraySizes } selected={ testData.arraySizes[3] } layout={{ loading: true, size: sizeModifier.large, isFullWidth: true }} /></Field>
      </div>
    </div>
  </form>);
};
