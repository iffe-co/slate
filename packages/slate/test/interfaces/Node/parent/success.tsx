/** @jsx jsx  */
import { Node } from '@solidoc/slate';
import { jsx } from '@solidoc/slate-hyperscript';

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
);
export const test = value => {
  return Node.parent(value, [0, 0]);
};
export const output = (
  <element>
    <text />
  </element>
);
