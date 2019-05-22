import {
  isPrimitiveTypeEx,
  isPrimitiveType,
  sanitizePrimitiveValue,
  isPureObject,
} from '__futilsjs';


export function checkIfValueDisabled(value, nullable, disabled) {
  if (disabled) return true;
  if (value === undefined) return true;
  if (nullable && value === null) return false;
  return !isPrimitiveType(value);
}

export function parseEnumArray(schema) {
  const enums = schema.enum;

  const nullable = schema.nullable;
  const options = schema.options || {};
  const bindvalue = options.bindValue || 'value';
  const bindtitle = options.bindTitle || 'title';
  const bindgroup = options.group
    ? options.bindGroup || 'group'
    : null;

  const template = schema.options.template;

  const normalized = [];

  if (enums.constructor === Array) {
    const firstenum = enums[0];
    // normalize array of array with groups (default)?
    if (firstenum.constructor === Array) {
      // 34-select-string-optgroup1
      // a similar sanitized structure will be returned
      // by all of the else/if statements below.
      for (let i = 0; i < enums.length; i++) {
        const row = enums[i];
        const label = isPrimitiveTypeEx(typeof row[0])
          ? row[0]
          : null;
        const items = row[1].constructor === Array
          ? row[1]
          : row[0].constructor === Array
            ? row[0]
            : null;

        if (!items) continue;

        normalized[normalized.length] = (!label)
          ? [[...items]]
          : [label, [...items]];
      }
      return { cache: normalized };
    }

    // normalize array of primitive types only?
    if (!firstenum || isPrimitiveTypeEx(typeof firstenum)) {
      // 31-select-string-basic1
      const titles = (template.constructor === Array)
        ? template
        : [];

      const items = [];
      for (let i = 0; i < enums.length; i++) {
        const value = sanitizePrimitiveValue(enums[i], nullable);
        const title = titles[i] || value;
        const disabled = checkIfValueDisabled(value, nullable, false);
        if (value || title) {
          items[items.length] = {
            value, title, disabled,
          };
        }
      }

      if (items.length > 0) {
        normalized[0] = [];
        normalized[0][0] = items;
      }

      return { cache: normalized };
    }

    // normalize array of objects?
    if (isPureObject(firstenum)) {
      // 33-select-string-compound
      // 35-select-string-optgroup2
      const groupnames = schema.options.group;

      const items = [];
      const cache = {};
      const order = [];
      // process all enum entries
      for (let i = 0; i < enums.length; i++) {
        const obj = enums[i];
        const key = obj[bindgroup];
        const value = sanitizePrimitiveValue(obj[bindvalue], nullable);
        const title = obj[bindtitle] || value;
        const disabled = checkIfValueDisabled(value, nullable, obj.disabled);

        if (!(value || title)) continue;

        // is there a group property present?
        if (!key) {
          // no, add it to the default items
          items[items.length] = {
            value, title, disabled,
          };
        }
        // yes, then its a child of a group
        else {
          // check if group exists in cache
          if (!cache[key]) {
            // if not, create it
            order[order.length] = key;
            cache[key] = [];
          }
          // add this element to the group
          const group = cache[key];
          group[group.length] = {
            value, title, disabled,
          };
        }
      }

      // finaly sanitize first array
      if (items.length > 0) {
        normalized[0] = [items];
      }
      // and the rest
      for (let i = 0; i < order.length; i++) {
        const label = groupnames[order[i]] || order[i];
        const items = cache[order[i]];

        normalized[normalized.length] = [
          label, items,
        ];
      }
      return { cache: normalized };
    }
  }

  if (isPureObject(enums)) {
    // normalize object of primitive types
    // 32-select-string-basic2
    const items = [];
    for (const key in enums) {
      if (enums.hasOwnProperty(key)) {
        const value = sanitizePrimitiveValue(key, nullable);
        const title = enums[key] || value;
        const disabled = checkIfValueDisabled(value, nullable, false);
        if (value || title) {
          items[items.length] = {
            value, title, disabled,
          };
        }
      }
    }
    if (items.length > 0) {
      normalized[0] = [];
      normalized[0][0] = items;
    }

    return { cache: normalized };
  }

  return {
    error: {
      classList: ['is-danger'],
      messageHeader: 'parseEnumArray',
      messageBody: 'Enum structure of schema is not recognized.',
    },
  };
}

export function findSelectedElement() {
  return undefined;
}
