/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* @jsx h */
import { h } from '__futilsjs';

import { Icon, IconStack, IconText } from './Icon';

export default (state, action) => (
  <div class='container'><div class='content'>
  <p class='title'># Icon Elements</p>
  <p class='subtitle'>Font Awesome 5 Stacked Icons</p>
  <div class={ Icon.sizes.x2 }>
    <IconStack>
      <Icon name='square' stack2x style={ { color: '#1da1f2' } } />
      <Icon name='twitter' stack1x iconSet={ Icon.sets.brands } inverse />
    </IconStack>
    <IconStack>
      <Icon name='circle' stack2x iconSet={ Icon.sets.regular } style={ { color: '#0d92e3' } } />
      <Icon name='twitter' stack1x iconSet={ Icon.sets.brands } style={ { color: '#1da1f2' } } />
    </IconStack>
    <IconStack>
      <Icon name='circle' stack2x color={ Icon.color.warning } />
      <Icon name='flag' stack1x color={ Icon.color.primary } />
    </IconStack>
    <IconStack>
      <Icon name='square' stack2x />
      <Icon name='terminal' stack1x inverse />
    </IconStack>
    <IconStack>
      <Icon name='camera' stack1x />
      <Icon name='ban' stack2x color={ Icon.color.danger } />
    </IconStack>
    <IconStack>
      <Icon name='file' stack2x iconSet={ Icon.sets.regular } />
      <Icon name='cog' stack1x isFileIcon/>
    </IconStack>
    <IconStack>
      <Icon name='file' stack2x iconSet={ Icon.sets.regular } />
      <IconText stack1x isFileText>PDF</IconText>
    </IconStack>
    <IconStack>
      <Icon name='calendar' stack2x iconSet={ Icon.sets.regular } />
      <IconText stack1x strong isCalendarText>27</IconText>
    </IconStack>
    <IconStack>
      <Icon name='comment' stack2x color={ Icon.color.link } />
      <IconText stack1x inverse strong>5</IconText>
    </IconStack>
    <IconStack>
      <Icon name='circle' stack2x color={ Icon.color.greyLighter } />
      <Icon name='circle' stack2x color={ Icon.color.grey } iconSet={ Icon.sets.regular } />
      <Icon name='lock' stack1x />
    </IconStack>
    <IconStack>
      <Icon name='square' stack2x style={ { color: '#693a0d' } } />
      <Icon name='buromobelexperte' stack1x strong iconSet={ Icon.sets.brands } inverse rotate={ [Icon.rotates.deg90, Icon.rotates.flipV] } style={ { color: '#d97a1d' } } />
    </IconStack>
    <IconStack>
      <Icon name='spinner' stack2x animate={ [Icon.animates.pulse, Icon.animates.spin] } style={ { color: '#ae6eec' } } />
      <Icon name='divide' stack1x animate={ Icon.animates.spin } style={ { color: '#8a2be2' } } />
    </IconStack>
  </div>
  </div></div>);
