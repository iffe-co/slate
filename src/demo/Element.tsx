import React from 'react';
import { RenderElementProps } from '@solidoc/slate-react';
import { TestA } from './TestA';
import { TestP } from './TestP';

export const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'testa':
      return <TestA {...props} />;
    case 'testp':
      return <TestP {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
