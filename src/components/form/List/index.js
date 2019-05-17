/* eslint-disable import/export */
/* eslint-disable import/prefer-default-export */
import { ListControl } from './ListControl';
import AutoRenderer from './AutoRenderer';

ListControl.config.renderer = AutoRenderer;

export { ListControl, ListGroup, InputItem } from './ListControl';
