import { Text } from '@solidoc/slate';

export const input = true;
export const test = value => {
  return Text.isText(value);
};
export const output = false;
