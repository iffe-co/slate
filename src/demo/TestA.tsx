import { useEffect, useRef } from 'react';
import { ReactEditor, RenderElementProps, useSlateStatic } from '@solidoc/slate-react';
import { Transforms } from '@solidoc/slate';

export const TestA = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const { checked } = element;

  const onClickSlate = () => {
    const path = ReactEditor.findPath(editor, element);
    const insertNode = { type: 'testp', children: [{ text: '我是slate insert' }] };
    Transforms.insertNodes(editor, insertNode, { at: path.concat(0) });
  };

  const onClickImmer = () => {};

  useEffect(() => {
    console.info('组件加载了useEffect');
    return () => {
      console.info('组件卸载useEffect');
    };
  }, []);

  return (
    <div {...attributes}>
      <div>
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
