/* eslint-disable object-curly-newline */
/* eslint-disable no-unreachable */
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

import { RadioList } from './RadioList';
import { CheckList } from './CheckList';
import { SwitchList } from './SwitchList';

import { Field, HorizontalField } from './Field';

import { testData } from './List/index.testdata';
import { ListControl } from './List';

//

function ListMain({ control }) {
  const ControlType = control;
  return (<div class="container">
      <p class='title'># Radio List Control</p>
      <p class='subtitle'>The radiolist grouped button control, styled accordingly</p>
      <div class='notification'>
        <Field schema={{ title: 'Simple' }}><ControlType options={ testData.arraySizes } /></Field>
        <Field schema={{ title: 'Grouped' }}><ControlType options={ testData.arrayUnits } groups={ testData.arrayUnitsGroups } /></Field>
        <Field schema={{ title: 'Validate (Required)' }}>
          <ControlType schema={{ required: true }} options={ testData.arraySizes } errors={{ required: 'This field is required!' }} />
        </Field>
        <Field schema={{ title: 'Read Only' }}><ControlType schema={{ readOnly: true }} options={ testData.arraySizes } selected={ 'Medium' } /></Field>
        <Field schema={{ title: 'Disabled' }}><ControlType options={ testData.arraySizes } selected={ 'Large' } disabled={true} /></Field>
        <Field schema={{ title: 'Disabled and ReadOnly Options' }}><ControlType options={ testData.arrayFungi2 } layout={ { vertical: true } } /></Field>
      </div>
    </div>);
}

function ListStyles({ control }) {
  const ControlType = control;
  return (<div class="container">
      <h3># Styles</h3>
      <div class='notification'>
      <Field schema={{ title: 'Expanded' }}><ControlType options={ testData.arraySizes } layout={{ fullwidth: true }} optionLayout={{ vertical: true }} /></Field>
      <Field schema={{ title: 'Items Rounded' }}><ControlType options={ testData.arraySizes } layout={{ styles: styleModifier.rounded }} /></Field>
      </div>
    </div>);
}

function ListColors({ control, title, button, outlined, inverted }) {
  const ControlType = control;
  const selected = ['primary', 'secondary', 'link', 'info', 'success', 'warning', 'danger'];

  return (<p class="container">
      <div class='notification'>
      <h4>## { title }</h4>
      <HorizontalField schema={ { title: 'Plain' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors }
          layout={{ fullwidth: true }}
          optionLayout={{ button, outlined, inverted }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Border Circled or Squared' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ selected }
          layout={{ color: colorModifier.primary, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, circle: true, square: true }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Borderless' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors[0] }
          layout={{ color: colorModifier.secondary, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, borderless: true }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Circled Complement' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors[3] }
          layout={{ color: colorModifier.link, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, complement: true, circle: true }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Solid Bullet' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors[2] }
          layout={{ color: colorModifier.info, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, color: true, solid: true }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Solid Bullit, Circled or Squared' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors[3] }
          layout={{ color: colorModifier.success, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, circle: true, square: true, solid: true }} />
      </HorizontalField>
      <HorizontalField schema={ { title: 'Solid Bullit, Complement' }}>
        <ControlType
          options={ testData.arrayColors }
          selected={ testData.arrayColors[3] }
          layout={{ color: colorModifier.warning, fullwidth: true }}
          optionLayout={{ button, outlined, inverted, complement: true, solid: true }} />
      </HorizontalField>
      </div>
    </p>);
}

function ListColorsAll({ control }) {
  return (<div class='container'>
  <h3># Colors and Option Types</h3>
  <ListColors control={ control } title={ 'Normal List Items' } button={ false } outlined={ false } inverted={ false } />
  <ListColors control={ control } title={ 'Button List Items' } button={ true } outlined={ false } inverted={ false } />
  <ListColors control={ control } title={ 'Inverted List Items' } button={ true } outlined={ false } inverted={ true } />
  <ListColors control={ control } title={ 'Outlined List Items' } button={ false } outlined={ true } inverted={ false } />
  <ListColors control={ control } title={ 'Inverted Outlined List Items' } button={ false } outlined={ true } inverted={ false } />
  </div>);
}

function ListTest({ control }) {
  const ControlType = control;
  const r = (<form class='container'>
    <ControlType
      options={ testData.arrayColors }
      selected={ testData.arrayColors[2] }
      layout={{ color: colorModifier.danger, fullwidth: true }}
      optionLayout={{ vertical: true, solid: true }} />
  </form>);
  return r;
}

// https://css-tricks.com/emoji-toggles/
export default function (state = {}, action) {
  const control = state.control || CheckList;
  // return (<ListColorsAll control={ control } />);

  return (<form class='container'>
    <div class='content'>
      <ListMain control={ control } />
      <ListStyles control={ control } />
      <ListColorsAll control={ control } />
    </div>
  </form>);
}
