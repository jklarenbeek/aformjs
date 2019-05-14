/* eslint-disable radix */
/* eslint-disable object-curly-newline */
/** @jsx h */
// https://icons8.com/icon/pack/shopping/office
// https://www.flaticon.com/
// https://www.keycdn.com/blog/icon-library
// https://fontawesome.com/how-to-use/on-the-web/other-topics/performance
// https://codepen.io/dbtek/pen/BQbaXr
// https://orioniconlibrary.com/


import { h } from 'futilsjs';
import { collapseToString, collapseCssClass, removeCssClass } from 'hyperforms/core/tools';

import { parseModifier, helperModifier, parseAlignModifier, parseSizeModifier, textModifier, parseTextModifier } from '../modifiers';

const fixedWidth = 'fa-fw';

const iconSets = {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  brands: 'fab',
};

const iconSizes = {
  tiny: 'fa-xs',
  small: 'fa-sm',
  large: 'fa-lg',
  x2: 'fa-2x',
  x3: 'fa-3x',
  x4: 'fa-4x',
  x5: 'fa-5x',
  x6: 'fa-6x',
  x7: 'fa-7x',
  x8: 'fa-8x',
  x9: 'fa-9x',
  x10: 'fa-10x',
};

const iconRotates = {
  deg90: 'fa-rotate-90',
  deg180: 'fa-rotate-180',
  deg270: 'fa-rotate-270',
  flipH: 'fa-flip-horizontal',
  flipV: 'fa-flip-vertical',
};

const iconAnimates = {
  spin: 'fa-spin',
  pulse: 'fa-pulse',
};

const iconAlignes = {
  border: 'fa-border',
  right: 'fa-pull-right',
  left: 'fa-pull-left',
};

const configIcon = {
  iconBoxClass: 'icon',
  iconSet: iconSets.solid,
  iconPrefix: 'fa-',
  iconInverse: 'fa-inverse',
  iconFixedWidth: 'fa-fw',
  iconStack: 'fa-stack',
  iconStack2: 'fa-stack-2x',
  iconStack1: 'fa-stack-1x',
  iconStackText: 'fa-stack-text',
  iconIsFileIcon: 'fa-is-file-icon',
  iconIsFileText: 'fa-is-file-text',
  iconIsCalendarText: 'fa-is-calendar-text',
  iconSize: null,
};

export function IconBox({ size, align, config = configIcon }, children) {
  return (<span class={ [config.iconBoxClass, size, align] }>
    { children }
  </span>);
}


export function Icon({ id, name, iconSet, size, align, animate, rotate, color, inverse, stack1x, stack2x, strong, isFileIcon, fixedWidth, style, config = configIcon }) {
  const arr = [
    iconSet || config.iconSet,
    config.iconPrefix + name,
    inverse && config.iconInverse,
    fixedWidth && config.iconFixedWidth,
    parseTextModifier(color),
    parseAlignModifier(align),
    parseSizeModifier(size),
    animate,
    rotate,
    stack1x && config.iconStack1,
    stack2x && config.iconStack2,
    isFileIcon && config.iconIsFileIcon,
  ];

  if (strong) return (<strong id={ id } class={ arr } style={ style }></strong>);
  return (<i id={ id } class={ arr } style={ style }></i>);
}

Icon.config = configIcon;
Icon.color = textModifier;
Icon.fixedWidth = fixedWidth;
Icon.sets = iconSets;
Icon.sizes = iconSizes;
Icon.rotates = iconRotates;
Icon.animates = iconAnimates;
Icon.alignes = iconAlignes;

export function IconText({ inverse, strong, stack1x, stack2x, isFileText, isCalendarText, config = configIcon }, children) {
  const arr = [
    config.iconStackText,
    stack1x && config.iconStack1,
    stack2x && config.iconStack2,
    inverse && config.iconInverse,
    isFileText && config.iconIsFileText,
    isCalendarText && config.iconIsCalendarText,
  ];

  if (strong) return (<b class={ arr }>{ children }</b>);
  return (<span class={ arr }>{ children }</span>);
}

export function IconStack({ size, config = configIcon }, children) {
  return (<span class={ [config.iconStack, parseModifier(size, iconSizes, true)] }>{ children }</span>);
}

export function IconDeck({ showIndex = 0, size, align, config = configIcon }, children) {
  const child = children && children[Math.abs(parseInt(showIndex) % children.length)];
  return (<IconBox size={ size } align={ align } config={ config }>{ child }</IconBox>);
}
