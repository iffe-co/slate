/** @jsx jsx  */
import { Node } from '@solidoc/slate';
import { jsx } from '@solidoc/slate-hyperscript';

export const input = <text>one</text>;
export const test = value => {
  return Node.string(value);
};
export const output = `one`;
