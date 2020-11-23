import React, { useState, useMemo, useCallback } from 'react';
import { Slate, Editable, withReact } from '@solidoc/slate-react';
import { createEditor, Node } from '@solidoc/slate';
import { withHistory } from '@solidoc/slate-history';
import { Element } from './Element';
import { initialValue } from './initialValue';

export const TestDemo = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, []);

  const editor = useMemo(() => {
    return withHistory(withReact(createEditor()));
  }, []);

  const onChange = (value: Node[]) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable renderElement={renderElement} placeholder="Get to work…" spellCheck autoFocus />
      </Slate>
    </div>
  );
};
