/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h } from 'futilsjs';

import {
  parseColorModifier,
  parseTextModifier,
  parseBackModifier,
  parseSizeModifier,
  parseDisplayModifier,
  parseStyleModifier,
  parseStateModifier,
} from 'aformjs/components/modifiers';
import { Control } from './_Control';
import { Field } from './Field';

const configAddonField = {
  ...Field.config,
  ...Control.config,
  fieldClass: ['field', 'has-addons'],
  staticAddonClass: ['button', 'is-static'],
};

export function AddonField({ $id, for: forInput, schema = { title: null }, layout = { class: [] }, help = { class: null, content: null }, role, config = configAddonField }, children) {
  return Field({ $id, for: forInput, schema, layout, help, role, config }, children);
}
AddonField.config = configAddonField;

export function StaticAddon({ layout = {}, iconLeft, iconRight, config = configAddonField }, children) {
  const style = [
    parseColorModifier(layout.color),
    parseTextModifier(layout.textColor),
    parseBackModifier(layout.backColor),
    parseSizeModifier(layout.size),
    parseDisplayModifier(layout.display),
    parseStyleModifier(layout.styles),
    parseStateModifier(layout.states),
  ];

  return (<Control layout={ layout } iconLeft={ iconLeft } iconRight={ iconRight } config={ config }>
    <a
      class={ [config.staticAddonClass, style] }>
        { children }
    </a>
  </Control>);
}
