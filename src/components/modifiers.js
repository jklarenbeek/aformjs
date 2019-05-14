/* eslint-disable arrow-body-style */
/* eslint-disable no-mixed-operators */

// #region bulma.io modifier types
export const colorModifier = { // oneOf
  primary: 'is-primary',
  secondary: 'is-secondary',
  info: 'is-info',
  link: 'is-link',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  white: 'is-white',
  light: 'is-light',
  dark: 'is-dark',
  black: 'is-black',
  text: 'is-text',
};

export const textModifier = { // oneOf
  white: 'has-text-white',
  black: 'has-text-black',
  light: 'has-text-light',
  dark: 'has-text-dark',
  primary: 'has-text-primary',
  info: 'has-text-info',
  link: 'has-text-link',
  success: 'has-text-success',
  warning: 'has-text-warning',
  danger: 'has-text-danger',
  blackBis: 'has-text-black-bis',
  blackTer: 'has-text-black-ter',
  greyDarker: 'has-text-grey-darker',
  greyDark: 'has-text-grey-dark',
  grey: 'has-text-grey',
  greyLight: 'has-text-grey-light',
  greyLighter: 'has-text-grey-lighter',
  whiteTer: 'has-text-white-ter',
  whiteBis: 'has-text-white-bis',
};

export const backModifier = { // oneOf
  white: 'has-background-white',
  black: 'has-background-black',
  light: 'has-background-light',
  dark: 'has-background-dark',
  primary: 'has-background-primary',
  info: 'has-background-info',
  link: 'has-background-link',
  success: 'has-background-success',
  warning: 'has-background-warning',
  danger: 'has-background-danger',
  blackBis: 'has-background-black-bis',
  blackTer: 'has-background-black-ter',
  greyDarker: 'has-background-grey-darker',
  greyDark: 'has-background-grey-dark',
  grey: 'has-background-grey',
  greyLight: 'has-background-grey-light',
  greyLighter: 'has-background-grey-lighter',
  whiteTer: 'has-background-white-ter',
  whiteBis: 'has-background-white-bis',
};

export const styleModifier = { // anyOf
  thin: 'is-thin',
  rounded: 'is-rounded',
  outlined: 'is-outlined',
  inverted: 'is-inverted',
  solid: 'is-solid',
  borderless: 'is-borderless',
  circle: 'is-circle',
  square: 'is-square',
  complement: 'is-complement',
};

export const sizeModifier = { // oneOf
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

export const displayModifier = { // oneOf
  fullwidth: 'is-fullwidth',
};

export const stateModifier = { // anyOf
  hovered: 'is-hovered',
  focused: 'is-focused',
  active: 'is-active',
  loading: 'is-loading',
};

export const alignModifier = { // oneOf
  left: 'is-left',
  center: 'is-center',
  right: 'is-right',
};

export const inputModifier = { // oneOf
  static: 'is-static',
};

export const selectModifier = { // oneOf
  multiple: 'is-multiple',
  default: null,
};

export const helperModifier = {
  clearfix: 'is-clearfix',
  pullLeft: 'is-pulled-left',
  pullRight: 'is-pulled-right',
  marginLess: 'is-marginless',
  paddingLess: 'is-paddingless',
  overlay: 'is-overlay',
  clipped: 'is-clipped',
  radiusless: 'is-radiusless',
  shadowless: 'is-shadowless',
  unselectedable: 'is-unselectable',
  invisible: 'is-invisible',
  srOnly: 'is-sr-only',
};

export const responsiveModifiers = {
  block: 'is-block',
  flex: 'is-flex',
  inline: 'is-inline',
  'inline-block': 'is-inline-block',
  'inline-flex': 'is-inline-flex',
};

export const allModifiers = { // anyOf
  ...colorModifier,
  ...styleModifier,
  ...sizeModifier,
  ...displayModifier,
  ...stateModifier,
  ...alignModifier,
  ...inputModifier,
  ...selectModifier,
  ...helperModifier,
  ...responsiveModifiers,
};

export function parseModifier(modifiers, modifierType = allModifiers, one = false) {
  if (!modifiers) return undefined;

  // array of modifiers
  if (modifiers.pop) {
    if (one) {
      for (let i = 0; i < modifiers.length; ++i) {
        const val = parseModifier(modifiers[i], modifierType, true);
        if (val) return val;
      }
    }
    else {
      const arr = [];
      for (let i = 0; i < modifiers.length; ++i) {
        const val = parseModifier(modifiers[i], modifierType, false);
        if (val) arr.push(val);
      }
      if (arr.length >= 0) return arr;
    }
    return undefined;
  }
  // single modifier
  else {
    // validate existance on key
    if (modifierType.hasOwnProperty(modifiers)) {
      return (modifierType[modifiers]);
    }
    // validate existance of value
    for (const i in modifierType) {
      if (modifierType.hasOwnProperty(i)) {
        if (modifierType[i] === modifiers) return modifiers;
      }
    }
  }
  // found nothing
  return undefined;
}

export const parseColorModifier = modifier => (parseModifier(modifier, colorModifier, true));
export const parseTextModifier = modifier => (parseModifier(modifier, textModifier, true));
export const parseBackModifier = modifier => (parseModifier(modifier, backModifier, true));
export const parseStyleModifier = modifier => (parseModifier(modifier, styleModifier, false));
export const parseSizeModifier = modifier => (parseModifier(modifier, sizeModifier, true));
export const parseAlignModifier = modifier => (parseModifier(modifier, alignModifier, true));
export const parseDisplayModifier = modifier => (parseModifier(modifier, displayModifier, true));
export const parseStateModifier = modifier => (parseModifier(modifier, stateModifier, false));

export const colorModifierValidate = (validates, required) => (
  (validates === false && colorModifier.danger)
  || validates === true && colorModifier.success
  || (validates === undefined && required && colorModifier.info));


// #endregion
