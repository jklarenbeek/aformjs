/* eslint-disable object-curly-newline */
export const configProgress = { progressClass: 'progress' };

/**
 * ProgressOutput
 *
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {number} [maximum] - see HTML5 <meter /> low attribute.
 * @param {!string} [$value] - value of input element.
 * @param {(string|string[])} [props.class] - see HTML5 class attribute.
 * @return {!JSX} jsx <input /> component for string types.
 */
export function ProgressOutput({ $id, $name, maximum, $value, class: classList, config = configProgress }, children) {
  return (<progress
    id={ $id }
    name={ $name }
    class={ [config.progressClass, classList] }
    max={ maximum }
    value={ $value }>
    { children }
  </progress>);
}
