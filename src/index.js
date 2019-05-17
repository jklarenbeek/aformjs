/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/** @jsx h */
import './sass/bulma.sass';


import { h, app } from '__futilsjs';

const schema = {
  '$id': 'select-string-basic',
  'type': 'string',
  'title': 'Available currencies',
  'enum': ['₿', '$', '£', '€', '¥', '₹'],
  'nullable': false,
  'required': true,
  'options': {
    'template': ['&#8383; (Bitcoin)', '$ (Dollar)', '&pound; (Pound)', '&euro; (Euro)', '&yen; (Yen)', '&#8377; (Rupee)'],
  },
  'layout': {
    'leftIcon': 'envelope',
    'placeholder': 'Make a choice here...',
  },
  'errors': {
    'required': 'You MUST choose.',
  },
};

const rootState = {
  schema: {},
  value: undefined,
};

const rootActions = {
  'parseSchema': (schema) => {
    console.log('loading schema:', schema.title);
    return ({ schema });
  },
  'setValue': value => ({ value }),
  'isValid': () => ({ isValid: false }),
};

const rootView = (state, actions) => (
<main>
  <SelectField></SelectField>
</main>);

const main = app(
  rootState,
  rootActions,
  rootView,
  document.body);
main.parseSchema(schema);

console.log(main);
