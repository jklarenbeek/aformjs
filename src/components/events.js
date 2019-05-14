/**
 * OnInputEvent callback
 *
 * Is fired before onKeyUp or onChange
 *
 * @callback OnInputEvent
 * @param {!Event} ev
 */

/**
 * OnKeyUpEvent callback
 *
 * Is fired after onInput when key is released.
 *
 * @callback OnKeyUpEvent
 * @param {!Event} ev
 */

/**
 * OnChangeEvent callback
 *
 * Is fired after onInput when value has changed.
 *
 * @callback OnChangeEvent
 * @param {!Event} ev
 */

/**
 * OnFocusEvent callback
 *
 * Is fired when control gets the focus.
 *
 * @callback OnFocusEvent
 * @param {!Event} ev
 */

/**
 * OnBlurEvent callback
 *
 * Is fired when control looses the focus.
 *
 * @callback OnBlurEvent
 * @param {!Event} ev
 */

/**
  * JSX VNode
  *
  * @typedef JSX
  * @type {object}
  * @property {string} nodeName - HTML tag for element
  * @property {object} [attributes] - HTML attributes of element
  * @property {JSX[]} [children] - Array of JSX nodes as child elements
  * @property {string} [key] - internal identief amongst siblings.
  */
