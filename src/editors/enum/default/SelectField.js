/* eslint-disable no-unused-vars */
/** @jsx h */

// import SelectControl from './SelectControl';
import EnumEditor from '../editor';

export default class SelectField extends EnumEditor {
  render(_, children) {
    return (<Field
      title={ this.title }>
      <SelectControl>
      </SelectControl>
      { children }
    </Field>);
  }
}
