/* eslint-disable object-curly-newline */

export const configMeter = { meterClass: 'meter' };

/**
 * MeterOutput
 *
 * @param {!object} props
 * @param {string} [props.$id] - DOM Element Identifier.
 * @param {string} [props.$name=props.$id] - HTML Form Field Identier.
 * @param {!object} [props.schema={}] - see string type for JSONSchema.
 * @param {number} [props.schema.minimum] - see jsonschema number.minimum.
 * @param {number} [props.schema.maximum] - see jsonschema number.maximum.
 * @param {number} [props.schema.low] - see HTML5 <meter /> low attribute.
 * @param {number} [props.schema.high] - see HTML5 <meter /> high attribute.
 * @param {number} [props.schema.optimum] - see HTML5 <meter /> optimum attribute.
 * @param {!string} [$value] - value of input element.
 * @param {(string|string[])} [props.class] - see HTML5 class attribute.
 * @return {!JSX} jsx <input /> component for string types.
 */
export function MeterOutput({ $id, $name, schema = {}, $value, class: classList, config = configMeter }, children) {
  return (<meter
    id={ $id }
    name={ $name }
    class={ [config.meterClass, classList] }
    min={ schema.minimum }
    max={ schema.maximum }
    low={ schema.low }
    high={ schema.high }
    optimum={ schema.optimum }
    value={ $value }
    >
    { children }
  </meter>);
}
