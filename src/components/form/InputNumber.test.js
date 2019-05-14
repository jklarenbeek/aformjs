/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from 'futilsjs';

import {
  colorModifier,
  styleModifier,
  sizeModifier,
} from 'aformjs/components/modifiers';

import { InputNumber } from './InputNumber';

import { Field } from './Field';

export default (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># Input Number Control</p>
      <p class='subtitle'>The number input and its variations</p>
      <Field schema={ { title: 'Number input' } }><InputNumber schema={{ format: 'number' }} /></Field>
      <Field schema={ { title: 'Range input' } }><InputNumber schema={{ format: 'range' }} /></Field>
      <Field schema={ { title: 'Date input' } }><InputNumber schema={{ format: 'date' }} /></Field>
      <Field schema={ { title: 'DateTime input' } }><InputNumber schema={{ format: 'datetime' }} /></Field>
      <Field schema={ { title: 'DateTime-Local input' } }><InputNumber schema={{ format: 'datetime-local' }} /></Field>
      <Field schema={ { title: 'Month input' } }><InputNumber schema={{ format: 'month' }} /></Field>
      <Field schema={ { title: 'Week input' } }><InputNumber schema={{ format: 'week' }} /></Field>
      <Field schema={ { title: 'Time input' } }><InputNumber schema={{ format: 'time' }} /></Field>
      <p class='subtitle'># Colors</p>
      <Field><InputNumber schema={{ placeholder: 'Primary input' }} layout={{ color: colorModifier.primary }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Info input' }} layout={{ color: colorModifier.info }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Success input' }} layout={{ color: colorModifier.success }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Warning input' }} layout={{ color: colorModifier.warning }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Danger input' }} layout={{ color: colorModifier.danger }} /></Field>
      <p class='subtitle'># Sizes</p>
      <Field><InputNumber schema={{ placeholder: 'Small input' }} layout={{ size: sizeModifier.small }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Normal input' }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Medium input' }} layout={{ size: sizeModifier.medium }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Large input' }} layout={{ size: sizeModifier.large }} iconLeft={{ name: 'envelope' }} /></Field>
      <p class='subtitle'># Styles</p>
      <Field><InputNumber schema={{ placeholder: 'Rounded input' }} layout={{ styles: styleModifier.rounded }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Inverted input' }} layout={{ color: colorModifier.primary, styles: styleModifier.inverted }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Outlined input' }} layout={{ color: colorModifier.primary, styles: styleModifier.outlined }} /></Field>
      <p class='subtitle'># States</p>
      <Field><InputNumber schema={{ placeholder: 'Small loading input' }} layout={{ loading: true, size: sizeModifier.small }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Normal loading input' }} layout={{ loading: true }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Medium loading input' }} layout={{ loading: true, size: sizeModifier.medium }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Large loading input' }} layout={{ loading: true, size: sizeModifier.large }} /></Field>
      <Field><InputNumber schema={{ placeholder: 'Disabled input' }} disabled={true} /></Field>
      <Field><InputNumber schema={{ readOnly: true }} $value='42' /></Field>
      <Field><InputNumber layout={{ isStatic: true }} $value='108' /></Field>
    </div>
  </form>);
};
