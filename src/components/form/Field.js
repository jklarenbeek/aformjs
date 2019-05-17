/* eslint-disable padded-blocks */
/* eslint-disable import/prefer-default-export */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from '__futilsjs';

import { sizeModifier } from 'aformjs/components/modifiers';

export const fieldModifier = {
  hasAddOns: 'has-addons',
  isExpanded: 'is-expanded',
  isGrouped: 'is-grouped',
  isHorizontal: 'is-horizontal',
};


const configField = {
  fieldClass: 'field',
  labelClass: 'label',
  fieldLabelClass: 'field-label',
  fieldBodyClass: 'field-body',
  sizeModifier: sizeModifier.normal,
  fieldExpandedClass: 'is-expanded',
  fieldHorizontalClass: 'is-horizontal',
};

export function NormalField(
  {
    $id,
    for: forInput,
    schema = { title: null },
    layout = { },
    help = { class: null, content: null },
    config = configField.config,
  },
  children) {
  const titleNode = schema.title
    ? (<label
        class={ config.labelClass }
        for={ forInput }>
        { schema.title }
      </label>)
    : null;

  const helpNode = help.content
    ? (<Help
        class={ help.class }>
        { help.content }
      </Help>)
    : null;

  return (<div
      id={ $id }
      class={ config.fieldClass }
      role={ (layout.role === true && config.role) || layout.role }>
      { titleNode }
      { children }
      { helpNode }
    </div>);
}

export function HorizontalField(
  {
    $id,
    for: forInput,
    schema = { title: null },
    layout = {},
    help = { class: null, content: null },
    config = configField,
  },
  children) {

  const titleNode = (<div
    class={ [config.fieldLabelClass, layout.sizeModifier || config.sizeModifier] }>
    { schema.title && (<label
      class={ config.labelClass }
      for={ forInput }>
      { schema.title }
    </label>) }
  </div>);

  const helpNode = help.content
    ? (<Help
        class={ help.helpClass }>
        { help.content }
      </Help>)
    : null;

  return (<div
      id={ $id }
      class={ [config.fieldClass, config.fieldHorizontalClass] }
      role={ (layout.role === true && config.role) || layout.role }>
      { titleNode }
      <div class={ config.fieldBodyClass }>
        { children }
      </div>
      { helpNode }
    </div>);
}

export function Field(props, children) {
  const { $id, schema, layout = {}, config = configField } = props;

  if (!schema) {
    return (<div
      id={ $id }
      class={ config.fieldClass }
      role={ (layout.role === true && config.role) || layout.role }>
      { children }
    </div>);
  }

  return ((layout.isHorizontal || config.isHorizontal)
    ? <HorizontalField { ...props } config={ config }>{ children }</HorizontalField>
    : <NormalField { ...props } config={ config }>{ children }</NormalField>);
}
Field.config = configField;
