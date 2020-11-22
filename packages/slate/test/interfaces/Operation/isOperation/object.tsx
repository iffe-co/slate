import { Operation } from '@solidoc/slate';

export const input = {};
export const test = value => {
  return Operation.isOperation(value);
};
export const output = false;
