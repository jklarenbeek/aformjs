/* @jsx h */
import { h } from '__futilsjs';

import { colorModifier } from 'aformjs/components/modifiers';

export const configHelp = { helpClass: 'help' };

export function Help({ class: classList, config = configHelp }, children) {
  return (<p class={ [config.helpClass, classList] }>
    { children }
  </p>);
}

export function HelpPrimary({ class: classList = [], config = configHelp }, children) {
  return Help({ class: [...classList, colorModifier.primary], config }, children);
}

export function HelpInfo({ class: classList = [], config = configHelp }, children) {
  return Help({ class: [...classList, colorModifier.info], config }, children);
}

export function HelpSuccess({ class: classList = [], config = configHelp }, children) {
  return Help({ class: [...classList, colorModifier.success], config }, children);
}

export function HelpWarning({ class: classList = [], config = configHelp }, children) {
  return Help({ class: [...classList, colorModifier.warning], config }, children);
}

export function HelpDanger({ class: classList = [], config = configHelp }, children) {
  return Help({ class: [...classList, colorModifier.danger], config }, children);
}
