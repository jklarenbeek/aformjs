/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import {
  parseColorModifier,
  parseStyleModifier,
  parseSizeModifier,
  inputModifier,
} from 'hyperforms/components/modifiers';
import { Control } from './_Control';

const configInputArea = {
  ...Control.config,
  textAreaClass: 'textarea',
};

export function InputArea({ $id, $name, schema = {}, layout = { }, readOnly, disabled, oninput, onkeyup, onchange, onfocus, onblur, config = configInputArea }, children) {

  const inputcls = [
    parseColorModifier(layout.color),
    parseSizeModifier(layout.size),
    parseStyleModifier(layout.styles),
    layout.isStatic && inputModifier.static,
  ];

  return (<Control $id={ $id } layout={ layout } config={ config }>
      <textarea
        name={ $name }
        class={ [config.textAreaClass, inputcls] }
        placeholder={ schema.placeholder }
        oninput={ oninput }
        onkeyup={ onkeyup }
        onchange={ onchange }
        onfocus={ onfocus }
        onblur={ onblur }
        readonly={ readOnly }
        disabled={ disabled}>
        { children }
      </textarea>
    </Control>);
}
