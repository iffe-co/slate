import { Element } from '@solidoc/slate';

export const input = {
  children: [
    {
      children: [],
    },
  ],
};
export const test = value => {
  return Element.isElement(value);
};
export const output = true;
