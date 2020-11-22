import { Path } from '@solidoc/slate';

export const input = {
  path: [0, 1],
  another: [],
};
export const test = ({ path, another }) => {
  return Path.isChild(path, another);
};
export const output = false;
