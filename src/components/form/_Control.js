/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* @jsx h */
import { h, h as render } from 'futilsjs';

import { parseSizeModifier, alignModifier, stateModifier } from 'hyperforms/components/modifiers';
import { IconBox, Icon } from 'hyperforms/components/elements/Icon';
import { sizeModifier } from '../modifiers';

/**
 * The Control component will not be exported since all its possible child components are already defined here and we do not want confusion.
 * However, you can set its configuration with the exported configControl object.
 * @param {!Array} props
 * @param {*} children
 */

const configControl = {
  controlClass: 'control',
  hasIconLeftClass: 'has-icons-left',
  hasIconRightClass: 'has-icons-right',
  isExpanded: 'is-expanded',
};

export function resolveControlIconSize(size) {
  switch (size) {
    case sizeModifier.small:
      return size;
    case sizeModifier.medium:
      return sizeModifier.small;
    case sizeModifier.large:
      return sizeModifier.large;
    default:
      return sizeModifier.small;
  }

}
export function ControlEx({ tagName, $id, layout = {}, iconLeft, iconRight, config = configControl }, children) {

  const iconsize = resolveControlIconSize(layout.size);

  const leftNode = iconLeft && (<IconBox align={ alignModifier.left } size={ iconsize }><Icon { ...iconLeft } /></IconBox>);
  const rightNode = iconRight && iconRight !== true && (<IconBox align={ alignModifier.right } size={ iconsize }><Icon { ...iconRight } /></IconBox>);

  const controlcls = [
    leftNode && config.hasIconLeftClass,
    rightNode && config.hasIconRightClass,
    layout.isExpanded && config.isExpanded,
    layout.loading && parseSizeModifier(layout.size),
    layout.loading && stateModifier.loading,
  ];

  const attr = {};
  if ($id) attr['id'] = $id;
  attr['class'] = [config.controlClass, controlcls];
  const node = render(tagName, attr, children, leftNode, rightNode);
  return node;
}
ControlEx.config = configControl;

export function Control({ $id, layout, iconLeft, iconRight, config }, children) {
  return (<ControlEx
    tagName='div'
    $id={ $id }
    layout={ layout }
    iconLeft={ iconLeft }
    iconRight={ iconRight }
    config={ config }>
      { children }
    </ControlEx>);
}
Control.config = configControl;
