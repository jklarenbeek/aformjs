/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from '__futilsjs';

import {
  colorModifier,
  styleModifier,
  sizeModifier,
} from 'aformjs/components/modifiers';

import { InputString } from './InputString';

import { Field } from './Field';

export default (state, action) => {
  return (<form class='container'>
    <div class='content'>
      <p class='title'># Input String Control</p>
      <p class='subtitle'>The text input and its variations</p>
      <Field><InputString schema={{ format: 'text', placeholder: 'Text input' }} /></Field>
      <Field><InputString schema={{ format: 'date', placeholder: 'Date input' }} /></Field>
      <Field><InputString schema={{ format: 'search', placeholder: 'Search input' }} /></Field>
      <Field><InputString schema={{ format: 'url', placeholder: 'Url input' }} /></Field>
      <Field><InputString schema={{ format: 'tel', placeholder: 'Tel input' }} /></Field>
      <Field><InputString schema={{ format: 'email', placeholder: 'Email input' }} /></Field>
      <Field><InputString schema={{ format: 'password', placeholder: 'Password input' }} /></Field>
      <p class='subtitle'># Colors</p>
      <Field><InputString schema={{ placeholder: 'Primary input' }} layout={{ color: colorModifier.primary }} /></Field>
      <Field><InputString schema={{ placeholder: 'Info input' }} layout={{ color: colorModifier.info }} /></Field>
      <Field><InputString schema={{ placeholder: 'Success input' }} layout={{ color: colorModifier.success }} /></Field>
      <Field><InputString schema={{ placeholder: 'Warning input' }} layout={{ color: colorModifier.warning }} /></Field>
      <Field><InputString schema={{ placeholder: 'Danger input' }} layout={{ color: colorModifier.danger }} /></Field>
      <p class='subtitle'># Sizes</p>
      <Field><InputString schema={{ placeholder: 'Small input' }} layout={{ size: sizeModifier.small }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputString schema={{ placeholder: 'Normal input' }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputString schema={{ placeholder: 'Medium input' }} layout={{ size: sizeModifier.medium }} iconLeft={{ name: 'envelope' }} /></Field>
      <Field><InputString schema={{ placeholder: 'Large input' }} layout={{ size: sizeModifier.large }} iconLeft={{ name: 'envelope' }} /></Field>
      <p class='subtitle'># Styles</p>
      <Field><InputString schema={{ placeholder: 'Rounded input' }} layout={{ styles: styleModifier.rounded }} /></Field>
      <Field><InputString schema={{ placeholder: 'Inverted input' }} layout={{ color: colorModifier.primary, styles: styleModifier.inverted }} /></Field>
      <Field><InputString schema={{ placeholder: 'Outlined input' }} layout={{ color: colorModifier.primary, styles: styleModifier.outlined }} /></Field>
      <p class='subtitle'># States</p>
      <Field><InputString schema={{ placeholder: 'Small loading input' }} layout={{ loading: true, size: sizeModifier.small }} /></Field>
      <Field><InputString schema={{ placeholder: 'Normal loading input' }} layout={{ loading: true }} /></Field>
      <Field><InputString schema={{ placeholder: 'Medium loading input' }} layout={{ loading: true, size: sizeModifier.medium }} /></Field>
      <Field><InputString schema={{ placeholder: 'Large loading input' }} layout={{ loading: true, size: sizeModifier.large }} /></Field>
      <Field><InputString schema={{ placeholder: 'Disabled input' }} disabled={true} /></Field>
      <Field><InputString schema={{ readOnly: true }} $value='This is a ReadOnly input' /></Field>
      <Field><InputString layout={{ isStatic: true }} $value='This is a static input' /></Field>
    </div>
  </form>);
};
