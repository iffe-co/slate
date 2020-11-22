import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Slate, Editable, withReact, RenderElementProps, ReactEditor, useEditor, useSlate } from '@solidoc/slate-react';
import { createEditor, Transforms, Node } from '@solidoc/slate';
import { withHistory } from '@solidoc/slate-history';

export const TestImmer = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, []);

  const editor = useMemo(() => {
    return withHistory(withReact(createEditor()));
  }, []);

  const onChange = (value: Node[]) => {
    setValue(value);
  };

  console.info('editor', editor);

  return (
    <div className="App">
      <Slate editor={editor} value={value} onChange={onChange}>
        <Editable renderElement={renderElement} placeholder="Get to work…" spellCheck autoFocus />
      </Slate>
    </div>
  );
};

let oldElement: any;

const CheckListItemElement: React.FC<RenderElementProps> = props => {
  const { attributes, children, element } = props;
  // const editor = useEditor();
  const { checked } = element;

  // console.info('对比element:', editor);
  oldElement = element;

  const onClickSlate = () => {
    // console.info('!!!!!!');
    // const path = ReactEditor.findPath(editor, element);
    // const node = { checked: true };
    // const insertNode = { type: 'testp', children: [{ text: '我是slate insert' }] };
    // Transforms.insertNodes(editor, insertNode, { at: path.concat(0) });
    // // Transforms.setNodes(editor,node,{at:path.concat(0)});
  };

  const onClickImmer = () => {};

  useMemo(() => {
    console.info('slate render', 'element 变化', element);
  }, [element]);

  useEffect(() => {
    console.info('组件加载了useEffect');
    return () => {
      console.info('组件卸载useEffect');
    };
  }, []);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.info('ref:', ref.current);
    }
  }, []);

  return (
    <div {...attributes}>
      <div ref={ref}>
        <div contentEditable={false} suppressContentEditableWarning>
          <button onClick={onClickSlate}>slate insert</button>
          <button onClick={onClickImmer}>immer insert</button>
          {checked ? 'true' : 'false'}
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};

const TestP: React.FC<RenderElementProps> = props => {
  const { attributes, children, element } = props;
  // const editor = useEditor();
  const { checked } = element;

  // const onClick = () => {
  //   const path = ReactEditor.findPath(editor, element);
  //   Transforms.setNodes(editor, { checked: !checked }, { at: path });
  // };

  useMemo(() => {
    console.info('TestP组件加载了useMemo');
  }, [element]);

  return (
    <div {...attributes}>
      <div>
        <div contentEditable={false} suppressContentEditableWarning>
          <button>testp按钮</button>
          {/* {checked ? "true" : "false"} */}
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};

const initialValue = [
  {
    type: 'check-list-item',
    checked: true,
    children: [
      {
        type: 'testp',
        children: [{ text: 'Slide to the left.' }],
      },
    ],
  },
  // {
  //   type: 'testp',
  //   children: [{ text: 'Slide to the left.' }],
  // }
];

const initialValue2 = [
  {
    type: 'check-list-item',
    checked: true,
    children: [{ text: '我是变更数据' }],
  },
];

const Element: React.FC<RenderElementProps> = props => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'check-list-item':
      return <CheckListItemElement {...props} />;
    case 'testp':
      return <TestP {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
