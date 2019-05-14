const schema = {
  title: '',
  description: '',
  items: {},
  required: false,
  nullable: true,
};
Object.freeze(schema);

const layout = {
  fullwidth: false,
  color: '',
  style: [],
  size: '',
};
Object.freeze(schema);

const icon = {
  name: '',
};
Object.freeze(schema);

const config = {
  controlClass: '',
};
Object.freeze(schema);

export default {
  schema,
  layout,
  icon,
  config,
};
