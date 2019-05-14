/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import {
  parseColorModifier,
  parseTextModifier,
  parseBackModifier,
  parseStyleModifier,
  parseSizeModifier,
  parseStateModifier,
  displayModifier,
  inputModifier,
} from 'aformjs/components/modifiers';
import { Control } from './_Control.js';
import { stateModifier } from '../modifiers.js';

const configFormButton = {
  ...Control.config,
  buttonClass: 'button',
  buttonsClass: 'buttons',
};

export function FormButton({ type = 'button', $id, $name, $value, disabled, layout = {}, config = configFormButton }, children) {

  const btncls = [
    parseColorModifier(layout.color),
    parseTextModifier(layout.textColor),
    parseBackModifier(layout.backColor),
    parseSizeModifier(layout.size),
    parseStyleModifier(layout.styles),
    parseStateModifier(layout.states),
    layout.fullwidth && displayModifier.fullwidth,
    layout.isStatic && inputModifier.static,
    layout.loading && stateModifier.loading,
  ];

  return (<Control layout={ { ...layout, loading: false } } config={ config }>
    <button
      type={ type }
      id={ $id }
      name={ $name }
      value={ $value }
      class={ [config.buttonClass, btncls] }
      disabled={ disabled }>
        { children }
    </button>
  </Control>);
}
FormButton.config = configFormButton;

export function ResetButton({ $id, $name, $value, disabled, layout, config }, children) {
  return (<FormButton type='reset' $id={ $id } $name={ $name } $value={ $value } disabled={ disabled } layout={ layout } config={ config }>{ children }</FormButton>);
}

export function SubmitButton({ $id, $name, $value, disabled, layout, config }, children) {
  return (<FormButton type='submit' $id={ $id } $name={ $name } $value={ $value } disabled={ disabled } layout={ layout } config={ config }>{ children }</FormButton>);
}
