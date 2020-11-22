/** @jsx jsx  */
import { Node } from '@solidoc/slate';
import { jsx } from '@solidoc/slate-hyperscript';

export const input = (
  <element>
    <text>one</text>
    <text>two</text>
  </element>
);
export const test = value => {
  return Node.string(value, [1]);
};
export const output = `onetwo`;
