/* eslint-disable object-curly-newline */
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

import { MultiList } from './MultiList';

import { Field } from './Field';
import { HelpDanger } from './Help';

import testData from './List/data.test';

const a = (state, action) => {
  const r = (<form class='container'>
    <MultiList options={ testData.objectPlant1 } selected={ testData.objectPlant1Multiple } />
  </form>);
  return r;
};


export default (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># Multi Select List Control</p>
      <p class='subtitle'>The browser built-in select dropdown, styled accordingly</p>
      <div class='notification'>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Simple' }}><MultiList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Grouped' }}><MultiList options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } selected={ testData.arrayUnitsSelected } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Error' }}><MultiList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ color: colorModifier.danger }} /><HelpDanger>Something went wrong with this field</HelpDanger></Field>
      <Field schema={{ title: 'Rounded' }}><MultiList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ styles: styleModifier.rounded }} /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Required' }}><MultiList schema={{ required: true, placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Read Only' }}><MultiList schema={{ readOnly: true, placeholder: 'Select a size' }} options={ testData.arraySizes } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Disabled' }}><MultiList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } disabled={true} /></Field>
      <Field schema={{ title: 'Disabled Option' }}><MultiList schema={{ placeholder: 'Select a fungus group' }} options={ testData.arrayFungi2 } /></Field>
      </div>
      </div>
      <Field schema={{ title: 'Expanded' }}><MultiList schema={{ placeholder: 'Select a size' }} options={ testData.arraySizes } layout={{ fullwidth: true }} /></Field>
      </div>
      <h3># Data Structures</h3>
      <div class='notification'>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Array of primitives' }}><MultiList options={ testData.arraySizes } /></Field>
      <Field schema={{ title: 'Array of records' }}><MultiList options={ testData.arrayColors } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Array of grouped records' }}><MultiList options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } selected={ testData.arrayUnitsSelected } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Array of key/primitive tuples' }}><MultiList options={ testData.tuplePlant1 } selected={ testData.tuplePlant1Selected } /></Field>
      <Field schema={{ title: 'Array of key/record tuples' }}><MultiList options={ testData.tuplePlant2 } selected={ testData.tuplePlant2Selected } /></Field>
      </div>
      </div>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Array of group/array tuples with primitives' }}><MultiList options={ testData.tuplePlantGroups1 } selected={ testData.tuplePlantGroups1Selected } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Array of group/array tuples with records' }}><MultiList options={ testData.tuplePlantGroups2 } selected={ testData.tuplePlantGroups2Selected } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Array of group/array tuples with more tuples' }}><MultiList options={ testData.tuplePlantGroups3 } selected={ testData.tuplePlantGroups3Selected } /></Field>
      </div>
      </div>
      </div>
      <div class='notification'>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Object of key/value primitives' }}><MultiList options={ testData.objectPlant1 } selected={ testData.objectPlant1Multiple } /></Field>
      <Field schema={{ title: 'Object of key/value records' }}><MultiList options={ testData.objectPlant2 } selected={ testData.objectPlant2Multiple } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Object of key/value grouped records' }}><MultiList options={ testData.objectPlant3 } groups={ testData.objectPlant3Groups } selected={ testData.objectPlant3Multiple } /></Field>
      </div>
      </div>
      <div class='columns'>
      <div class='column'>
      <Field schema={{ title: 'Object of group/array primitives' }}><MultiList options={ testData.objectPlantGroups1 } selected={ testData.objectPlantGroups1Multiple } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Object of group/array records' }}><MultiList options={ testData.objectPlantGroups2 } selected={ testData.objectPlantGroups2Multiple } /></Field>
      </div>
      <div class='column'>
      <Field schema={{ title: 'Object of group/array with key/value tuples' }}><MultiList options={ testData.objectPlantGroups3 } selected={ testData.objectPlantGroups3Multiple } /></Field>
      </div>
      </div>
      </div>
      <h3># Colors</h3>
      <div class='notification'>
      <Field><MultiList options={ testData.arrayColors } layout={{ rows: 2, color: colorModifier.primary, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arrayColors } selected={ testData.arrayColors[1] } layout={{ rows: 2, color: colorModifier.info, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arrayColors } selected={ testData.arrayColors[2] } layout={{ rows: 2, color: colorModifier.success, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arrayColors } selected={ testData.arrayColors[3] } layout={{ rows: 2, color: colorModifier.warning, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arrayColors } selected={ testData.arrayColors[4] } layout={{ rows: 2, color: colorModifier.danger, fullwidth: true }} /></Field>
      </div>
      <h3># Sizes</h3>
      <div class='notification'>
      <Field><MultiList options={ testData.arraySizes } layout={{ rows: 2, size: sizeModifier.small, fullwidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[1] } layout={{ rows: 2, fullwidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[2] } layout={{ rows: 2, size: sizeModifier.medium, fullwidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[3] } layout={{ rows: 2, size: sizeModifier.large, fullwidth: true }} iconLeft={{ name: 'envelope' }} /></Field>
      </div>
      <h3 class='subtitle'># Loading</h3>
      <div class='notification'>
      <Field><MultiList options={ testData.arraySizes } layout={{ rows: 2, loading: true, size: sizeModifier.small, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[1] } layout={{ rows: 2, loading: true, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[2] } layout={{ rows: 2, loading: true, size: sizeModifier.medium, fullwidth: true }} /></Field>
      <Field><MultiList options={ testData.arraySizes } selected={ testData.arraySizes[3] } layout={{ rows: 2, loading: true, size: sizeModifier.large, fullwidth: true }} /></Field>
      </div>
    </div>
  </form>);
};
