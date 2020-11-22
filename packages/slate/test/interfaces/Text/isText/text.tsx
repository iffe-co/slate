import { Text } from '@solidoc/slate';

export const input = {
  text: '',
};
export const test = value => {
  return Text.isText(value);
};
export const output = true;
