/** @jsx jsx  */
import { Node } from '@solidoc/slate';
import { jsx } from '@solidoc/slate-hyperscript';

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
);
export const test = value => {
  return Array.from(Node.elements(value, { path: [0, 1] }));
};
export const output = [
  [
    <element>
      <text key="a" />
      <text key="b" />
    </element>,
    [0],
  ],
];
