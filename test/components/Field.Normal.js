/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from '__futilsjs';

import {
  colorModifier,
  stateModifier,
} from 'aformjs/components/modifiers';

import { Icon } from 'aformjs/components/elements/Icon';


import { NormalField } from 'aformjs/components/form/Field';

import { GroupedField } from 'aformjs/components/form/GroupedField';

import { InputString } from 'aformjs/components/form/InputString';
import { InputArea } from 'aformjs/components/form/InputArea';

import { SelectList } from 'aformjs/components/form/SelectList';
import { RadioList } from 'aformjs/components/form/RadioList';
import { CheckBox } from 'aformjs/components/form/CheckBox';

import RenderObject from 'aformjs/components/form/List/RenderObject';
import RenderArray from 'aformjs/components/form/List/RenderArray';

import { Help, HelpDanger } from 'aformjs/components/form/Help';

import { ResetButton, SubmitButton } from 'aformjs/components/form/FormButton';


export default (state, action) => (
  <form class="container">
  <div class='content'>
    <p class='title'># Form Controls</p>
    <p class='subtitle'>All generic form controls, designed for consistency</p>
    <NormalField schema={ { title: 'Name' }}>
      <InputString schema={ { placeholder: 'Your fullname' } } />
    </NormalField>
    <NormalField schema={ { title: 'Username' }}>
      <InputString
        schema={ { placeholder: 'Enter a valid username' } }
        layout={ { color: colorModifier.success } }
        iconLeft={ { name: 'user' } }
        iconRight={ { name: 'check', color: Icon.color.success } } />
      <Help>This username is available</Help>
    </NormalField>
    <NormalField schema={ { title: 'Email' }}>
      <InputString
        schema={ { placeholder: 'Email input', value: 'hello@' } }
        layout={ { color: colorModifier.danger } }
        iconLeft={ { name: 'envelope', color: Icon.color.danger } }
        iconRight={ { name: 'exclamation-triangle', color: Icon.color.danger } }/>
      <HelpDanger>This email is invalid</HelpDanger>
    </NormalField>
    <NormalField schema={ { title: 'Password' } }>
      <InputString
        schema={ { format: 'password', writeOnly: true, placeholder: 'Enter a strong password' } }
        layout={ { color: colorModifier.warning } }
        iconLeft={ { name: 'key' } }
        iconRight={ { name: 'eye', iconSet: Icon.sets.regular } } />
      <Help>Your password is weak</Help>
    </NormalField>
    <NormalField schema={ { title: 'Origins' } }>
      <SelectList
        schema={ { required: true, placeholder: 'Select country' } }
        options={ { nl: 'The Netherlands', de: 'Germany', be: 'Belgium', uk: 'United Kingdom' } }
        layout={ { state: stateModifier.loading } }
        iconLeft={ { name: 'globe' } }
        config={ { ...SelectList.config, renderer: RenderObject } }>
      </SelectList>
    </NormalField>
    <NormalField schema={ { title: 'Message' } }>
      <InputArea
        layout={ { color: colorModifier.default, rows: 5 } }></InputArea>
    </NormalField>
    <NormalField>
      <CheckBox $name='in-agreement' label='I agree to the [terms and conditions](/agreement.html)' />
    </NormalField>
    <NormalField>
      <RadioList
        $name='question'
        options={ ['Yes', 'No'] }
        config={ { ...RadioList.config, renderer: RenderArray } } />
    </NormalField>
    <GroupedField>
      <SubmitButton layout={ { color: colorModifier.link }}>Submit</SubmitButton>
      <ResetButton layout={ { color: colorModifier.text } }>Cancel</ResetButton>
    </GroupedField>
  </div>
  </form>);
