import { Range } from '@solidoc/slate';

export const input = {
  anchor: {
    path: [0, 1],
    offset: 0,
  },
};
export const test = value => {
  return Range.isRange(value);
};
export const output = false;
