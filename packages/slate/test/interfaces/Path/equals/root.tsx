import { Path } from '@solidoc/slate';

export const input = {
  path: [0, 1, 2],
  another: [],
};
export const test = ({ path, another }) => {
  return Path.equals(path, another);
};
export const output = false;
