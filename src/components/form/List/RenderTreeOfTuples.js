/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* @jsx h */
import { h } from 'futilsjs';

import { Message } from 'aformjs/bulma-default';
import { ListControl } from './index';

/**
 *
 * @param {*} param0
 * @example
 * const options = [
  *  [ '2018',
  *    [ 'december',
  *      { key: 'one', label: 'One', ref: '/thou/shall/be/one/with/the/source' }
  *    ],
  *  ],
  *  [ '2019',
  *    [ 'Janaury',
  *      [ 'birthdays',
  *        [
  *          { key: 'two', label: 'Two' },
  *          [
  *            'forget'
  *            [
  *              { key: 'three', label: 'Three' },
  *            ]
  *          ]
  *        ],
  *      ],
  *    ],
  *  ]
  * ]
  */
export default function ListTreeOfTuples({ $name, options, selected = [], groups = {}, layout, onchange, focus, onblur, config = ListControl.config }) {
  return Message({}, 'OptionTreeOfTuples is not implemented');
}
