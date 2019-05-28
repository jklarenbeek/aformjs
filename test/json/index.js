import { JSONSchemaDocument } from '__futilsjs';
import data from 'examples/schema/basic-person.json';

const doc = new JSONSchemaDocument();
doc.registerDefaultSchemaHandlers();
doc.loadSchema(data);
const root = doc.firstSchema();
