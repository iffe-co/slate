import { Text } from '@solidoc/slate';

export const input = [
  {
    children: [],
  },
];
export const test = value => {
  return Text.isTextList(value);
};
export const output = false;
