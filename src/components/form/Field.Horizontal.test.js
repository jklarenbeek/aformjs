/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from 'futilsjs';

import {
  colorModifier,
  textModifier,
  backModifier,
  stateModifier,
  sizeModifier,
} from 'aformjs/components/modifiers';

import { Icon } from 'aformjs/components/elements/Icon';


import { Field, HorizontalField } from './Field';

import { AddonField, StaticAddon } from './AddonField';

import { InputString } from './InputString';
import { InputArea } from './InputArea';

import { SelectList } from './SelectList';
import { RadioList } from './RadioList';
import { CheckBox } from './CheckBox';

import RenderObject from './List/RenderObject';
import RenderArray from './List/RenderArray';

import { Help, HelpDanger } from './Help';

import { FormButton } from './FormButton';
import { styleModifier } from '../modifiers';


export default (state, action) => (
  <form class="container">
  <div class='content'>
    <p class='title'># Horizontal Form</p>
    <p class='subtitle'>Horizontal controls are available.</p>
    <HorizontalField schema={ { title: 'From' } }>
      <Field>
        <InputString
          schema={ { placeholder: 'Name' } }
          layout={ { color: colorModifier.primary, styles: styleModifier.inverted } }
          iconLeft={ { name: 'user' } }
          iconRight={ { name: 'check' } } />
      </Field>
      <Field>
        <InputString
          schema={ { placeholder: 'Email', value: 'alex@smith.com' } }
          layout={ { color: colorModifier.success } }
          iconLeft={ { name: 'envelope' } }
          iconRight={ { name: 'check' } } />
      </Field>
    </HorizontalField>
    <HorizontalField>
      <Field>
        <AddonField>
          <StaticAddon
            layout={ { textColor: textModifier.white, backColor: backModifier.primary }}
            iconLeft={ { name: 'phone' } }>+44</StaticAddon>
          <InputString $value='+31207772503'
            schema={ { format: 'tel', placeholder: 'Your phone number' } }
            layout={ { textColor: textModifier.white, backColor: backModifier.primary, isExpanded: true } } />
          <SelectList
            options={ ['Home', 'Work', 'Mobile'] }
            layout={ { textColor: textModifier.white, backColor: backModifier.primary }}
            config={ { ...SelectList.config, renderer: RenderArray } } />
        </AddonField>
        <Help>Do not enter the first zero.</Help>
      </Field>
    </HorizontalField>
    <HorizontalField schema={ { title: 'Department' } }>
      <Field>
        <SelectList
          options={ ['Business Development', 'Marketing', 'Sales'] }
          layout={ { color: colorModifier.default } }
          iconLeft={ { name: 'building' } }
          config={ { ...SelectList.config, renderer: RenderArray } }>
        </SelectList>
      </Field>
    </HorizontalField>
    <HorizontalField schema={ { title: 'Already a member?' } }>
      <Field>
        <RadioList $name='question' options={ ['Yes', 'No'] } config={ { ...RadioList.config, renderer: RenderArray } }></RadioList>
      </Field>
    </HorizontalField>
    <HorizontalField schema={ { title: 'Subject' } }>
      <Field>
        <InputString
          schema={ { format: 'text', required: true, placeholder: 'e.g. Partnership Opportunity' } }
          layout={ { color: colorModifier.danger, isExpanded: true } } />
        <HelpDanger>This field is required</HelpDanger>
      </Field>
    </HorizontalField>
    <HorizontalField schema={ { title: 'Question' } }>
      <Field>
        <InputArea
          schema={ { placeholder: 'Explain how we can help you' } }
          layout={ { color: colorModifier.default, rows: 5 } }></InputArea>
      </Field>
    </HorizontalField>
    <HorizontalField>
      <Field>
        <FormButton layout={ { color: colorModifier.primary } }>Send Message</FormButton>
      </Field>
    </HorizontalField>
  </div>
  </form>);
