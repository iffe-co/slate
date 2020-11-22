import { Node } from '@solidoc/slate';

export const input = true;
export const test = value => {
  return Node.isNodeList(value);
};
export const output = false;
